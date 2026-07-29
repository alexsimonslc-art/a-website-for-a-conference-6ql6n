// ===== Panel Discussion Page Logic (replaces panel-discussion-9.tsx speaker .map()) =====
// Replace with real panelist data — not recoverable from source extraction.
const panelSpeakers = [
  // { name: "Jane Doe", designation: "CEO, ExampleCorp", image: "assets/images/panelist1.jpg" },
];

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  const grid = document.getElementById("panel-speakers-grid");
  if (!panelSpeakers.length) {
    grid.innerHTML = "<p class='text-gray-500 col-span-full text-center'>Panelist lineup coming soon.</p>";
    return;
  }
  grid.innerHTML = panelSpeakers.map(s => `
    <div class="member-card">
      <img src="${s.image}" alt="${s.name}" />
      <h4>${s.name}</h4>
      <p class="position">${s.designation}</p>
    </div>
  `).join("");
});
