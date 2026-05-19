/* ─────────────────────────────────────────
   ZACH GLASS — PORTFOLIO SCRIPTS
   ───────────────────────────────────────── */

// ── Sticky nav: show after scrolling past hero ──
const nav = document.getElementById('nav');
const hero = document.getElementById('hero');

const navObserver = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      nav.classList.add('visible');
    } else {
      nav.classList.remove('visible');
    }
  },
  { threshold: 0.1 }
);

if (hero) navObserver.observe(hero);

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Also observe pillar and stat cards (they have reveal class via parent context)
document.querySelectorAll('.pillar, .stat, .case-stat, .timeline-item, .award-item').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ── Animated number counters ──
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const isDecimal = el.dataset.target.includes('.');
  const decimals = isDecimal ? (el.dataset.target.split('.')[1] || '').length : 0;
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;
    const display = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toLocaleString();
    el.textContent = prefix + display + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// ── Smooth scroll for all anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
