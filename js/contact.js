// ===== Contact Page Logic (FAQ accordion placeholder from contact-2.tsx) =====
const faqs = [
  { question: "How do I register for an event?", answer: "Visit the registration page, choose your event, and submit the team captain details. Payment instructions will be sent by email." },
  { question: "Can one team register for multiple events?", answer: "No. Each team should register for only one event." },
  { question: "What is the team size?", answer: "Each team must consist of 2-3 members." },
  { question: "Where will the event be held?", answer: "The event will take place at Loyola College, Chennai. Specific venues are mentioned on the schedule page." }
];

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  const faqList = document.getElementById("faq-list");
  faqList.innerHTML = faqs.map((faq, index) => `
    <div class="faq-item">
      <button class="faq-question" data-index="${index}">
        <span>${faq.question}</span>
        <span>+</span>
      </button>
      <div class="faq-answer">${faq.answer}</div>
    </div>
  `).join("");
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('open');
    });
  });
});
