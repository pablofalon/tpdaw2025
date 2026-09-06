'use strict';

var BOARD_SIZE = 8;
var MINE_COUNT = 10;
var playerName = '';
var gameBoard = [];

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

function revealCell(row, col) {
    var cell = gameBoard[row][col];
    if (cell.isRevealed || cell.isFlagged) {
        return;
    }
    cell.isRevealed = true;
    updateCellElement(cell);
    if (!cell.isMine && cell.adjacentMines === 0) {
        revealAdjacentCells(row, col);
    }
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
    if (cell.isRevealed) {
        return;
    }
    cell.isFlagged = !cell.isFlagged;
    updateCellFlagVisual(cell);
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
