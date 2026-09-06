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
    if (gameBoard[row][col].isRevealed) {
        chordCell(row, col);
    } else {
        revealCell(row, col);
    }
}

function handleBoardRightClick(clickEvent) {
    var targetElement = clickEvent.target;
    var row;
    var col;
    clickEvent.preventDefault();
    if (!targetElement.classList.contains('board-cell')) {
        return;
    }
    row = parseInt(targetElement.dataset.row, 10);
    col = parseInt(targetElement.dataset.col, 10);
    toggleFlag(row, col);
}

function handleResetButtonClick() {
    resetGame();
}

function handleKeyDown(keyEvent) {
    if (keyEvent.target.tagName.toLowerCase() === 'input') {
        return;
    }
    if (keyEvent.code === 'Space') {
        keyEvent.preventDefault();
        resetGame();
    }
}

function attachEventListeners() {
    nameSubmitButtonElement.addEventListener('click', handleNameSubmit);
    gameBoardElement.addEventListener('click', handleBoardClick);
    gameBoardElement.addEventListener('contextmenu', handleBoardRightClick);
    resetButtonElement.addEventListener('click', handleResetButtonClick);
    document.addEventListener('keydown', handleKeyDown);
}

document.addEventListener('DOMContentLoaded', attachEventListeners);
