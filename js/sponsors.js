// ===== Sponsors Page Logic (replaces sponsors-16.tsx .map() over tiers) =====
const sponsorCategories = {
  coSponsors: [
    { name: "NIPPON PAINTS", logo: "attached_assets/nipponpaints.png", label: "Signature Partner" },
    { name: "ACCOUNTS ARENA", logo: "attached_assets/AccountsARENA.png", label: "Academic Partner" }
  ],
  associates: [
    { name: "AICPA & CIMA", logo: "attached_assets/cima.png", label: "Learning Partner" },
    { name: "ISDC", logo: "attached_assets/Screenshot 2026-01-10 125536.png", label: "Learning Partner" }
  ],
  coAssociates: [
    { name: "SWEET KARAM COFFEE", logo: "attached_assets/SKC Logo.png", label: "Official Gifting Partner" },
    { name: "GOLDWINNER", logo: "attached_assets/goldwinner.png", label: "Nutrition Partner" },
    { name: "Leap Scholar", logo: "attached_assets/leap.png", label: "Study Abroad Partner" },
    { name: "ZIMSON", logo: "attached_assets/ZIMSON.PNG", label: "Horology Partner" },
    { name: "BLUEMARINE EXPORTS", logo: "attached_assets/goldmarine.png", label: "Global Trade Partner" },
    { name: "The Legacy Closet", logo: "attached_assets/TLC.png", label: "Merchandise Partner" }
  ],
  supporting: [
    { name: "2IIM", logo: "attached_assets/2IIM.png", label: "Education Partner" }
  ]
};

function renderTier(gridId, sponsors) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = sponsors.map(s => `
    <div class="sponsor-card">
      <img src="${s.logo}" alt="${s.name}" />
      <h5>${s.name}</h5>
      <p class="label">${s.label}</p>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  renderTier("co-sponsors-grid", sponsorCategories.coSponsors);
  renderTier("associates-grid", sponsorCategories.associates);
  renderTier("co-associates-grid", sponsorCategories.coAssociates);
  renderTier("supporting-grid", sponsorCategories.supporting);
});
