const chatHeader = document.getElementById("chat-header");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const chatMessages = document.getElementById("chat-messages");

// Toggle chat visibility
chatHeader.addEventListener("click", () => {
    chatBody.style.display = chatBody.style.display === "none" ? "flex" : "none";
});

// Handle sending messages
sendBtn.addEventListener("click", () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        addMessage("You", userMessage);
        getBotResponse(userMessage);
        chatInput.value = "";
    }
});

// Add message to the chat
function addMessage(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Simulate chatbot responses
function getBotResponse(message) {
    setTimeout(() => {
        let response = "Sorry, I didn't understand that.";
        if (message.toLowerCase().includes("hello")) {
            response = "Hi there! How can I assist you today?";
        } else if (message.toLowerCase().includes("payment")) {
            response = "For payment issues, please contact our support team.";
        }
        addMessage("Bot", response);
    }, 1000);
}
