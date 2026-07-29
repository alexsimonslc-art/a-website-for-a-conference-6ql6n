// ===== Registration Page Logic (replaces registration-12.tsx state/team member handling) =====
let memberCount = 1;

function addMemberField() {
  if (memberCount >= 2) return; // captain + up to 2 more = max 3
  memberCount++;
  const container = document.getElementById("member-fields");
  const div = document.createElement("div");
  div.className = "form-row member-row";
  div.innerHTML = `
    <div class="form-group">
      <input type="text" name="memberName[]" placeholder="Member ${memberCount} Name" required />
    </div>
    <div class="form-group">
      <input type="email" name="memberEmail[]" placeholder="Member ${memberCount} Email" required />
    </div>
    <button type="button" class="remove-member-btn text-red-400 text-xs">Remove</button>
  `;
  div.querySelector(".remove-member-btn").addEventListener("click", () => {
    div.remove();
    memberCount--;
  });
  container.appendChild(div);
  if (memberCount >= 3) document.getElementById("add-member-btn").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("add-member-btn").addEventListener("click", addMemberField);

  const form = document.getElementById("registration-form");
  const errorEl = document.getElementById("reg-form-error");
  const submitBtn = document.getElementById("reg-submit-btn");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    errorEl.classList.add("hidden");
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    const formData = new FormData(form);
    const payload = {
      eventId: formData.get("eventId"),
      captainName: formData.get("captainName"),
      captainEmail: formData.get("captainEmail"),
      captainPhone: formData.get("captainPhone"),
      institution: formData.get("institution"),
      members: formData.getAll("memberName[]"),
      memberEmails: formData.getAll("memberEmail[]"),
    };

    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Registration failed");
      window.location.href = "registration-confirmation.html";
    } catch (err) {
      errorEl.textContent = err.message || "Something went wrong. Please try again.";
      errorEl.classList.remove("hidden");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Registration";
    }
  });
});
