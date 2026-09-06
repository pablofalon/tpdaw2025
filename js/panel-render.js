'use strict';

function formatCounterValue(value) {
    var isNegative = value < 0;
    var digitsText = String(Math.abs(value));
    var minLength = isNegative ? 2 : 3;
    while (digitsText.length < minLength) {
        digitsText = '0' + digitsText;
    }
    if (isNegative) {
        return '-' + digitsText;
    }
    return digitsText;
}

function updateMineCounterDisplay() {
    mineCounterElement.textContent = formatCounterValue(minesRemaining);
}

function updateTimerDisplay() {
    timerDisplayElement.textContent = formatCounterValue(timerSeconds);
}
