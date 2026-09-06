'use strict';

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
    clearBoardElement();
    for (row = 0; row < BOARD_SIZE; row++) {
        for (col = 0; col < BOARD_SIZE; col++) {
            cellElement = createCellElement(gameBoard[row][col]);
            gameBoardElement.appendChild(cellElement);
        }
    }
}
