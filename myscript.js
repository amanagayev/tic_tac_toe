// New Game Button
var newGame = document.querySelector('.btn');

// Select all cells
var tableCells = document.querySelectorAll('td');

// Clear all
function clearCells() {
    for(var i=0; i<tableCells.length; i++){
        tableCells[i].textContent = '';
    }
};

clearCells();
newGame.addEventListener('click', clearCells);

// Marking X or O
function changMarker() {
    if (this.textContent === '') {
        this.textContent = 'X';
    } else if (this.textContent === 'X') {
        this.textContent = 'O';
    } else if (this.textContent === 'O') {
        this.textContent = '';
    }
};

for(var i=0; i<9; i++) {
    tableCells[i].addEventListener('click', changMarker);
};