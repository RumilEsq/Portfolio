// Scroll animation
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.project-card, .stat-box, .about-text').forEach(function(el) {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Active nav link on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach(function(section) {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#3A6EA5';
    }
  });
});
