import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function githubContributionsDevPlugin() {
  return {
    name: 'github-contributions-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, `http://${req.headers.host}`);
        if (url.pathname === '/api/contributions') {
          const username = url.searchParams.get('username') || 'yericoalexander';
          try {
            const ghRes = await fetch(`https://github.com/users/${username}/contributions`, {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
              }
            });
            if (!ghRes.ok) {
              res.statusCode = ghRes.status;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: `GitHub error: ${ghRes.statusText}` }));
              return;
            }
            const html = await ghRes.text();
            const totalMatch = html.match(/([0-9,]+)\s+contributions\s+in\s+the\s+last\s+year/i);
            const total = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ''), 10) : 0;

            const tooltipMap = {};
            const tooltips = html.matchAll(/<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g);
            for (const match of tooltips) {
              const id = match[1];
              const text = match[2].trim();
              const countMatch = text.match(/^([0-9]+|No)\s+contribution/i);
              if (countMatch) {
                tooltipMap[id] = countMatch[1].toLowerCase() === 'no' ? 0 : parseInt(countMatch[1], 10);
              }
            }

            const contributions = [];
            const tdMatches = html.matchAll(/<td[^>]*class="[^"]*ContributionCalendar-day[^"]*"[^>]*>/g);
            for (const match of tdMatches) {
              const tdTag = match[0];
              const dateMatch = tdTag.match(/data-date="([^"]+)"/);
              const levelMatch = tdTag.match(/data-level="([0-9])"/);
              const idMatch = tdTag.match(/id="([^"]+)"/);
              if (dateMatch && levelMatch) {
                const date = dateMatch[1];
                const level = parseInt(levelMatch[1], 10);
                const id = idMatch ? idMatch[1] : null;
                const count = (id && tooltipMap[id] !== undefined) ? tooltipMap[id] : (level > 0 ? 1 : 0);
                contributions.push({ date, level, count });
              }
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 'no-cache');
            res.end(JSON.stringify({ total, contributions }));
          } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message }));
          }
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), githubContributionsDevPlugin()],
  server: {
    port: 3000,
    open: false
  },
  preview: {
    port: 3000
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion']
        }
      }
    }
  }
});
