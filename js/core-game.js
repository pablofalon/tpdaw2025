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
