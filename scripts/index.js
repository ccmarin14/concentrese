let clone;
let mano = [];
let contador = 0;
let pares = 0;
let intentos = 0;
let copiaMolde;
let $activas = document.querySelectorAll(".active")
let voice = new SpeechSynthesisUtterance();
let jarvis = window.speechSynthesis;
let textoAvoz;
let $moldes;

const $template = document.querySelector("#template");
const $tablero = document.querySelector(".tablero");
const $fragmento = document.createDocumentFragment();
const $estadisticas = document.querySelector(".estadisticas");
const $reset = document.querySelector(".reset");
const $baraja = [
    {
        valor: '0',
        numero: 'cero'
    },{
        valor: '1',
        numero: 'uno'
    },{
        valor: '2',
        numero: 'dos'
    },{
        valor: '3',
        numero: 'tres'
    },{
        valor: '4',
        numero: 'cuatro'
    },{
        valor: '5',
        numero: 'cinco'
    },{
        valor: '6',
        numero: 'seis'
    },{
        valor: '7',
        numero: 'siete'
    },{
        valor: '8',
        numero: 'ocho'
    },{
        valor: '9',
        numero: 'nueve'
    }
]

$tablero.addEventListener("click", voltearCarta);
$reset.addEventListener("click", restart);

colocarCartas();


