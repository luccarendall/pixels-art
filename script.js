const colors = document.querySelectorAll('.color');

// Requisito 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
 
function removeSelectedColor(e) {
  colors.forEach((color) => color.classList.remove('selected'));
  e.target.classList.add('selected');
}

colors.forEach((color) => color.addEventListener('click', removeSelectedColor));

// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

// Requisito 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

function resetColors(e) {
  colors.forEach((color) => color.classList.add('.white'));
  e.target.classList.add('selected');
}

colors.forEach((color) => color.addEventListener('click', resetColors));