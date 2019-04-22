const DEFAULT_CELL_SIZE = 40;
var Cell = function (x, y) {
    this.x = x;
    this.y = y;

    this.getHtml = function () {
        var top = this.x * DEFAULT_CELL_SIZE;
        var left = this.y * DEFAULT_CELL_SIZE;
        var cellHtml = '<div id="cell-' + this.x + '-' + this.y + '" onclick="" class="cell" style="position: absolute; width: ' +
            DEFAULT_CELL_SIZE + 'px; height:' +
            DEFAULT_CELL_SIZE + 'px; left:' +
            left + 'px; top:' +
            top + 'px; line-height: ' +
            DEFAULT_CELL_SIZE + 'px;"></div>';
        return cellHtml;
    };
};

var GameBoard = function (rows, cols, elementId) {
    this.rows = rows;
    this.cols = cols;
    this.elementId = elementId;
    this.cells = [];
    this.draw = function () {
        var gameBoardDiv = document.getElementById(this.elementId);
        //gameBoardDiv.innerHTML = "";
        for (var i = 0; i < this.rows; i++) {
            var row = [];
            this.cells.push(row);
            for (var j = 0; j < this.cols; j++) {
                var cell = new Cell(i, j);
                row.push(cell);
                gameBoardDiv.innerHTML += cell.getHtml();
            }
            console.log(row);
        }
    };

};

let gameBoard = new GameBoard(10, 10, "game-board");
gameBoard.draw();
