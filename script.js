// email.js

// Inicialize o EmailJS
emailjs.init("2xOOnmkNyAhZn4ALE"); 

// Função para enviar o e-mail
function sendEmail(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Coleta os valores dos campos
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Envia o e-mail com EmailJS
    emailjs.send("service_i0ynpun", "template_4f00n8d", templateParams)
        .then(function(response) {
            alert("Mensagem enviada com sucesso!");
            document.getElementById("contact-form").reset(); // Limpa o formulário
        }, function(error) {
            alert("Erro ao enviar a mensagem. Tente novamente.");
            console.error("Erro:", error);
        });
}

// Adiciona o evento de envio ao formulário quando a página carrega
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", sendEmail);
});