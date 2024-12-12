// Seleciona o botão e a área da mensagem
const button = document.getElementById("clickButton");
const message = document.getElementById("message");

// Adiciona um evento de clique no botão
button.addEventListener("click", function() {
    message.textContent = "Você clicou no botão! 🎉";
    message.style.color = "#4CAF50"; // Muda a cor da mensagem
});

