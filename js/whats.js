document.addEventListener("DOMContentLoaded", function () {
    let produto = document.querySelector("#content p").innerText; // Pega o nome da peça
    let tamanhoSelecionado = ""; // Armazena o tamanho selecionado
    let corSelecionada = ""; // Armazena a cor selecionada

    // Captura os botões de tamanho
    document.querySelectorAll(".size").forEach(button => {
        button.addEventListener("click", function () {
            tamanhoSelecionado = this.innerText; // Atualiza o tamanho ao clicar
        });
    });

    // Captura os botões de cor
    document.querySelectorAll(".color").forEach(button => {
        button.addEventListener("click", function () {
            corSelecionada = this.innerText; // Atualiza a cor ao clicar
        });
    });

    // Evento de clique no botão "Finalizar Compra"
    document.getElementById("end").addEventListener("click", function () {
        if (!tamanhoSelecionado || !corSelecionada) {
            alert("Por favor, selecione um tamanho e uma cor antes de finalizar a compra!");
            return;
        }

        let numeroLoja = "5513996718928"; // Substitua pelo número correto da loja
        let mensagem = `Olá, gostaria de saber se a peça de roupa ${produto} do tamanho ${tamanhoSelecionado} na cor ${corSelecionada} está disponível.`;
        let linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroLoja}&text=${encodeURIComponent(mensagem)}`;

        window.open(linkWhatsApp, "_blank");
    });
});

