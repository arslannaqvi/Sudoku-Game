// main.js

let sudokuPuzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

function showContainer(containerId) {
    const containers = document.getElementsByClassName('container');
    for (const container of containers) {
        container.style.display = 'none';
    }

    const container = document.getElementById(containerId);
    if (container) {
        container.style.display = 'block';
    }
}

function login() {
    showContainer('leaderboard-container');
    // Perform login logic (not implemented in this example)
    // You might want to fetch user data from a server and update the leaderboard
}

function updateLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-list');
    // Fetch and update leaderboard data (not implemented in this example)
    // You might want to fetch data from a server and populate the leaderboard
}

function startGame() {
    showContainer('sudoku-container');
    drawGrid();
    drawNumbers(sudokuPuzzle);
}

// Initial setup
updateLeaderboard();
