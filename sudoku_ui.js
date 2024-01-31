
const GRID_SIZE = 9;
const CELL_SIZE = 50;

function drawGrid() {
    const sudokuBoard = document.getElementById('sudoku-board');
    sudokuBoard.innerHTML = '';

    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.width = `${CELL_SIZE}px`;
            cell.style.height = `${CELL_SIZE}px`;
            sudokuBoard.appendChild(cell);
        }
    }
}

function drawNumbers(board) {
    const sudokuBoard = document.getElementById('sudoku-board');
    const cells = sudokuBoard.getElementsByClassName('cell');

    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            const index = i * GRID_SIZE + j;
            const cell = cells[index];
            cell.innerHTML = board[i][j] !== 0 ? board[i][j] : '';
        }
    }
}
