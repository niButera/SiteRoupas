// Seleciona todos os botões de tamanho
const sizeButtons = document.querySelectorAll(".size");

// Seleciona todos os botões de cor
const colorButtons = document.querySelectorAll(".color");

// Adiciona evento de clique aos botões de tamanho
sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove a classe 'selected' de todos os botões de tamanho
    sizeButtons.forEach((btn) => btn.classList.remove("selected"));
    // Adiciona a classe 'selected' ao botão de tamanho clicado
    button.classList.add("selected");
  });
});

// Adiciona evento de clique aos botões de cor
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove a classe 'selected' de todos os botões de cor
    colorButtons.forEach((btn) => btn.classList.remove("selected"));
    // Adiciona a classe 'selected' ao botão de cor clicado
    button.classList.add("selected");
  });
});
