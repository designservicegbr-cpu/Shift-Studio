/* ═══════════════════════════════════════════════
   DESIGN SERVICE GBR — script.js
   ═══════════════════════════════════════════════ */

/* ── MOBILE MENU ── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

/* ── ACTIVE NAV LINK on scroll ── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

function setActiveLink() {
  let current = '';
  sections.forEach(sec => {
    const sTop = sec.offsetTop - 90;
    if (window.scrollY >= sTop) current = sec.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--elec)'
      : '';
  });
}
window.addEventListener('scroll', setActiveLink);

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll(
  '.service-card, .plan-card, .client-tile, .port-item, .mission-card, .stat, .metodologia-box, .mv-panel, .manifest .m-line, .phil'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // stagger each element slightly
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80 * (Array.from(revealEls).indexOf(entry.target) % 6));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

/* ── CONTACT FORM ── */
function handleForm(e) {
  e.preventDefault();
  const success = document.getElementById('form-success');
  const btn = e.target.querySelector('button[type="submit"]');

  btn.textContent = 'Enviando...';
  btn.style.opacity = '0.7';

  setTimeout(() => {
    e.target.reset();
    btn.textContent = 'Enviar Mensaje →';
    btn.style.opacity = '1';
    success.style.display = 'block';
    setTimeout(() => { success.style.display = 'none'; }, 4000);
  }, 1200);
}

/* ── NAVBAR SHADOW on scroll ── */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});