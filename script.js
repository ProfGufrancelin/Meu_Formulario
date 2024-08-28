
document.getElementById("meuForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos do formulário
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("msg").value;

   // verificação de campos vazios
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Exemplo de validação de email simples
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Exibe os valores nos elementos HTML
    document.getElementById("exibeNome").innerText = nome;
    document.getElementById("exibeEmail").innerText = email;
    document.getElementById("exibeMensagem").innerText = mensagem;

    // Mensagem de sucesso (opcional)
    alert("Formulário enviado com sucesso!");
});
