export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { username = 'yericoalexander' } = req.query || {};

  try {
    const url = `https://github.com/users/${username}/contributions`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `GitHub error: ${response.statusText}` });
    }

    const html = await response.text();
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

    return res.status(200).json({ total, contributions });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
