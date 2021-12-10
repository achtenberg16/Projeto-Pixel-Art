const pixelBoard = document.getElementById('pixel-board');
const sizeQuare = document.getElementById('generate-board');
const clear = document.getElementById('clear-board');
const newcolor = document.getElementById('newColor');

const creators = {
  //esta função cria uma lista com 3 cores para completar a paleta juntamente a cor preta
  listColor: () => {
    const elementos = document.getElementsByClassName('color');
    for (let index = 1; index < elementos.length; index += 1) {
      elementos[index].style.backgroundColor = creators.generateColor();
    }
  },
  //esta função cria todos os pixels dentro das linhas, a quantidade de elementos criados é definido pela quantidade
  //de linhas criadas
  createElement: () => {
    const pixelBoards = document.querySelectorAll('.line');
    for (let index = 0; index < pixelBoards.length; index += 1) {
      for (let index2 = 0; index2 < pixelBoards.length; index2 += 1) {
        const cria = document.createElement('div');
        cria.classList.add('pixel');
        pixelBoards[index].appendChild(cria);
      }
    }
    
  },
  //está função gera um parametro rgb aleatório ex rgb(155,212, 24)
  generateColor: () => `rgb(${parseInt(Math.random() * 264)},${parseInt(Math.random() * 264)},${parseInt(Math.random() * 264)})`
  
}


function init() {
  pixelBoard.innerText = '';
  for (let index = 0; index < 5; index += 1) {
    const cria = document.createElement('div');
    cria.classList.add('line');
    pixelBoard.appendChild(cria);
  }
  creators.createElement();
}

function corAtual(event) {
  const cores = document.querySelectorAll('.color');
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].classList.remove('selected');
  }
  const evento = event.target;
  evento.classList.add('selected');
}

function inicio() {
  const paleta = document.querySelectorAll('.color');
  for (let index = 0; index < paleta.length; index += 1) {
    paleta[index].addEventListener('click', corAtual);
  }
  init();
  creators.listColor();
}

window.onload = inicio;

function Pintar(event) {
  const elementSelected = document.getElementsByClassName('selected')[0];
  const colorSelected = window.getComputedStyle(elementSelected).backgroundColor;
  event.target.style.backgroundColor = colorSelected;
}

function CriaLinhas() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerText = '';
  const quantidade = document.getElementById('board-size');
  const sizeQuare2 = quantidade.value;
  for (let index = 0; index < sizeQuare2; index += 1) {
    const cria = document.createElement('div');
    cria.classList.add('line');
    pixelBoard.appendChild(cria);
  }
  creators.createElement();
}
function sizeBoard() {
  const quantidades = document.getElementById('board-size');
  const sizeQuare3 = quantidades.value;
  if (!sizeQuare3) { return alert('Board inválido!'); }
  if (sizeQuare3 < 5) {
    quantidades.value = 5;
    return CriaLinhas();
  }
  if (sizeQuare3 > 50) {
    quantidades.value = 50;
    return CriaLinhas();
  }
  return CriaLinhas();
}

function ClearColor() {
  const clerElement = document.getElementsByClassName('pixel');
  for (let index = 0; index < clerElement.length; index += 1) {
    clerElement[index].style.backgroundColor = 'white';
  }
}
clear.addEventListener('click', ClearColor);
sizeQuare.addEventListener('click', sizeBoard);
newcolor.addEventListener('click', creators.listColor);
pixelBoard.addEventListener('click', Pintar);