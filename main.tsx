// ---------- Mobile nav toggle ----------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // ---------- Scroll reveal ----------
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  // ---------- Count-up numbers ----------
  const counters = document.querySelectorAll('[data-count-to]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      counterObserver.unobserve(entry.target);
      const el = entry.target;
      const target = parseInt(el.dataset.countTo, 10);
      const startFrom = parseInt(el.dataset.countFrom || '0', 10);
      const duration = parseInt(el.dataset.countDuration || '1500', 10);
      const prefix = el.dataset.countPrefix || '';
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(startFrom + (target - startFrom) * progress);
        el.textContent = prefix + new Intl.NumberFormat('en-IN').format(value);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));

  // ---------- Twinkling stars ----------
  document.querySelectorAll('[data-stars]').forEach(container => {
    const count = parseInt(container.dataset.stars, 10) || 40;
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'twinkle-star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDuration = (2 + Math.random() * 2) + 's';
      star.style.animationDelay = (Math.random() * 2) + 's';
      container.appendChild(star);
    }
  });

  // ---------- Event image grayscale -> color ----------
  const mediaEls = document.querySelectorAll('.event-media');
  const mediaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('in-view', entry.isIntersecting);
    });
  }, { threshold: 0.75 });
  mediaEls.forEach(el => mediaObserver.observe(el));

  // ---------- Rotating hero titles (events hero) ----------
  const rotator = document.querySelector('.hero-rotator');
  if (rotator) {
    const buttons = Array.from(rotator.querySelectorAll('.hero-rotator-item'));
    let step = 0;
    function applyStep() {
      buttons.forEach((btn, i) => {
        btn.classList.remove('rot-center', 'rot-left', 'rot-right');
        if (i === step) btn.classList.add('rot-center');
        else if (i === (step + 1) % buttons.length) btn.classList.add('rot-right');
        else btn.classList.add('rot-left');
      });
    }
    applyStep();
    setInterval(() => {
      step = (step + 1) % buttons.length;
      applyStep();
    }, 3500);
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const el = document.getElementById(targetId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });
  }
});