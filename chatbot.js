document.addEventListener("DOMContentLoaded", () => {
  const chatbotContainer = document.createElement("div");
  chatbotContainer.id = "chatbot-container";
  chatbotContainer.innerHTML = `
    <div id="nika-icon">
      <img src="images/sun_god_nika.jpg" alt="Nika Bot Icon">
    </div>
    <div id="chatbox">
      <div class="chat-header">☀️ Nika Bot</div>
      <div id="chatlog"></div>
      <div class="chat-input-row">
        <input type="text" id="user-input" list="nika-suggestions" placeholder="Ask me about SolarConnect...">
        <button id="nika-send">Send</button>
      </div>
    </div>
  `;
  document.body.appendChild(chatbotContainer);
  const nikaIcon = document.getElementById("nika-icon");
  const chatbox = document.getElementById("chatbox");
  const input = document.getElementById("user-input");
  const chatlog = document.getElementById("chatlog");

  const responses = {
    "what is solarconnect": "SolarConnect is a platform promoting solar adoption with info on benefits, calculators, and subsidies.",
    "how to use calculator": "Go to the Solar Calculator section, input your bill amount, and see potential savings.",
    "subsidy in maharashtra": "Visit the 'Government Schemes' section or go to https://solarrooftop.gov.in for details.",
    "how to apply for subsidy": "Check our subsidy section and follow portal links to apply with basic KYC documents.",
    "contact us": "Use the Contact form or reach us at solarconnect.help@gmail.com.",
    "benefits of solar": "Solar saves money, reduces carbon footprint, and offers government subsidies!",
    "installation process": "Contact a verified vendor or reach out through our site for guidance.",
    "who are you": "I’m Nika Bot! Ask me anything solar-related!",
    "what can you do": "I can help you with info on subsidies, calculators, application processes, and more!",
    "what does nika mean": "Nika means 'Sun God' in ancient mythology, symbolizing energy and light!"
  };

  const dynamicResponses = [
    { keywords: ["subsidy", "government help"], reply: "🌞 Explore 'Subsidy' for government support. Select your state for accurate info." },
    { keywords: ["calculator", "calculate", "cost", "area"], reply: "📊 Use the Solar Calculator to estimate costs and savings." },
    { keywords: ["how to apply", "apply for subsidy", "application"], reply: "📝 Visit the official portal via our subsidy section and follow the steps." },
    { keywords: ["contact", "help", "support"], reply: "📧 Email us at solarconnect.help@gmail.com or use our Contact form." },
    { keywords: ["benefits", "advantages", "why solar"], reply: "⚡ Solar lowers bills, supports the environment, and unlocks subsidies!" },
    { keywords: ["installation", "how to install", "process"], reply: "🔧 Contact a verified vendor or reach out through our site for guidance." },
    { keywords: ["nika", "bot", "who are you", "hello", "hi", "hey", "what can you do"], reply: "🌞 I’m Nika Bot! Ask me anything solar-related!" },
    { keywords: ["meaning of nika", "what does nika mean"], reply: "☀️ Nika means 'Sun God' in ancient mythology, symbolizing energy and light!" },
    { keywords: ["thank you", "thanks"], reply: "😊 You're welcome! Happy to help with your solar journey!" },
    { keywords: ["hello", "hi", "hey"], reply: "👋 Hello! How can I assist you with solar energy today?" },
    { keywords: ["goodbye", "bye", "see you"], reply: "👋 Goodbye! Feel free to chat with me anytime for solar info!" },
    { keywords: ["pricing", "cost", "how much"], reply: "💰 Solar system costs vary by size and location. Use our calculator for estimates!" },
    { keywords: ["hours", "when are you open", "working hours"], reply: "⏰ We're available 24/7 online to assist you with solar information!" },
    { keywords: ["location", "where are you located", "address"], reply: "📍 We're an online platform, accessible from anywhere!" },
    { keywords: ["environment", "climate change", "green energy"], reply: "🌍 Solar energy reduces carbon footprint and combats climate change!" },
    { keywords: ["register","registration"], reply: "📝 To register, please fill out the registration form on our website with your details." }
  ];

  const suggestQuestions = Object.keys(responses);

  nikaIcon.addEventListener("click", () => {
    chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
  });

  function handleChatSubmit() {
    const userMsg = input.value.trim();
    if (userMsg) {
      appendMessage("You", userMsg);
      let reply = "😕 Sorry, I didn’t understand that. Try asking about subsidy, calculator, or how to apply.";
      for (const key in responses) {
        if (userMsg.toLowerCase().includes(key)) {
          reply = responses[key];
          break;
        }
      }
      if (reply.includes("Sorry")) {
        for (const pair of dynamicResponses) {
          if (pair.keywords.some(k => userMsg.toLowerCase().includes(k))) {
            reply = pair.reply;
            break;
          }
        }
      }
      appendMessage("Nika", reply);
      input.value = "";
    }
  }
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleChatSubmit();
  });
  document.getElementById("nika-send").addEventListener("click", handleChatSubmit);

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    const suggestions = suggestQuestions.filter(q => q.includes(value));
    let datalist = document.getElementById("nika-suggestions");
    if (!datalist) {
      datalist = document.createElement("datalist");
      datalist.id = "nika-suggestions";
      document.body.appendChild(datalist);
    }
    datalist.innerHTML = "";
    suggestions.forEach(s => {
      const option = document.createElement("option");
      option.value = s;
      datalist.appendChild(option);
    });
  });

  function appendMessage(sender, message) {
    const msgDiv = document.createElement("div");
    msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatlog.appendChild(msgDiv);
    chatlog.scrollTop = chatlog.scrollHeight;
  }
});