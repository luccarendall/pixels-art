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
//Pegar o evento de click com o target e capturar uma parte do html para editar (mudando a posição do select), fazer isso com innerHTML

// Requisito 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
//Se liga nessa gambiarra
const clearBtn = document.getElementById('clear-board');
function clear(event) { 
  location. reload();
}
clearBtn.addEventListener('click', clear); 
// clearBtn.addEventListener('click', clear); //Esse estudor é acionado ao clicar no botão Limpar e executa a função clear

// Requisito 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
// function tamanhoBoard() {
// console.log('Cliquei aqui')
// }
// vqvBtn.addEventListener('click', tamanhoBoard)
// Requisito 11 - Limite o tamanho mínimo e máximo do board.

// Requisito 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.

// function randomRGBNumber(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }

// function generateRGB () {
//   const red = randomRGBNumber(0, 255);
//   const green = randomRGBNumber(0, 255);
//   const blue = randomRGBNumber(0, 255);

//   // return `rgb(${red}, ${green}, ${blue})`;
// }

// const colors = document.querySelectorAll('.color')
// const gradeColors = document.getElementById('color-palette')

// for(let i = 0; i < colors.length; i++) {
//   const divColor = colors[i];
//   divColor.getElementsByClassName.backgroundColor = generateRGB()
// }

// const position = randomRGBNumber(0, 2);

// gradeColors.innerHTML = colors[position].getElementsByClassName.backgroundColor