const boardSize = 10;
const board = document.getElementById('board');
for (let i = 0; i < boardSize * boardSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', toggleCell);
    board.appendChild(cell);
}

function toggleCell() {
    this.classList.toggle('alive');
}

function atualizarTabuleiro() {
    const cells = board.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const row = Math.floor(i / boardSize);
        const col = i % boardSize;
        const aliveNeighbors = verificarVizinhos(row, col);
        if (cell.classList.contains('alive')) {
            if (aliveNeighbors < 2 || aliveNeighbors > 3) {
                cell.classList.remove('alive');
            }
        } else {
            if (aliveNeighbors === 3) {
                cell.classList.add('alive');
            }
        }
    }
}

function verificarVizinhos(row, col) {
    let aliveNeighbors = 0;
    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
            if (i === row && j === col) {
                continue;
            }
            const neighbor = document.querySelector(`.cell:nth-child(${i * boardSize + j + 1})`);
            if (neighbor && neighbor.classList.contains('alive')) {
                aliveNeighbors++;
            }
        }
    }
    return aliveNeighbors;
}

const startBtn = document.getElementById('start-btn');
let intervalId;
startBtn.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        startBtn.textContent = 'Iniciar Jogo';
    } else {
        intervalId = setInterval(atualizarTabuleiro, 100);
        startBtn.textContent = 'Parar Jogo';
    }
});