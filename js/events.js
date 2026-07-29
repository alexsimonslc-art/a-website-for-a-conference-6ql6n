// ===== Events Listing Logic (replaces events-4.tsx .map()) =====
const eventsData = [
  { id: "strategiq", name: "StrategIQ", description: "The ultimate quiz for sharp minds in business, finance, and general awareness.", prizePool: 100000, registrationFee: 500, imageUrl: "assets/images/strategiq.jpg" },
  { id: "case-quest", name: "Case Quest", description: "Step into the shoes of consultants, solving complex business problems and defending recommendations.", prizePool: 100000, registrationFee: 500, imageUrl: "assets/images/case-quest.jpg" },
  { id: "market-masters", name: "Market Masters", description: "A live market and wealth management challenge testing trading instincts and portfolio strategies.", prizePool: 100000, registrationFee: 500, imageUrl: "assets/images/market-masters.jpg" },
  { id: "venturex", name: "VentureX", description: "Strategia's shark tank style event where entrepreneurial vision meets investor scrutiny.", prizePool: 100000, registrationFee: 0, imageUrl: "assets/images/venturex.jpg" },
  { id: "final-showdown", name: "Final Showdown", description: "The grand stage where top teams from every event compete head-to-head in a challenge revealed on the spot.", prizePool: 150000, registrationFee: 0, imageUrl: "assets/images/final-showdown.jpg" }
];

function formatPrize(amount) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
}

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("events-list");
  if (list) {
    list.innerHTML = eventsData.map(event => `
      <a href="event-detail.html?id=${event.id}" class="event-card">
        <h3 class="text-xl font-bold text-white mb-2">${event.name}</h3>
        <p class="text-gray-400 text-sm mb-4">${event.description}</p>
        <div class="prize-box">${formatPrize(event.prizePool)} Prize Pool</div>
      </a>
    `).join("");
  }
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = parseInt(el.getAttribute("data-count"), 10);
    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(interval); }
      el.textContent = "₹" + current.toLocaleString("en-IN");
    }, 20);
  });
});
