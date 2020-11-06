import {Column} from './column.js';


export class Game {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        this.winnerNumber = 0
        this.currentPlayer = 1
        this.columns = [
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
        ]
    }
    getName() {
        if (this.winnerNumber === 3) {
            return `${this.player1} ties with ${this.player2}`;
        }
        return `${this.player1} vs. ${this.player2}`
        
    }
    playInColumn(columnsIndex) {
        this.columns[columnsIndex].add(this.currentPlayer);
        this.checkForTie()
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2
        } else {
            this.currentPlayer = 1
        }
        
    }
    checkForTie() {
        if (this.columns.every(el => el.isFull())) {
            this.winnerNumber = 3
        }
    }

    getTokenAt(rowIndex, columnIndex){
        return this.columns[columnIndex].getTokenAt(rowIndex)
    }

    isColumnFull(columnIndex) {
        return this.columns[columnIndex].isFull();
    }
}