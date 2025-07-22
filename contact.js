document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    message.textContent = "✅ Thank you! We'll reach out to you shortly.";
    message.style.display = "block";
    form.reset();
  });
});
