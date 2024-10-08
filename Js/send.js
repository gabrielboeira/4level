// Inicialize o EmailJS com seu User ID
emailjs.init("TYYnUMx-zhFbCENlf");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    emailjs.sendForm("service_iw06g15", "template_4rdaj7c", this)
        .then(function(response) {
            showMessage("Mensagem enviada com sucesso!", "success");
            console.log("Success:", response);
        }, function(error) {
            showMessage("Falha ao enviar mensagem.", "error");
            console.error("Error:", error);
        });
});

// Função para exibir mensagens de feedback
function showMessage(message, type) {
    var messageElement = document.getElementById("form-message");
    messageElement.textContent = message;
    messageElement.className = "form-message " + type + " show"; // Adiciona a classe de sucesso ou erro e a classe show
    messageElement.style.display = "block"; // Torna o elemento visível

    // Ocultar a mensagem após alguns segundos
    setTimeout(function() {
        messageElement.classList.remove("show"); // Remove a classe show para iniciar a animação de desaparecimento
        setTimeout(function() {
            messageElement.style.display = "none"; // Oculta o elemento completamente após a animação
        }, 500); // 500ms é o tempo da animação
    }, 3000); // 5000ms = 5 segundos
}
