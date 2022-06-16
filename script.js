const gamePlay = (function() {

    // Marks tiles
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        tile.textContent = 'X';
        const tileY = parseInt(tile.dataset.y);
        const tileX = parseInt(tile.dataset.x);
        for (let i = 0; i < gameBoard.gameArray.length; i++) {
            if (tileY === i) {
                for (let j = 0; j < gameBoard.gameArray[i].length; j++)
                if (tileX === j) {
                    gameBoard.gameArray[i][j].mark = 'X';
                    console.log(gameBoard.gameArray[i][j].mark = 'X');
                }
            }
        }
        winCheck();
    });
});
    
    // Game board
    const gameBoard = {
            gameArray: [[{mark: null, x: 1, y: 1}, {mark: null, x: 2, y: 1}, {mark: null, x: 3, y: 1}], 
                        [{mark: null, x: 1, y: 2}, {mark: null, x: 2, y: 2}, {mark: null, x: 3, y: 2}], 
                        [{mark: null, x: 1, y: 3}, {mark: null, x: 2, y: 3}, {mark: null, x: 3, y: 3}]]
        }

    
    function winCheck() {
        horizontalWin();
        verticalWin();
        diagonalWin();
    
    }
    
    function horizontalWin() {
        for (let i = 0; i < gameBoard.gameArray.length; i++) {
            for (let j = 0; j < gameBoard.gameArray[i].length; j++) {
                if (gameBoard.gameArray[i][0].mark === 'X') {
                    if (gameBoard.gameArray[i][0 + 1].mark === 'X' && gameBoard.gameArray[i][0 + 2].mark === 'X') {
                        alert('You win');
                        return true;
                    } 
                }
            }
        }
    }
    
    function verticalWin() {
        for (let i = 0; i < gameBoard.gameArray.length; i++) {
            for (let j = 0; j < gameBoard.gameArray[i].length; j++) {
                if (gameBoard.gameArray[0][j].mark === 'X') {
                    if (gameBoard.gameArray[0 + 1][j].mark === 'X' && gameBoard.gameArray[0 + 2][j].mark === 'X') {
                        alert('You win');
                        return true;
                    }
                }
            }   
        }
    }
    
    function diagonalWin() {
        for (let i = 0; i < gameBoard.gameArray.length; i++) {
            for (let j = 0; j < gameBoard.gameArray[i].length; j++) {
                if (gameBoard.gameArray[0][0].mark === 'X') {
                    if (gameBoard.gameArray[0 + 1][0 + 1].mark === 'X' && gameBoard.gameArray[0 + 2][0 + 2].mark === 'X') {
                        alert('You win');
                        return true;
                    } else {
                        return false;
                    }
                } else if (gameBoard.gameArray[0][2].mark === 'X') {
                    if (gameBoard.gameArray[0 + 1][2 - 1].mark === 'X' && gameBoard.gameArray[0 + 2][2 - 2].mark === 'X') {
                        alert('You win');
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }
    }

})();