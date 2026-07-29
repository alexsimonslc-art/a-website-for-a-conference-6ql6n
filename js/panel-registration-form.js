// ===== Panel Registration Logic (replaces PanelRegistrationForm-10.tsx React state/fetch) =====
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("panel-form");
  const errorEl = document.getElementById("form-error");
  const submitBtn = document.getElementById("submit-btn");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    errorEl.classList.add("hidden");
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.age = parseInt(payload.age, 10);

    try {
      const response = await fetch("/api/panel-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      window.location.href = "panel-confirmation.html";
    } catch (err) {
      errorEl.textContent = err.message || "Something went wrong. Please try again.";
      errorEl.classList.remove("hidden");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Register";
    }
  });
});
