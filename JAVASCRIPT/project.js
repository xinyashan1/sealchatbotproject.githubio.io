const responses = [
    "You're doing a excellent job! 🦭",
    "Sealing your worries away when a matcha a day keeps stress at bay! 💖",
    "Need a boba break? It's like a kit kat break but with boba 🧋",
    "Swim through life with a smile! 🌊",
    "You make my day brighter! 🌟",
    "Let’s chill like a seal on the ice! ❄️",
    "Don't forget to stay hydrated! It's very important you know! 💧",
];

const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const responseDiv = document.getElementById("response");

sendButton.addEventListener("click", () => {
    const userText = userInput.value.trim();
    if (userText) {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseDiv.textContent = randomResponse;
        userInput.value = "";
    } else {
        responseDiv.textContent = "Type something to chat with the seal! 🦭";
    }
});
