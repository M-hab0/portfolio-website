/* =============================================
   MAIN.JS — Mahdi Habibi Portfolio
   Modules:
    1. Custom cursor follower
    2. Scroll progress bar
    3. Header scroll state
    4. Mobile nav toggle
    5. Active link on scroll
    6. Parallax effects
    7. Intersection Observer reveals
    8. Counter animation (hero stats)
    9. Skills bar animation
   10. Contact form handling
   11. Footer year
============================================= */

(() => {
  'use strict';

  /* ===========================================
     1. CUSTOM CURSOR
  =========================================== */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');

  if (cursor && follower && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      cursor.style.opacity = '1';
      follower.style.opacity = '1';
    });

    // Smooth follower with lerp
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateFollower);
    };
    animateFollower();

    // Hover state on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, .project-card, .skill-card, .contact__item, input, textarea');
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => follower.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => follower.classList.remove('is-hover'));
    });

    // Hide when leaving window
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      follower.style.opacity = '0';
    });
  }


  /* ===========================================
     2. SCROLL PROGRESS BAR
  =========================================== */
  const progressBar = document.getElementById('scroll-progress');

  const updateProgress = () => {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${percent}%`;
  };


  /* ===========================================
     3. HEADER SCROLL STATE
  =========================================== */
  const header = document.getElementById('header');

  const updateHeader = () => {
    if (!header) return;
    if (window.scrollY > 50) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };


  /* ===========================================
     4. MOBILE NAV TOGGLE
  =========================================== */
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  const openMenu = () => {
    navMenu?.classList.add('is-open');
    navToggle?.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    navMenu?.classList.remove('is-open');
    navToggle?.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  navToggle?.addEventListener('click', openMenu);
  navClose?.addEventListener('click', closeMenu);
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));


  /* ===========================================
     5. ACTIVE LINK ON SCROLL
  =========================================== */
  const sections = document.querySelectorAll('section[id]');

  const updateActiveLink = () => {
    const scrollY = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav__link[href="#${id}"]`);

      if (!link) return;

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((l) => l.classList.remove('active-link'));
        link.classList.add('active-link');
      }
    });
  };


  /* ===========================================
     6. PARALLAX EFFECTS
  =========================================== */
  const parallaxEls = document.querySelectorAll('[data-parallax]');

  const updateParallax = () => {
    if (window.matchMedia('(max-width: 56.25rem)').matches) return;
    const scrollY = window.scrollY;

    parallaxEls.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.2;
      const rect = el.getBoundingClientRect();
      const elTop = rect.top + scrollY;
      const offset = (scrollY - elTop) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
  };

  // Orbs parallax based on mouse
  const orbs = document.querySelectorAll('.orb');
  document.addEventListener('mousemove', (e) => {
    if (window.matchMedia('(max-width: 56.25rem)').matches) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    orbs.forEach((orb, i) => {
      const speed = (i + 1) * 15;
      orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  });


  /* ===========================================
     7. INTERSECTION OBSERVER REVEALS
  =========================================== */
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px',
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // Auto-tag sections with reveal class
  const revealTargets = document.querySelectorAll(
    '.section__header, .about__text, .about__card, .skill-card, .project-card, .testimonial, .contact__info, .contact__form'
  );
  revealTargets.forEach((el) => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });


  /* ===========================================
     8. COUNTER ANIMATION (HERO STATS)
  =========================================== */
  const counters = document.querySelectorAll('[data-count]');

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1600;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach((el) => counterObserver.observe(el));


  /* ===========================================
     9. SKILLS BAR ANIMATION
  =========================================== */
  const skillCards = document.querySelectorAll('.skill-card');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillCards.forEach((card) => skillObserver.observe(card));


  /* ===========================================
     10. CONTACT FORM HANDLING
     - Sends to Formspree if configured (real email)
     - Otherwise falls back to WhatsApp
  =========================================== */
  const form = document.getElementById('contact-form');
  const formNote = document.getElementById('form-note');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = form.subject.value.trim() || 'Project inquiry';

    formNote.className = 'contact__form-note';
    formNote.textContent = '';

    // Validation
    if (!name || !email || !message) {
      formNote.classList.add('is-error');
      formNote.textContent = 'Please fill in all required fields.';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formNote.classList.add('is-error');
      formNote.textContent = 'Please enter a valid email address.';
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span>';

    const formspreeURL = form.action;
    const isFormspreeReady = formspreeURL.includes('formspree.io') && !formspreeURL.includes('YOUR_FORMSPREE_ID');

    // Try Formspree first (if configured)
    if (isFormspreeReady) {
      try {
        const response = await fetch(formspreeURL, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          formNote.classList.add('is-success');
          formNote.textContent = '✓ Message sent! I\'ll reply within 24 hours.';
          form.reset();
          submitBtn.innerHTML = originalBtnHTML;
          submitBtn.disabled = false;
          return;
        }
      } catch (err) {
        console.warn('Formspree failed, falling back to WhatsApp:', err);
      }
    }

    // Fallback: WhatsApp
    const text = `Hi Mahdi,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ASubject: ${encodeURIComponent(subject)}%0A%0A${encodeURIComponent(message)}`;
    const whatsappURL = `https://wa.me/905431483171?text=${text}`;

    formNote.classList.add('is-success');
    formNote.textContent = 'Opening WhatsApp...';

    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      form.reset();
      formNote.textContent = '✓ Message ready in WhatsApp!';
      submitBtn.innerHTML = originalBtnHTML;
      submitBtn.disabled = false;
    }, 600);
  });


  /* ===========================================
     11. FOOTER YEAR
  =========================================== */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* ===========================================
     MAIN SCROLL HANDLER (throttled via rAF)
  =========================================== */
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateProgress();
        updateHeader();
        updateActiveLink();
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initial call
  updateProgress();
  updateHeader();
  updateActiveLink();

})();
