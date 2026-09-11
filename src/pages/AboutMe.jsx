import React from 'react';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Experience from './Experience';
import Achievements from './Achievements';
import Stack from './Stack';
import Education from './Education';
import GitHubGraph from '../components/GitHubGraph';

export default function AboutMe({ onNavigate }) {
  return (
    <div className="page-content">
      <Hero onNavigate={onNavigate} />
      <FeaturedProjects onNavigate={onNavigate} compact={false} />
      <Experience fullPage={false} onNavigate={onNavigate} />
      <Achievements fullPage={false} onNavigate={onNavigate} />
      <Stack fullPage={false} onNavigate={onNavigate} />
      <Education fullPage={false} onNavigate={onNavigate} />
      <GitHubGraph />
    </div>
  );
}
