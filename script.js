const colors = document.querySelectorAll('.color');

function removeSelectedColor(e) {
  colors.forEach((color) => color.classList.remove('selected'));
  e.target.classList.add('selected');
}

colors.forEach((color) => color.addEventListener('click', removeSelectedColor));