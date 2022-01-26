// Constantes de seleção de elemento (querySelector ou getElement)
const colors = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board')

// Requisito 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
 
function removeSelectedColor(e) {
  colors.forEach((color) => color.classList.remove('selected'));
  e.target.classList.add('selected');
}

colors.forEach((color) => color.addEventListener('click', removeSelectedColor));

// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

//Pegar o evento de click com o target e capturar uma parte do html para editar (mudando a posição do select), fazer isso com innerHTML

// Requisito 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.