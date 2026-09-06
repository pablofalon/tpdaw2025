'use strict';

var nameModalElement;
var playerNameInputElement;
var nameErrorElement;
var nameSubmitButtonElement;
var gameBoardElement;
var mineCounterElement;
var timerDisplayElement;
var resetButtonElement;
var resultModalElement;
var resultTitleElement;
var resultMessageElement;

function showNameModal() {
    nameModalElement.classList.remove('hidden');
}

function showResultModal(didWin) {
    if (didWin) {
        resultTitleElement.textContent = '¡Ganaste!';
        resultMessageElement.textContent = playerName + ', completaste el tablero en ' + timerSeconds + ' segundos.';
    } else {
        resultTitleElement.textContent = '¡Perdiste!';
        resultMessageElement.textContent = playerName + ', pisaste una mina.';
    }
    resultModalElement.classList.remove('hidden');
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
    resultModalElement = document.getElementById('result-modal');
    resultTitleElement = document.getElementById('result-title');
    resultMessageElement = document.getElementById('result-message');
    buildBoardData();
    placeMines();
    calculateAdjacentMines();
    renderBoard();
    updateMineCounterDisplay();
    updateTimerDisplay();
    showNameModal();
}

document.addEventListener('DOMContentLoaded', initializeDom);
