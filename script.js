// Constantes de seleção de elemento (querySelector ou getElement)
const colors = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board')
const btnClearBoard = document.getElementById('clear-board');
const vqvBtn = document.getElementById('generate-board');
// Requisito 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
 
function removeSelectedColor(e) {
  colors.forEach((color) => color.classList.remove('selected'));
  e.target.classList.add('selected');
}

colors.forEach((color) => color.addEventListener('click', removeSelectedColor));

// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
const pixelColor = document.getElementById('color-palette');
let cor = 'Black'
pixelColor.addEventListener('click', selectColor);
function selectColor (event) {
  cor = getComputedStyle(event.target).backgroundColor;
  }
  
  pixelBoard.addEventListener('click' , targetColor)
  function targetColor (event) {
    if (event.target.id !== 'pixel-board') {
      event.target.style.backgroundColor = cor
    }
  } 

// Requisito 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
//Se liga nessa gambiarra
const clearBtn = document.getElementById('clear-board');
function clear(event) { 
  location. reload();
}
clearBtn.addEventListener('click', clear); //Esse estudor é acionado ao clicar no botão Limpar e executa a função clear

// Requisito 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.


// Requisito 11 - Limite o tamanho mínimo e máximo do board.
const boardSize = document.getElementById('board-size');

function boardSizeFunction() {
  if (boardSize.value <= 5 && boardSize.value !== '') {
      boardSize.value = 5;
  } else if (boardSize.value >= 50) {
      boardSize.value = 50;
  }
}

// Requisito 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
  const colorBlack = document.getElementById('black');
  colorBlack.style.backgroundColor = 'black';

  const randomRGB1 = document.getElementById('green');
  randomRGB1.style.backgroundColor = `rgb(${Math.random() * 255},
  ${Math.random() * 255}, ${Math.random() * 255})`;

  const randomRGB2 = document.getElementById('blue');
  randomRGB2.style.backgroundColor = `rgb(${Math.random() * 255},
  ${Math.random() * 255}, ${Math.random() * 255})`;

  const randomRGB3 = document.getElementById('red');
  randomRGB3.style.backgroundColor = `rgb(${Math.random() * 255}, 
  ${Math.random() * 255}, ${Math.random() * 255})`;
