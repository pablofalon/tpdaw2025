'use strict';

function isValidPlayerName(name) {
    var trimmedName = name.trim();
    return /^[A-Za-zÀ-ÖØ-öø-ÿ ]{3,}$/.test(trimmedName);
}

function handleNameSubmit() {
    var enteredName = playerNameInputElement.value;
    if (isValidPlayerName(enteredName)) {
        playerName = enteredName.trim();
        nameErrorElement.classList.add('hidden');
        nameModalElement.classList.add('hidden');
    } else {
        nameErrorElement.classList.remove('hidden');
    }
}

function handleBoardClick(clickEvent) {
    var targetElement = clickEvent.target;
    var row;
    var col;
    if (!targetElement.classList.contains('board-cell')) {
        return;
    }
    row = parseInt(targetElement.dataset.row, 10);
    col = parseInt(targetElement.dataset.col, 10);
    revealCell(row, col);
}

function attachEventListeners() {
    nameSubmitButtonElement.addEventListener('click', handleNameSubmit);
    gameBoardElement.addEventListener('click', handleBoardClick);
}

document.addEventListener('DOMContentLoaded', attachEventListeners);
