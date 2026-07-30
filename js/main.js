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

  // ---------- Falling vertical lines ----------
  document.querySelectorAll('[data-vlines]').forEach(container => {
    const count = parseInt(container.dataset.vlines, 10) || 60;
    for (let i = 0; i < count; i++) {
      const line = document.createElement('div');
      line.className = 'vline';
      line.style.left = (i / count) * 100 + '%';
      line.style.height = (Math.random() * 60 + 20) + '%';
      line.style.top = Math.random() * 100 + '%';
      line.style.animationDuration = (1.5 + (i % 10) * 0.2) + 's';
      line.style.animationDelay = ((i % 50) * 0.02) + 's';
      container.appendChild(line);
    }
  });

  // ---------- Floating mic icons ----------
  const micSvg = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>';
  document.querySelectorAll('[data-mics]').forEach(container => {
    const count = parseInt(container.dataset.mics, 10) || 12;
    for (let i = 0; i < count; i++) {
      const mic = document.createElement('div');
      mic.className = 'float-mic';
      mic.style.left = (8 + i * 8) + '%';
      mic.style.top = (15 + (i % 6) * 14) + '%';
      mic.style.animationDuration = (3 + (i % 4) * 0.5) + 's';
      mic.style.animationDelay = (i * 0.15) + 's';
      mic.innerHTML = micSvg;
      container.appendChild(mic);
    }
  });

  // ---------- Sound wave bars ----------
  document.querySelectorAll('[data-waves]').forEach(container => {
    const count = parseInt(container.dataset.waves, 10) || 40;
    for (let i = 0; i < count; i++) {
      const bar = document.createElement('div');
      bar.className = 'wave-bar';
      const heights = [24, 48, 32, 40];
      bar.style.left = (5 + i * 2.4) + '%';
      bar.style.top = (10 + (i % 8) * 11) + '%';
      bar.style.height = heights[i % 4] + 'px';
      bar.style.animationDuration = (2 + (i % 3) * 0.5) + 's';
      bar.style.animationDelay = (i * 0.1) + 's';
      container.appendChild(bar);
    }
  });

  // ---------- Flying rockets ----------
  const rocketSvg = '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>';
  document.querySelectorAll('[data-rockets]').forEach(container => {
    const count = parseInt(container.dataset.rockets, 10) || 12;
    for (let i = 0; i < count; i++) {
      const rocket = document.createElement('div');
      rocket.className = 'rocket-fly';
      rocket.style.left = (10 + i * 8) + '%';
      rocket.style.animationDuration = (6 + i * 0.5) + 's';
      rocket.style.animationDelay = (i * 0.8) + 's';
      rocket.innerHTML = rocketSvg;
      container.appendChild(rocket);
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