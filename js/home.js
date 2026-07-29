// ===== Home Page Logic (replaces React state/effects in home-6.tsx) =====

document.addEventListener("DOMContentLoaded", function () {
  initCountdown("2026-01-31T00:00:00");
  animateStats();
  loadSpeakers();
  loadTestimonials();
  loadSponsors();
});

function initCountdown(targetDateStr) {
  const target = new Date(targetDateStr).getTime();
  function update() {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) {
      document.getElementById("countdown").innerHTML = "<p class='text-white text-lg'>Event has started!</p>";
      clearInterval(timer);
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    document.getElementById("cd-days").textContent = String(days).padStart(2, "0");
    document.getElementById("cd-hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("cd-mins").textContent = String(mins).padStart(2, "0");
    document.getElementById("cd-secs").textContent = String(secs).padStart(2, "0");
  }
  update();
  const timer = setInterval(update, 1000);
}

function animateStats() {
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = parseInt(el.getAttribute("data-count"), 10);
    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = "₹" + current.toLocaleString("en-IN");
    }, 20);
  });
}

// Sample data structures — replace with real speaker/testimonial/sponsor data
const speakers = [
  // { name: "Jane Doe", designation: "CEO, ExampleCorp", image: "assets/images/speaker1.jpg" },
];

const testimonials = [
  // { author: "John Smith", quote: "An unforgettable experience.", role: "Past Winner" },
];

const sponsors = [
  // { label: "Sponsor Name", logo: "assets/images/sponsor1.png" },
];

function loadSpeakers() {
  const grid = document.getElementById("speakers-grid");
  if (!speakers.length) {
    grid.innerHTML = "<p class='text-gray-500 col-span-full text-center'>Speaker lineup coming soon.</p>";
    return;
  }
  grid.innerHTML = speakers.map(s => `
    <div class="speaker-card text-center">
      <img src="${s.image}" alt="${s.name}" class="w-24 h-24 rounded-full mx-auto mb-3 object-cover" />
      <h4 class="text-white font-semibold">${s.name}</h4>
      <p class="text-gray-400 text-sm">${s.designation}</p>
    </div>
  `).join("");
}

let currentTestimonial = 0;
function loadTestimonials() {
  const slider = document.getElementById("testimonial-slider");
  if (!testimonials.length) {
    slider.innerHTML = "<p class='text-gray-500'>Testimonials coming soon.</p>";
    return;
  }
  function render() {
    const t = testimonials[currentTestimonial];
    slider.innerHTML = `
      <p class="text-gray-300 italic mb-4">"${t.quote}"</p>
      <p class="text-white font-semibold">${t.author}</p>
      <p class="text-gray-500 text-sm">${t.role}</p>
    `;
  }
  render();
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    render();
  }, 5000);
}

function loadSponsors() {
  const grid = document.getElementById("sponsors-grid");
  if (!sponsors.length) {
    grid.innerHTML = "<p class='text-gray-500'>Sponsor logos coming soon.</p>";
    return;
  }
  grid.innerHTML = sponsors.map(s => `<img src="${s.logo}" alt="${s.label}" title="${s.label}" />`).join("");
}
