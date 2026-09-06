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

function attachEventListeners() {
    nameSubmitButtonElement.addEventListener('click', handleNameSubmit);
}

document.addEventListener('DOMContentLoaded', attachEventListeners);
