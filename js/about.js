// ===== About Page Logic (replaces .map() rendering in about.tsx) =====

// Replace with real leadership team data
const leadershipTeam = [
  // { name: "Dr. John Doe", role: "Faculty Coordinator", position: "Head of Department", department: "B.Com.(Honours)", image: "assets/images/leader1.jpg" },
];

// Replace with real core team data
const coreTeam = [
  // { name: "Jane Smith", role: "Event Head", department: "B.Com.(Honours)", image: "assets/images/member1.jpg" },
];

document.addEventListener("DOMContentLoaded", function () {
  renderMembers("leadership-grid", leadershipTeam);
  renderMembers("core-team-grid", coreTeam);
});

function renderMembers(gridId, members) {
  const grid = document.getElementById(gridId);
  if (!members.length) {
    grid.innerHTML = "<p class='text-gray-500 col-span-full text-center'>Team details coming soon.</p>";
    return;
  }
  grid.innerHTML = members.map(m => `
    <div class="member-card">
      <img src="${m.image}" alt="${m.name}" />
      <h4>${m.name}</h4>
      <p class="position">${m.position || "&nbsp;"}</p>
      <p class="department">${m.department || m.role}</p>
    </div>
  `).join("");
}
