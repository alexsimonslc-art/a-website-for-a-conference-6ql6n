// ===== Schedule Page Logic (replaces schedule-15.tsx useState/day selector) =====
const scheduleData = {
  day1: {
    date: "February 2, 2026",
    theme: "Competition Kickoff",
    events: [
      { time: "8:15 – 8:45 AM", title: "Registration", description: "Team registration and check-in", type: "ceremony", location: "Bertram Hall" },
      { time: "9:00 – 9:45 AM", title: "Inauguration Ceremony", description: "Welcome address and competition overview", type: "ceremony", location: "Bertram Hall" },
      { time: "10:00 AM – 1:00 PM", title: "Round 1 of All Competitions", description: "Business Quiz, Shark Tank, Stock Trading Simulation, and Case Study Challenge", type: "competition", location: "Venues TBD" },
      { time: "1:00 – 2:00 PM", title: "Lunch Break", description: "Networking lunch for all participants", type: "break", location: "Dining Hall" },
      { time: "2:00 – 4:30 PM", title: "Completion of Round 1", description: "Final sessions for all competitions", type: "competition", location: "Venues TBD" }
    ]
  },
  day2: {
    date: "February 3, 2026",
    theme: "Championship Finals & Awards",
    events: [
      { time: "9:00 – 11:30 AM", title: "Round 2 of All Competitions", description: "Business Quiz, Shark Tank, Stock Trading Simulation, and Case Study Challenge", type: "competition", location: "Venues TBD" },
      { time: "12:30 – 4:30 PM", title: "Final Showdown", description: "Ultimate championship finale", type: "final", location: "Venue TBD" },
      { time: "1:00 – 4:30 PM", title: "Guestimate + Panel Discussion", description: "Professional development session", type: "Knowledge Arena", location: "Bertram Hall" },
      { time: "4:30 – 5:30 PM", title: "Valedictory Ceremony", description: "Prize distribution and closing ceremony", type: "ceremony", location: "Bertram Hall" }
    ]
  }
};

let selectedDay = "day1";

function renderSchedule() {
  const data = scheduleData[selectedDay];
  document.getElementById("day-theme").textContent = data.theme;
  document.getElementById("day-date").textContent = data.date;

  document.getElementById("timeline-list").innerHTML = data.events.map(event => `
    <div class="timeline-item">
      <span class="time">${event.time}</span>
      <span class="badge">${event.type}</span>
      <h4>${event.title}</h4>
      <p class="desc">${event.description}</p>
      <p class="location">📍 ${event.location}</p>
    </div>
  `).join("");

  document.querySelectorAll(".day-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.day === selectedDay);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  renderSchedule();
  document.querySelectorAll(".day-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      selectedDay = tab.dataset.day;
      renderSchedule();
    });
  });
});
