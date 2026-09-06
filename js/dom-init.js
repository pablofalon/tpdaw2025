'use strict';

var nameModalElement;
var playerNameInputElement;
var nameErrorElement;
var nameSubmitButtonElement;
var gameBoardElement;
var mineCounterElement;
var timerDisplayElement;
var resetButtonElement;

function showNameModal() {
    nameModalElement.classList.remove('hidden');
}

function initializeDom() {
    nameModalElement = document.getElementById('name-modal');
    playerNameInputElement = document.getElementById('player-name-input');
    nameErrorElement = document.getElementById('name-error');
    nameSubmitButtonElement = document.getElementById('name-submit-button');
    gameBoardElement = document.getElementById('game-board');
    mineCounterElement = document.getElementById('mine-counter');
    timerDisplayElement = document.getElementById('timer-display');
    resetButtonElement = document.getElementById('reset-button');
    showNameModal();
}

document.addEventListener('DOMContentLoaded', initializeDom);
