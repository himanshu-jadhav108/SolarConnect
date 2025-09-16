document.addEventListener("DOMContentLoaded", () => {
  const chatbotContainer = document.createElement("div");
  chatbotContainer.id = "chatbot-container";
  chatbotContainer.innerHTML = `
    <div id="nika-icon" style="position: fixed; bottom: 20px; right: 20px; cursor: pointer;">
      <img src="images/sun_god_nika.jpg" alt="Nika Bot Icon" style="width: 60px; height: 60px; border-radius: 50%;">
    </div>
    <div id="chatbox" style="display: none; position: fixed; bottom: 90px; right: 20px; width: 300px; background: white; border-radius: 10px; box-shadow: 0 0 15px gold; overflow: hidden; z-index: 10000;">
      <div style="background: gold; color: black; padding: 10px; font-weight: bold; text-align:center;">☀️ Nika Bot</div>
      <div id="chatlog" style="padding: 10px; height: 200px; overflow-y: auto; background: #fff9e6;"></div>
      <div style="display:flex; border-top:1px solid #ddd;">
        <input type="text" id="user-input" list="nika-suggestions" placeholder="Ask me about SolarConnect..." style="flex:1; padding:8px; border:none;">
        <button id="nika-send" style="background:gold; color:black; border:none; padding:8px 12px; cursor:pointer; font-weight:bold;">Send</button>
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
    "contact us": "Use the Contact form or reach us at solarconnect.help@gmail.com."
  };

  const dynamicResponses = [
    { keywords: ["subsidy", "government help"], reply: "🌞 Explore 'Subsidy' for government support. Select your state for accurate info." },
    { keywords: ["calculator", "calculate", "cost", "area"], reply: "📊 Use the Solar Calculator to estimate costs and savings." },
    { keywords: ["how to apply", "apply for subsidy", "application"], reply: "📝 Visit the official portal via our subsidy section and follow the steps." },
    { keywords: ["contact", "help", "support"], reply: "📧 Email us at solarconnect.help@gmail.com or use our Contact form." },
    { keywords: ["benefits", "advantages", "why solar"], reply: "⚡ Solar lowers bills, supports the environment, and unlocks subsidies!" },
    { keywords: ["installation", "how to install", "process"], reply: "🔧 Contact a verified vendor or reach out through our site for guidance." },
    { keywords: ["nika", "bot", "who are you", "hello", "hi", "hey", "what can you do"], reply: "🌞 I’m Nika Bot! Ask me anything solar-related!" }
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