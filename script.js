/* ══════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════ */
const dot     = document.getElementById('cursor-dot');
const outline = document.getElementById('cursor-outline');

let mx = 0, my = 0;
let ox = 0, oy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
});

(function animOutline() {
  ox += (mx - ox - 16) * 0.13;
  oy += (my - oy - 16) * 0.13;
  outline.style.transform = `translate(${ox}px, ${oy}px)`;
  requestAnimationFrame(animOutline);
})();

/* Expand cursor on interactive elements */
const interactives = 'a, button, .project-row, .skill-item, .cta-primary, .cta-link';
document.querySelectorAll(interactives).forEach(el => {
  el.addEventListener('mouseenter', () => {
    outline.style.width        = '48px';
    outline.style.height       = '48px';
    outline.style.borderColor  = 'rgba(184,58,30,0.5)';
  });
  el.addEventListener('mouseleave', () => {
    outline.style.width        = '32px';
    outline.style.height       = '32px';
    outline.style.borderColor  = 'rgba(13,11,9,0.25)';
  });
});

/* ══════════════════════════════════════
   NAV SCROLL STATE
══════════════════════════════════════ */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ══════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ══════════════════════════════════════
   ACTIVE NAV LINK ON SCROLL
══════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-center a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--ink)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));