"use strict";

const tryBtnElement = document.querySelector('.js-trybtn');
const tryNumberElement = document.querySelector('.js-trynumber');
const clueElement = document.querySelector('.js-clue');
const tryCounter = document.querySelector('.js-tryCounter');
const randomNumber = Math.ceil(Math.random() * 100);
console.log(`El número aleatorio es ${randomNumber}`)

/* function getRandomNumber() {
  const randomNumber = Math.ceil(Math.random() * 100);
  console.log(`El número aleatorio es ${randomNumber}`);
}; */


function handleTryBtn() {
    const tryNumberValue =  parseInt(tryNumberElement.value);
    console.log(tryNumberValue);
    if (tryNumberValue <= 0) {
        clueElement.innerHTML = '¿Seguro que has leído bien las instrucciones? Ese número no es válido.';
    }
    else if (tryNumberValue >= 100) {
        clueElement.innerHTML = '¿Seguro que has leído bien las instrucciones? Ese número no es válido.';
    }
    else if (tryNumberValue < randomNumber) {
        clueElement.innerHTML = 'Te has quedado corta, échale más.';
    }
    else if (tryNumberValue > randomNumber) {
        clueElement.innerHTML = 'Te has pasado, quítale un poco.';
    }
    else if (tryNumberValue === randomNumber) {
        clueElement.innerHTML = 'Lo has adivinado! Minipunto para ti!';
    };
    tryCounter.innerHTML = `${parseInt(tryCounter.innerHTML) +1}`;
};

tryBtnElement.addEventListener('click', handleTryBtn);


