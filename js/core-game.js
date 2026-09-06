'use strict';

var BOARD_SIZE = 8;
var MINE_COUNT = 10;
var playerName = '';
var gameBoard = [];
var minesRemaining = MINE_COUNT;
var timerSeconds = 0;
var timerIntervalId = null;
var isFirstClick = true;
var isGameOver = false;

function buildBoardData() {
    var row;
    var col;
    var boardRow;
    gameBoard = [];
    for (row = 0; row < BOARD_SIZE; row++) {
        boardRow = [];
        for (col = 0; col < BOARD_SIZE; col++) {
            boardRow.push({
                row: row,
                col: col,
                isMine: false,
                isRevealed: false,
                isFlagged: false,
                adjacentMines: 0
            });
        }
        gameBoard.push(boardRow);
    }
}

function placeMines() {
    var minesPlaced;
    var randomRow;
    var randomCol;
    minesPlaced = 0;
    while (minesPlaced < MINE_COUNT) {
        randomRow = Math.floor(Math.random() * BOARD_SIZE);
        randomCol = Math.floor(Math.random() * BOARD_SIZE);
        if (!gameBoard[randomRow][randomCol].isMine) {
            gameBoard[randomRow][randomCol].isMine = true;
            minesPlaced++;
        }
    }
}

function isValidCell(row, col) {
    return row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE;
}

function countAdjacentMines(row, col) {
    var neighborRow;
    var neighborCol;
    var mineCount;
    mineCount = 0;
    for (neighborRow = row - 1; neighborRow <= row + 1; neighborRow++) {
        for (neighborCol = col - 1; neighborCol <= col + 1; neighborCol++) {
            if (isValidCell(neighborRow, neighborCol) && (neighborRow !== row || neighborCol !== col)) {
                if (gameBoard[neighborRow][neighborCol].isMine) {
                    mineCount++;
                }
            }
        }
    }
    return mineCount;
}

function incrementTimer() {
    timerSeconds++;
    updateTimerDisplay();
}

function startTimer() {
    timerIntervalId = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
}

function revealAllMines() {
    var row;
    var col;
    var cell;
    for (row = 0; row < BOARD_SIZE; row++) {
        for (col = 0; col < BOARD_SIZE; col++) {
            cell = gameBoard[row][col];
            if (cell.isMine && !cell.isRevealed) {
                cell.isRevealed = true;
                updateCellElement(cell);
            }
        }
    }
}

function endGame(didWin) {
    isGameOver = true;
    stopTimer();
    if (!didWin) {
        revealAllMines();
    }
    showResultModal(didWin);
}

function checkWinCondition() {
    var row;
    var col;
    var revealedSafeCount = 0;
    for (row = 0; row < BOARD_SIZE; row++) {
        for (col = 0; col < BOARD_SIZE; col++) {
            if (!gameBoard[row][col].isMine && gameBoard[row][col].isRevealed) {
                revealedSafeCount++;
            }
        }
    }
    if (revealedSafeCount === BOARD_SIZE * BOARD_SIZE - MINE_COUNT) {
        endGame(true);
    }
}

function revealCell(row, col) {
    var cell = gameBoard[row][col];
    if (isGameOver || cell.isRevealed || cell.isFlagged) {
        return;
    }
    if (isFirstClick) {
        isFirstClick = false;
        startTimer();
    }
    cell.isRevealed = true;
    updateCellElement(cell);
    if (cell.isMine) {
        endGame(false);
        return;
    }
    if (cell.adjacentMines === 0) {
        revealAdjacentCells(row, col);
    }
    checkWinCondition();
}

function revealAdjacentCells(row, col) {
    var neighborRow;
    var neighborCol;
    for (neighborRow = row - 1; neighborRow <= row + 1; neighborRow++) {
        for (neighborCol = col - 1; neighborCol <= col + 1; neighborCol++) {
            if (isValidCell(neighborRow, neighborCol) && (neighborRow !== row || neighborCol !== col)) {
                revealCell(neighborRow, neighborCol);
            }
        }
    }
}

function toggleFlag(row, col) {
    var cell = gameBoard[row][col];
    if (isGameOver || cell.isRevealed) {
        return;
    }
    cell.isFlagged = !cell.isFlagged;
    if (cell.isFlagged) {
        minesRemaining--;
    } else {
        minesRemaining++;
    }
    updateCellFlagVisual(cell);
    updateMineCounterDisplay();
}

function calculateAdjacentMines() {
    var row;
    var col;
    for (row = 0; row < BOARD_SIZE; row++) {
        for (col = 0; col < BOARD_SIZE; col++) {
            if (!gameBoard[row][col].isMine) {
                gameBoard[row][col].adjacentMines = countAdjacentMines(row, col);
            }
        }
    }
}

function resetGame() {
    isGameOver = false;
    isFirstClick = true;
    minesRemaining = MINE_COUNT;
    timerSeconds = 0;
    stopTimer();
    buildBoardData();
    placeMines();
    calculateAdjacentMines();
    renderBoard();
    updateMineCounterDisplay();
    updateTimerDisplay();
    hideResultModal();
}
