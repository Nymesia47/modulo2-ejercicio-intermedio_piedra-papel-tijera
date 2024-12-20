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
3. - Generar un número aleatorio entre 1 y 9
4. - Generar un movimiento aleatorio
5. - Comparar el movimiento que la jugadora ha seleccionado con el movimiento que ha generado la
computadora y pintar las pistas correspondientes en la pantalla.
*/

const selectPlay = document.querySelector('.js-slect-play');
const playBtn = document.querySelector('.js-btn');
const Result = document.querySelector('.js-result');
const userScore = document.querySelector('.js-score-user');
const computerScore = document.querySelector('.js-score-computer');



function handleClick (ev){
    ev.preventDefault();

}

playBtn.addEventListener('click', handleClick);