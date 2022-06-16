const gamePlay = (function() {

    const playerOne = player("Player 1", "X", true);
    const playerTwo = player("Player 2", "O", false);

    // Marks tiles
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        let playerMarkValue;
        if (playerOne.isTurn === true) {
            playerMarkValue = playerOne.playerMark;
        } else {
            playerMarkValue = playerTwo.playerMark;
        }
        tile.textContent = playerMarkValue;
        const tileY = parseInt(tile.dataset.y);
        const tileX = parseInt(tile.dataset.x);
        for (let i = 0; i < gameBoard.gameArray.length; i++) {
            if (tileY === i) {
                for (let j = 0; j < gameBoard.gameArray[i].length; j++)
                if (tileX === j) {
                    gameBoard.gameArray[i][j].mark = playerMarkValue;
                    console.log(gameBoard.gameArray[i][j].mark = 'X');
                }
            }
        }
        if (playerOne.isTurn === true) {
            playerOne.isTurn = false;
            playerTwo.isTurn = true;
        } else {
            playerOne.isTurn = true;
            playerTwo.isTurn = false;
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

    function player(name, mark, turn) {
        let isTurn = turn;
        let playerName = name;
        let playerMark = mark;
        return {
            playerMark,
            isTurn
        }
    }
    

})();