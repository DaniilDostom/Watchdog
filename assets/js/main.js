/* ================================================
   Watchdog – main.js
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------
     1. Navbar: cambia background allo scroll
  -------------------------------------------------- */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.backgroundColor = 'rgba(13, 13, 13, 0.98)';
    } else {
      navbar.style.backgroundColor = '';
    }
  });

  /* --------------------------------------------------
     2. Smooth scroll per tutti i link ancora
  -------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });

        // Chiude il menu mobile se aperto
        const navCollapse = document.querySelector('#navbarNav');
        if (navCollapse && navCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navCollapse).hide();
        }
      }
    });
  });

  /* --------------------------------------------------
     3. Scroll reveal animation
  -------------------------------------------------- */
  const revealElements = document.querySelectorAll(
    '.feature-card, .stat-card, .contact-card, .about-visual, .check-icon'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // staggered delay per elementi fratelli
          const siblings = [...entry.target.closest('.row')?.children || []];
          const delay = siblings.indexOf(entry.target.closest('[class^="col"]')) * 80;
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach(el => observer.observe(el));

  /* --------------------------------------------------
     4. Contact form (demo – mostra messaggio di successo)
     Integra con Formspree, EmailJS o simili in produzione.
  -------------------------------------------------- */
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Validazione Bootstrap
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      // Simula invio (sostituire con chiamata API reale)
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Invio in corso...';

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = '<i class="bi bi-send me-2"></i>Invia messaggio';
        successMsg.classList.remove('d-none');
        form.reset();
        form.classList.remove('was-validated');

        // Nasconde il messaggio dopo 5 sec
        setTimeout(() => successMsg.classList.add('d-none'), 5000);
      }, 1200);
    });
  }

  /* --------------------------------------------------
     5. Active nav link in base alla sezione visibile
  -------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => sectionObserver.observe(s));

});

