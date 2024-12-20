'use strict';

/* 
1 - El programa genera un movimiento al azar (piedra, papel o tijera)
2 - la usuaria juega
3 - El programa compara los movimientos y decide si la usuaria ha ganado, perdido o empatado.
4 - El programa conta el numero de punto del jugador y del ordenador.
5 - El juego acaba cuando se realizan 10 movimientos.
*/

/*
1. - Crear el html (main, h1, h2,  form, input selector(3 opciones), boton jugar, p(resultado), )
2. - Crear variables - selecionar los elementos que interactuan con el programa
   - escuchar evento click
3. - Generar un número aleatorio entre 1 y 9
4. - Generar un movimiento aleatorio
5. - Comparar el movimiento que la jugadora ha seleccionado con el movimiento que ha generado la
computadora y pintar las pistas correspondientes en la pantalla.
*/

const selectPlay = document.querySelector('.js-slect-play');
const playBtn = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');
const userScore = document.querySelector('.js-score-user');
const computerScore = document.querySelector('.js-score-computer');
let computerPlay = '';
let userPlay = '';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}   

function computerSelection() {
    let randomNum = getRandomNumber(9);

    if (randomNum <= 3) {
        computerPlay = 'piedra'
    } else if (randomNum >= 7) {
        computerPlay = 'papel'
    } else {
        computerPlay = 'tijera'
    };
    return computerPlay;
}

function handleInput (ev) {
    userPlay = ev.target.value;
    console.log(`user play is: ${userPlay}`)

}

selectPlay.addEventListener('input', handleInput);

/*
computer play : piedra -----user play : tijera = cpmputer wins
computer play : piedra ------user play: papel = user wins
computer play : papel -----user play : piedra = cpmputer wins
computer play : papel ------user play: tijera = user wins
computer play : tijera -----user play : papel = cpmputer wins
computer play : tijera ------user play:  piedra = user wins

*/


function handleClick (ev){
    ev.preventDefault();
    let computerPlay = computerSelection();

    if (computerPlay === userPlay){
        result.innerHTML = 'Empate';
    } else if (computerPlay === 'piedra' && userPlay === 'tijera' || computerPlay === 'papel' && userPlay === 'piedra' || computerPlay === 'tijera' && userPlay === 'papel') {
        result.innerHTML = '¡Has perdido!';
    } else {
        result.innerHTML = '¡Has ganado!';
    }
    
    console.log(` computer play is: ${computerPlay}`);
}

playBtn.addEventListener('click', handleClick);