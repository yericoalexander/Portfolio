import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';

const WEEKS = 53;
const DAYS_PER_WEEK = 7;
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

function formatISODate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function buildWeeksGrid(contributionsMap) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay());

  const startDate = new Date(sunday);
  startDate.setDate(sunday.getDate() - (WEEKS - 1) * DAYS_PER_WEEK);

  const grid = [];
  for (let w = 0; w < WEEKS; w++) {
    const week = [];
    for (let d = 0; d < DAYS_PER_WEEK; d++) {
      const cellDate = new Date(startDate);
      cellDate.setDate(startDate.getDate() + w * DAYS_PER_WEEK + d);
      const iso = formatISODate(cellDate);
      const entry = contributionsMap[iso];
      week.push({
        date: cellDate,
        iso,
        count: entry?.count ?? 0,
        level: entry?.level ?? 0
      });
    }
    grid.push(week);
  }
  return grid;
}

function getMonthLabels(weeksGrid) {
  const labels = new Array(WEEKS).fill('');
  for (let w = 0; w < weeksGrid.length; w++) {
    for (const day of weeksGrid[w]) {
      if (day.date.getDate() === 1) {
        labels[w] = day.date.toLocaleDateString('en-US', { month: 'short' });
        break;
      }
    }
  }
  if (!labels[0] && weeksGrid[0]?.[0]) {
    labels[0] = weeksGrid[0][0].date.toLocaleDateString('en-US', { month: 'short' });
  }
  return labels;
}

export default function GitHubGraph() {
  const [weeksGrid, setWeeksGrid] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [tooltip, setTooltip] = useState(null);
  const containerRef = useRef(null);

  const username = personalInfo.githubUsername || 'yericoalexander';
  const profileUrl = personalInfo.socials?.find((s) => s.label.toLowerCase() === 'github')?.url || `https://github.com/${username}`;

  useEffect(() => {
    let isCancelled = false;
    const apiUrl = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch contributions');
        return res.json();
      })
      .then((data) => {
        if (isCancelled) return;

        const map = {};
        for (const item of data.contributions ?? []) {
          map[item.date] = { count: item.count, level: item.level };
        }

        setTotalCount(data.total?.lastYear ?? null);
        setWeeksGrid(buildWeeksGrid(map));
      })
      .catch(() => {
        if (!isCancelled) {
          setHasError(true);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [username]);

  const handleCellMouseEnter = (e, cell) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltip({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        count: cell.count,
        label: cell.date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      });
    }
  };

  const handleCellMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <section className="about-section story-panel" id="github">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-header-top">
            <p className="section-marker">06 — github</p>
            <a 
              className="section-header-link" 
              href={profileUrl} 
              target="_blank" 
              rel="noreferrer"
            >
              View Profile ↗
            </a>
          </div>
          <h2 className="section-title">building in public</h2>
        </div>

        {hasError ? (
          <div className="github-graph-error">
            <p>Couldn't load my contribution graph right now.</p>
            <a 
              className="btn btn-secondary btn-sm" 
              href={profileUrl} 
              target="_blank" 
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>
          </div>
        ) : !weeksGrid ? (
          <div className="github-graph-skeleton" aria-hidden="true">
            <div className="github-graph-skeleton-grid">
              {Array.from({ length: WEEKS * DAYS_PER_WEEK }).map((_, idx) => (
                <span key={idx} className="github-graph-skeleton-cell" />
              ))}
            </div>
          </div>
        ) : (
          <div className="github-graph" ref={containerRef}>
            {/* Interactive Tooltip */}
            {tooltip && (
              <div 
                className="github-graph-tooltip" 
                style={{ left: tooltip.x, top: tooltip.y }} 
                role="tooltip"
              >
                <strong>{tooltip.count}</strong>{' '}
                {tooltip.count === 1 ? 'contribution' : 'contributions'} on {tooltip.label}
              </div>
            )}

            {/* Header with live total */}
            <div className="github-graph-header">
              <span className="github-graph-total">
                {totalCount !== null ? totalCount.toLocaleString('en-US') : '—'} contributions in the last year
              </span>
            </div>

            {/* Scrollable Heatmap Grid */}
            <div className="github-graph-scroll">
              <div className="github-graph-inner">
                {/* Months row */}
                <div className="github-graph-months">
                  {getMonthLabels(weeksGrid).map((month, idx) => (
                    <span key={idx} className="github-graph-month">
                      {month}
                    </span>
                  ))}
                </div>

                {/* Days column */}
                <div className="github-graph-days">
                  {DAY_LABELS.map((label, idx) => (
                    <span key={idx} className="github-graph-day">
                      {label}
                    </span>
                  ))}
                </div>

                {/* 53 weeks x 7 days grid cells */}
                <div className="github-graph-grid">
                  {weeksGrid.flat().map((cell) => (
                    <span 
                      key={cell.iso}
                      className="github-graph-cell"
                      data-level={cell.level}
                      onMouseEnter={(e) => handleCellMouseEnter(e, cell)}
                      onMouseLeave={handleCellMouseLeave}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Legend footer */}
            <div className="github-graph-footer">
              <span className="github-graph-legend-label">Less</span>
              <span className="github-graph-cell" data-level="0" />
              <span className="github-graph-cell" data-level="1" />
              <span className="github-graph-cell" data-level="2" />
              <span className="github-graph-cell" data-level="3" />
              <span className="github-graph-cell" data-level="4" />
              <span className="github-graph-legend-label">More</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
