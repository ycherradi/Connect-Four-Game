import { Game } from './game.js';

let game = undefined;
function updateUI() {
    if (game === undefined) {
        document.getElementById("board-holder").classList.add("is-invisible");
    } else {
        document.getElementById("board-holder").classList.remove("is-invisible");
        document.getElementById("game-name").innerHTML = game.getName();
        
    for(let column = 0; column <= 6; column++) {
            const columnId = document.getElementById(`column-${column}`);
            if (game.isColumnFull(column)) {
                columnId.classList.add("full");
            } else {
                columnId.classList.remove("full");
            }
    }
        
    }
    const currentPlayer = game.currentPlayer;
    if (currentPlayer === 1) {
        document.getElementById("click-targets").classList.add("black")
        document.getElementById("click-targets").classList.remove("red")
    } else {
        document.getElementById("click-targets").classList.add("red")
        document.getElementById("click-targets").classList.remove("black")
    }
       

    for (let rowIndex = 0; rowIndex <= 5; rowIndex++){
        
        for (let columnIndex = 0; columnIndex <= 6; columnIndex++){
            const square = document.getElementById(`square-${rowIndex}-${columnIndex}`);
            const player = game.getTokenAt(rowIndex, columnIndex);
            square.innerHTML = "";
            if (player === 1){
                let token = document.createElement("div");
                token.classList.add("token");
                token.classList.add("black");
                square.appendChild(token);
            } else if (player === 2){
                let token = document.createElement("div");
                token.classList.add("token");
                token.classList.add("red");
                square.appendChild(token);
            } 
        }
    }
    for(let column = 0; column <= 6; column++) {
        const columnId = document.getElementById(`column-${column}`);
        if (game.isColumnFull(column)) {
            columnId.classList.add("full");
        } else {
            columnId.classList.remove("full");
        }
    }
    
}


window.addEventListener('DOMContentLoaded', event => {
    
    const player1Name = document.getElementById("player-1-name");
    const player2Name =document.getElementById("player-2-name");
    const newGame = document.getElementById("new-game");

    player1Name.addEventListener('keyup', event => {
        if (player1Name.value) {
            newGame.disabled = false;

        }
    })

    player2Name.addEventListener('keyup', event => {
        if (player2Name.value) {
                newGame.disabled = false;

            }
        })

    newGame.addEventListener("click", event => {
        game = new Game(player1Name.value, player2Name.value)
        player1Name.value = ""
        player2Name.value = ""
        newGame.disabled = true;
        updateUI()
    })

    document.getElementById("click-targets").addEventListener("click", event => {
        const targetId = event.target.id;
        if (!targetId.startsWith("column-")) return;

        let parsedNumber = Number.parseInt(targetId[targetId.length-1]) // need to revise? Video is different at 6:05
        
        game.playInColumn(parsedNumber)
        updateUI()
    })













}) 
    
    





















