/* ===========================
   PORTFOLIO — main.js
   Valentin De Frutos
=========================== */

// ─── State ───────────────────────────────
let currentLang = 'en';

// ─── DOM refs ────────────────────────────
const langToggle   = document.getElementById('langToggle');
const navbar       = document.getElementById('navbar');
const hamburger    = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobileMenu');

// ─── Language Toggle ─────────────────────
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update all [data-en] / [data-es] elements
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = lang === 'es' ? el.dataset.es : el.dataset.en;
  });

  // Update toggle button label
  langToggle.querySelector('.lang-toggle__label').textContent =
    lang === 'en' ? 'ES' : 'EN';

  // Persist preference
  localStorage.setItem('vdf-lang', lang);
}

langToggle.addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'es' : 'en');
});

// Restore saved language
const savedLang = localStorage.getItem('vdf-lang');
if (savedLang) setLanguage(savedLang);

// ─── Nav scroll shadow ───────────────────
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ─── Hamburger / Mobile Menu ─────────────
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', false);
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMobile();
  }
});

// ─── Scroll Reveal ───────────────────────
const revealEls = document.querySelectorAll(
  '.section__label, .section__heading, .skill-card, .project-card, ' +
  '.about__text, .about__stats, .stat, .resume__block, ' +
  '.contact__block, .contact__item'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger children in the same section
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 60 * (entry.target.dataset.delay || 0));
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

// Add stagger delays to grid children
document.querySelectorAll('.skills__grid, .projects__grid, .contact__links').forEach(grid => {
  [...grid.children].forEach((child, i) => {
    child.dataset.delay = i;
  });
});

revealEls.forEach(el => revealObserver.observe(el));

// ─── Active nav link on scroll ───────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === '#' + entry.target.id
            ? 'var(--charcoal)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));

// ─── Smooth anchor scroll (offset for fixed nav) ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
