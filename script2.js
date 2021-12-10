let generateColor = () => `rgb(${parseInt(Math.random() * 264)},${parseInt(Math.random() * 264)},${parseInt(Math.random() * 264)})`

function listColor() {
  const elementos = document.getElementsByClassName('color');
  for (let index = 1; index < elementos.length; index += 1) {
    const novaCor = generateColor();
    elementos[index].style.backgroundColor = generateColor();
  }
}

function iniciar() {
  const pai = document.getElementById('pixel-board');
  //pai.innerText = '';
  for (let index = 0; index < 5; index += 1) {
    const cria = document.createElement('div');
    cria.classList.add('line');
    pai.appendChild(cria);
  }
  criaElementos();
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
  iniciar();
  listColor();
}

window.onload = inicio;

function Pintar(event) {
  const elementSelected = document.getElementsByClassName('selected')[0];
  const colorSelected = window.getComputedStyle(elementSelected).backgroundColor;
  event.target.style.backgroundColor = colorSelected;
}

function adicionaEventos() {
  const elementos = document.getElementsByClassName('pixel');
  for (let index = 0; index < elementos.length; index += 1) {
    elementos[index].addEventListener('click', Pintar);
  }
}

function criaElementos() {
  const pais = document.querySelectorAll('.line');
  for (let index = 0; index < pais.length; index += 1) {
    for (let index2 = 0; index2 < pais.length; index2 += 1) {
      const cria = document.createElement('div');
      cria.classList.add('pixel');
      pais[index].appendChild(cria);
    }
  }
  adicionaEventos();
}
function CriaLinhas() {
  const pai = document.getElementById('pixel-board');
  pai.innerText = '';
  const quantidade = document.getElementById('board-size');
  const valor2 = quantidade.value;
  for (let index = 0; index < valor2; index += 1) {
    const cria = document.createElement('div');
    cria.classList.add('line');
    pai.appendChild(cria);
  }
  criaElementos();
}
function sizeBoard() {
  const quantidades = document.getElementById('board-size');
  const valor3 = quantidades.value;
  if (!valor3) { return alert('Board inválido!'); }
  if (valor3 < 5) {
    quantidades.value = 5;
    return CriaLinhas();
  }
  if (valor3 > 50) {
    quantidades.value = 50;
    return CriaLinhas();
  }
  return CriaLinhas();
}
const valor = document.getElementById('generate-board');
valor.addEventListener('click', sizeBoard);

function ClearColor() {
  const elementosLimpar = document.getElementsByClassName('pixel');
  for (let index = 0; index < elementosLimpar.length; index += 1) {
    elementosLimpar[index].style.backgroundColor = 'white';
  }
}
const clear = document.getElementById('clear-board');
clear.addEventListener('click', ClearColor);
const newColor = document.getElementById('newColor');

newColor.addEventListener('click', listColor);
