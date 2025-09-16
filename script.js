function calculateSavings() {
    const bill = parseFloat(document.getElementById('billInput').value);
    if (isNaN(bill) || bill <= 0) {
        document.getElementById('result').innerText = "Enter a Valid Bill Amount.";
        return;
    }
    const yearlyBill = bill * 12;
    const estimatedSavings = yearlyBill * 0.6;
    document.getElementById('result').innerText =
        `You Could Save Approx Rs. ${estimatedSavings.toFixed(2)} Per Year By Switching To Solar!`;
}

function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const income = document.getElementById('income').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const number = document.getElementById('number').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !income || !city || !state || !number || !email) {
        document.getElementById('formResponse').textContent = 'Please fill all fields.';
        return;
    }

    // For now, just simulate success response
    document.getElementById('formResponse').textContent = `Thank you ${name}, our team will contact you soon!`;
    
    // Optionally clear form
    document.getElementById('registrationForm').reset();
}

function setLanguage(lang) {
  document.getElementById("language-select").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  document.getElementById("google_translate_element").style.opacity = "1";

  setTimeout(() => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  }, 800);
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en,hi,mr,ta,te,kn',
    includedLanguages: 'en,hi,mr,ta,te,kn',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

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

