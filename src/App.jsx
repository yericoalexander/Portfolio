import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import OverlayMenu from './components/OverlayMenu';
import Footer from './components/Footer';

// Lazy-loaded pages for code splitting and instant initial page load
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const Experience = lazy(() => import('./pages/Experience'));
const Education = lazy(() => import('./pages/Education'));
const Stack = lazy(() => import('./pages/Stack'));
const Blogs = lazy(() => import('./pages/Blogs'));

const VALID_PAGES = [
  'about-me',
  'contact',
  'projects',
  'experience',
  'education',
  'stack',
  'blogs'
];

function getInitialRoute() {
  const path = window.location.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  if (path.startsWith('project/')) {
    const slug = path.split('/')[1];
    return slug ? path : 'projects';
  }
  return VALID_PAGES.includes(path) ? path : 'about-me';
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize theme
  useEffect(() => {
    const saved = localStorage.getItem('theme-preference') || 'dark';
    applyTheme(saved);
  }, []);

  const applyTheme = (mode) => {
    setTheme(mode);
    localStorage.setItem('theme-preference', mode);
    const root = document.documentElement;
    const body = document.body;

    root.classList.remove('light-theme', 'dark-theme');
    body.classList.remove('light-theme', 'dark-theme');
    root.classList.add(`${mode}-theme`);
    body.classList.add(`${mode}-theme`);
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  };

  // Navigation handler
  const handleNavigate = useCallback((target) => {
    setCurrentRoute(target);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.history.pushState(null, '', `/${target}`);
  }, []);

  // Listen to browser Back / Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const route = getInitialRoute();
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Active navigation indicator in sidebar
  const activeNav = currentRoute.startsWith('project/') ? 'projects' : currentRoute;

  // View resolver
  const renderCurrentPage = () => {
    if (currentRoute.startsWith('project/')) {
      const slug = currentRoute.split('/')[1];
      return <ProjectDetails slug={slug} onNavigate={handleNavigate} />;
    }

    switch (currentRoute) {
      case 'about-me':
        return <AboutMe onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'projects':
        return <Projects onNavigate={handleNavigate} />;
      case 'experience':
        return <Experience fullPage={true} onNavigate={handleNavigate} />;
      case 'education':
        return <Education fullPage={true} onNavigate={handleNavigate} />;
      case 'stack':
        return <Stack fullPage={true} onNavigate={handleNavigate} />;
      case 'blogs':
        return <Blogs onNavigate={handleNavigate} />;
      default:
        return <AboutMe onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-layout">
      {/* Sidebar with layoutId animated pill */}
      <Sidebar 
        activeSection={activeNav} 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        onNavigate={handleNavigate} 
      />

      {/* Main Content Area */}
      <div className="content-area">
        {/* Mobile Topbar */}
        <Topbar 
          theme={theme} 
          onToggleTheme={toggleTheme} 
          onToggleMenu={() => setIsMobileMenuOpen(true)} 
          onNavigate={handleNavigate}
        />

        {/* Mobile Navigation Drawer */}
        <OverlayMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
          onNavigate={handleNavigate} 
        />

        {/* Scrollable Page */}
        <main className="hero-page">
          <div className="story-bg" aria-hidden="true" />

          <div className="page-wrapper">
            <Suspense fallback={null}>
              {renderCurrentPage()}
            </Suspense>
          </div>

          {/* Final Chapter Footer */}
          <Footer onNavigate={handleNavigate} />
        </main>
      </div>
    </div>
  );
}
