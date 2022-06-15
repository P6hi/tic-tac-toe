const tiles = document.querySelectorAll('.tile');
tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        const tileY = parseInt(tile.dataset.y);
        const tileX = parseInt(tile.dataset.x);
        for (let i = 0; i < gameBoard.gameArray.length; i++) {
            if (tileY === i) {
                for (let j = 0; j < gameBoard.gameArray[i].length; j++)
                if (tileX === j) {
                    gameBoard.gameArray[i][j].mark = 'X';
                }
            }
        }
    });
});

const gameBoard = {
gameArray: [[{mark: null, x: 1, y: 1}, {mark: null, x: 2, y: 1}, {mark: null, x: 3, y: 1}], 
[{mark: null, x: 1, y: 2}, {mark: null, x: 2, y: 2}, {mark: null, x: 3, y: 2}], 
[{mark: null, x: 1, y: 3}, {mark: null, x: 2, y: 3}, {mark: null, x: 3, y: 3}]]
}
