'use strict';

var cellElements = [];

function createCellElement(cellData) {
    var cellElement = document.createElement('div');
    cellElement.className = 'board-cell';
    cellElement.dataset.row = cellData.row;
    cellElement.dataset.col = cellData.col;
    return cellElement;
}

function clearBoardElement() {
    while (gameBoardElement.firstChild) {
        gameBoardElement.removeChild(gameBoardElement.firstChild);
    }
}

function renderBoard() {
    var row;
    var col;
    var cellElement;
    var elementRow;
    clearBoardElement();
    cellElements = [];
    for (row = 0; row < BOARD_SIZE; row++) {
        elementRow = [];
        for (col = 0; col < BOARD_SIZE; col++) {
            cellElement = createCellElement(gameBoard[row][col]);
            gameBoardElement.appendChild(cellElement);
            elementRow.push(cellElement);
        }
        cellElements.push(elementRow);
    }
}

function updateCellFlagVisual(cellData) {
    var cellElement = cellElements[cellData.row][cellData.col];
    if (cellData.isFlagged) {
        cellElement.classList.add('flagged');
        cellElement.textContent = '🚩';
    } else {
        cellElement.classList.remove('flagged');
        cellElement.textContent = '';
    }
}

function updateCellElement(cellData) {
    var cellElement = cellElements[cellData.row][cellData.col];
    cellElement.classList.add('revealed');
    if (cellData.isMine) {
        cellElement.classList.add('mine');
        cellElement.textContent = '💣';
    } else if (cellData.adjacentMines > 0) {
        cellElement.classList.add('adjacent-' + cellData.adjacentMines);
        cellElement.textContent = cellData.adjacentMines;
    }
}
