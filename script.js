/* ═══════════════════════════════════════════════════
   THE BRVENIK BRIEF — Interactive Behavior
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── NAV: Scroll State ─── */
  const nav = document.getElementById('nav');
  const handleNavScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* ─── NAV: Mobile Toggle ─── */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    const isOpen = navLinks.classList.contains('open');
    spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity    = isOpen ? '0' : '1';
    spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const spans = navToggle.querySelectorAll('span');
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });

  /* ─── REVEAL ON SCROLL ─── */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // Stagger siblings within the same parent
        const parent = entry.target.parentElement;
        const siblings = Array.from(parent.querySelectorAll(':scope > .reveal'));
        const position = siblings.indexOf(entry.target);
        const delay = position >= 0 ? position * 80 : 0;

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ─── STAT COUNTER ANIMATION ─── */
  const statNumbers = document.querySelectorAll('.hero__stat-number[data-count]');

  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const startTime = performance.now();

    const easeOutQuart = t => 1 - Math.pow(1 - t, 4);

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = Math.round(eased * target);

      el.textContent = target >= 1000
        ? current.toLocaleString() + (progress < 1 ? '' : '+')
        : current;

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => statObserver.observe(el));

  /* ─── SUBSCRIBE FORM ─── */
  const subscribeBtn     = document.getElementById('subscribeBtn');
  const emailInput       = document.getElementById('emailInput');
  const subscribeForm    = document.getElementById('subscribeForm');
  const subscribeSuccess = document.getElementById('subscribeSuccess');

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  subscribeBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      emailInput.style.outline = '2px solid #B83030';
      emailInput.focus();
      setTimeout(() => { emailInput.style.outline = ''; }, 2000);
      return;
    }

    // Simulate submission
    subscribeBtn.textContent = 'Subscribing…';
    subscribeBtn.disabled = true;

    setTimeout(() => {
      subscribeForm.style.display = 'none';
      subscribeSuccess.classList.add('active');
      document.querySelector('.subscribe__note').style.display = 'none';
    }, 1200);
  });

  // Allow Enter key to submit
  emailInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') subscribeBtn.click();
  });

  /* ─── SMOOTH ANCHOR SCROLL (fallback) ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ─── PARALLAX-SUBTLE: Hero Grid ─── */
  const heroGrid = document.querySelector('.hero__bg-grid');
  if (heroGrid) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroGrid.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    }, { passive: true });
  }

});
