function calculateSavings() {
  const resultElem = document.getElementById('result');
  const bill = parseFloat(document.getElementById('billInput').value);
  if (isNaN(bill) || bill <= 0) {
    resultElem.innerText = "Enter a Valid Bill Amount.";
    setTimeout(() => { resultElem.innerText = ""; }, 7000);
    return;
  }
  const yearlyBill = bill * 12;
  const estimatedSavings = yearlyBill * 0.6;
  resultElem.innerText =
    `You Could Save Approx Rs. ${estimatedSavings.toFixed(2)} Per Year By Switching To Solar!`;
  setTimeout(() => { resultElem.innerText = ""; }, 7000);
}

function registerUser(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const income = document.getElementById("income").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const number = document.getElementById("number").value.trim();
  const email = document.getElementById("email").value.trim();
  const responseMsg = document.getElementById("formResponse");

  if (!name || !income || !city || !state || !number || !email) {
    responseMsg.textContent = "⚠️ Please fill out all fields before submitting.";
    responseMsg.style.color = "red";
    return;
  }

  const templateParams = {
    name,
    income,
    city,
    state,
    number,
    email,
  };

  emailjs
    .send("service_zoesvuc", "template_y6vhgy8", templateParams)
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        responseMsg.textContent = "✅ Registration successful! We'll contact you soon.";
        responseMsg.style.color = "green";
        document.getElementById("registrationForm").reset();
        setTimeout(() => { responseMsg.textContent = ""; }, 7000);
      },
      (error) => {
        console.error("FAILED...", error);
        responseMsg.textContent = "❌ Something went wrong. Please try again later.";
        responseMsg.style.color = "red";
        setTimeout(() => { responseMsg.textContent = ""; }, 7000);
      }
    );
}


function setLanguage(lang) {
  document.documentElement.lang = lang;
  setTimeout(() => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  }, 600);
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
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
    setTimeout(() => {
      message.textContent = "";
      message.style.display = "none";
    }, 7000);
  });
});

document.addEventListener('click', function (e) {
  const flip = e.target.closest('.flip-card');
  if (flip) {
    flip.classList.toggle('flipped');
  }
});

const navbar = document.querySelector('nav');
const navbarOffset = navbar.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY >= navbarOffset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Glow effect on click
navbar.addEventListener('click', () => {
    navbar.classList.add('glow');
    setTimeout(() => navbar.classList.remove('glow'), 500);
});
