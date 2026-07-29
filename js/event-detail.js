// ===== Event Detail Logic (replaces event-detail-3.tsx dynamic route + helper functions) =====

const eventOverviews = {
  "strategiq": "StrategIQ is the ultimate quiz for sharp minds in business, finance, and general awareness. The event unfolds across a written quiz, scenario-based justifications, and a high-energy buzzer finale. All rounds are conducted offline, materials are provided, and the judges' decisions remain final. Only the smartest and fastest teams advance to the Final Showdown.",
  "case-quest": "Case Quest puts participants in the shoes of consultants, tasked with solving complex business problems and defending their recommendations. Teams prepare case decks under tight deadlines, with a preliminary case on Day 1 and a final case presented before judges on Day 2. Judges' decisions are binding, and only the most strategic teams move forward to the Final Showdown.",
  "market-masters": "Market Masters is a live market and wealth management challenge where teams test their trading instincts and portfolio strategies. Teams begin with a full-day virtual trading simulation, evaluated purely on returns, before moving on to client-focused portfolio presentations on Day 2. Judges' verdicts are final, and only the top-performing teams secure a place in the Final Showdown.",
  "venturex": "VentureX is Strategia's shark tank style event, where entrepreneurial vision meets investor scrutiny. Teams submit pitch decks in advance, with the best moving on to live rounds where they present ideas before judges, culminating in Demo Day with real venture capitalists and a live audience. The stakes are high, the atmosphere intense, and only the boldest pitches advance to the Final Showdown.",
  "final-showdown": "The Final Showdown is the grand stage where the top teams from every event compete head-to-head in a challenge revealed on the spot. Designed to test the complete skill set of a modern leader, the finale demands adaptability, problem-solving, financial acumen, and sharp decision-making under pressure. The best of the best will emerge as the Strategia Champion."
};

const eventSkills = {
  "strategiq": ["Business and financial knowledge", "Quick thinking and recall", "Clear articulation", "Team coordination"],
  "case-quest": ["Problem-solving and analysis", "Logical and strategic reasoning", "Presentation and persuasion", "Time management"],
  "market-masters": ["Market and financial acumen", "Risk management", "Strategic thinking", "Communication skills"],
  "venturex": ["Entrepreneurship and innovation", "Strategic planning", "Persuasive pitching", "Investor-focused communication"],
  "final-showdown": ["Adaptability and leadership", "Problem-solving under pressure", "Financial and strategic acumen", "Team synergy"]
};

const eventRulesHtml = {
  "strategiq": `
    <h4 class="text-white font-semibold text-lg mt-4">Rules and Guidelines</h4>
    <ul class="list-disc list-inside space-y-1">
      <li>Team size: 2-3 members.</li>
      <li>All rounds will be conducted offline.</li>
      <li>Teams must adhere to the time limits set for each round.</li>
      <li>The decisions of the judges and organizing committee are final and binding.</li>
    </ul>
    <p class="text-sm text-gray-500 mt-2">In addition to the guidelines above, all participants are required to read and adhere to the general Event Rules &amp; Regulations.</p>
    <h4 class="text-white font-semibold text-lg mt-6">Event Flow</h4>
    <p><strong>Day 1 - Round 1: Written Quiz</strong> — A one-hour written quiz covering concepts from finance, business, and general knowledge. Qualified teams proceed to Round 2.</p>
    <p><strong>Day 1 - Round 2: Strategic Justification</strong> — Teams present justification for a chosen strategic pathway before the panel. Qualified teams proceed to Round 3.</p>
    <p><strong>Day 2 - Round 3: Buzzer Round Finale</strong> — A live buzzer quiz with rapid fire and connections formats. Top 2 teams qualify for the Final Showdown.</p>
  `,
  "case-quest": `
    <h4 class="text-white font-semibold text-lg mt-4">Rules and Guidelines</h4>
    <ul class="list-disc list-inside space-y-1">
      <li>Team size: 2-3 members.</li>
      <li>Teams must bring laptops, calculators, and essentials.</li>
      <li>Internet facilities will be made available during the event.</li>
      <li>All submissions and presentations must be original and solely prepared by the team.</li>
      <li>Teams must adhere strictly to submission and presentation timelines.</li>
      <li>The decisions of the judges and organizing committee are final and binding.</li>
    </ul>
    <h4 class="text-white font-semibold text-lg mt-6">Event Flow</h4>
    <p><strong>Day 1 - Round 1: Preliminary Case Submission</strong> — Case released on the spot; teams submit by 2:00 PM. Shortlisted teams receive final case by 5:00 PM for overnight prep.</p>
    <p><strong>Day 2 - Round 2: Final Presentations</strong> — Presentation to a closed judging panel. Time Limit: 7 minutes + 5 minutes Q&amp;A. Top 2 teams advance to the Final Showdown.</p>
  `,
  "market-masters": `
    <h4 class="text-white font-semibold text-lg mt-4">Rules and Guidelines</h4>
    <ul class="list-disc list-inside space-y-1">
      <li>Team size: 2-3 members.</li>
      <li>Teams must bring laptops, calculators, and essentials.</li>
      <li>Malpractice (external funds, trade deletion, etc.) will lead to disqualification.</li>
      <li>Teams must adhere to the presentation time limits.</li>
      <li>The decisions of the judges and organizing committee are final and binding.</li>
    </ul>
    <h4 class="text-white font-semibold text-lg mt-6">Event Flow</h4>
    <p><strong>Day 1 - Round 1: Virtual Trading</strong> — Trading from 10:00 a.m. until market close; rankings based on net portfolio returns. Qualified teams assigned a financial persona by 5:00 p.m.</p>
    <p><strong>Day 2 - Round 2: Portfolio Management</strong> — Overnight portfolio design presented in 7 minutes + 3 minutes Q&amp;A. Top 2 teams qualify for the Final Showdown.</p>
  `,
  "venturex": `
    <h4 class="text-white font-semibold text-lg mt-4">Rules and Guidelines</h4>
    <ul class="list-disc list-inside space-y-1">
      <li>Team size: 2-3 members.</li>
      <li>Register on the Strategia website for the preliminary round; further instructions via email.</li>
      <li>No registration fee required for initial pitch deck submission.</li>
      <li>Teams must adhere to submission &amp; presentation time limits.</li>
      <li>The decisions of the judges and organizing committee are final and binding.</li>
    </ul>
    <h4 class="text-white font-semibold text-lg mt-6">Event Flow</h4>
    <p><strong>Online - Round 1: Pitch Deck Submission</strong> — Submit an 8-slide deck. Qualified teams pay registration fee to confirm participation.</p>
    <p><strong>Day 1 - Round 2: Live Pitching</strong> — Pitch time limit: 6 minutes + 3 minutes Q&amp;A.</p>
    <p><strong>Day 2 - Demo Day</strong> — Present MVPs to investors and industry leaders. Top 2 teams qualify for the Final Showdown.</p>
  `,
  "final-showdown": `
    <h4 class="text-white font-semibold text-lg mt-4">Rules and Guidelines</h4>
    <ul class="list-disc list-inside space-y-1">
      <li>The top two teams from each event will qualify for the Final Showdown.</li>
      <li>The nature of the challenge will remain undisclosed until the event begins.</li>
      <li>Rules and guidelines will be provided on the spot.</li>
      <li>Participants will be tested on their ability to think on their feet, collaborate effectively, and perform under pressure.</li>
    </ul>
  `
};

function formatPrize(amount) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
}

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });

  const params = new URLSearchParams(window.location.search);
  const eventId = params.get("id");

  const eventsData = {
    "strategiq": { name: "StrategIQ", description: "The ultimate quiz for sharp minds in business, finance, and general awareness.", prizePool: 100000, registrationFee: 500, imageUrl: "assets/images/strategiq.jpg" },
    "case-quest": { name: "Case Quest", description: "Step into the shoes of consultants, solving complex business problems.", prizePool: 100000, registrationFee: 500, imageUrl: "assets/images/case-quest.jpg" },
    "market-masters": { name: "Market Masters", description: "A live market and wealth management challenge.", prizePool: 100000, registrationFee: 500, imageUrl: "assets/images/market-masters.jpg" },
    "venturex": { name: "VentureX", description: "Strategia's shark tank style event.", prizePool: 100000, registrationFee: 0, imageUrl: "assets/images/venturex.jpg" },
    "final-showdown": { name: "Final Showdown", description: "The grand stage where top teams compete head-to-head.", prizePool: 150000, registrationFee: 0, imageUrl: "assets/images/final-showdown.jpg" }
  };

  const event = eventsData[eventId];
  if (!event) {
    document.getElementById("event-name").textContent = "Event Not Found";
    document.getElementById("event-description").textContent = "";
    return;
  }

  document.getElementById("event-name").textContent = event.name;
  document.getElementById("event-description").textContent = event.description;
  document.getElementById("event-prize").textContent = formatPrize(event.prizePool) + " Prize Pool";
  if (eventId !== "final-showdown") {
    document.getElementById("event-fee").textContent = "₹" + event.registrationFee + " Registration";
  }
  if (event.imageUrl) {
    const img = document.getElementById("event-image");
    img.src = event.imageUrl;
    img.alt = event.name;
    img.classList.remove("hidden");
  }

  document.getElementById("overview-text").textContent = eventOverviews[eventId] || "Event overview not available.";
  document.getElementById("skills-list").innerHTML = (eventSkills[eventId] || []).map(s => `<li>• ${s}</li>`).join("");
  document.getElementById("rules-heading").textContent = eventId === "final-showdown" ? "Rules & Guidelines" : "Rules & Event Flow";
  document.getElementById("rules-content").innerHTML = eventRulesHtml[eventId] || "<p>Rules information not available for this event.</p>";

  const referrer = sessionStorage.getItem("lastPage") === "home" ? "home" : "events";
  const label = referrer === "home" ? "Return to Home" : "Return to Events";
  document.getElementById("return-label").textContent = label;
  document.querySelector(".bottom-return-label").textContent = label;

  const goBack = () => {
    window.location.href = referrer === "home" ? "index.html" : "events.html";
  };
  document.getElementById("return-btn").addEventListener("click", goBack);
  document.getElementById("return-btn-bottom").addEventListener("click", goBack);
});
