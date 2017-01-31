class TicTacToe {
    constructor() {
      this.player1='x';
      this.player2='o';
      this.currentPlayer = this.player1;
      this.field = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
      ]
      this.winner = null;
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if(isNaN(this.field[rowIndex][columnIndex])){
        return;
      }
      this.field[rowIndex][columnIndex] = this.currentPlayer;
      if(this.currentPlayer == 'x'){
        this.currentPlayer = this.player2;
      }
      else{
        this.currentPlayer = this.player1;
      }
    }

    isFinished() {
      for (var i = 0; i <= 2; i++) {
        if(this.field[i][0] == this.field[i][1] &&
        this.field[i][0] == this.field[i][2] &&
        this.field[i][0] != null){
          this.winner = this.field[i][0];
          console.log("1111");
          return true;
        }
        if(this.field[0][i] == this.field[1][i] &&
        this.field[0][i] == this.field[2][i] &&
        this.field[0][i] != null){
          this.winner = this.field[0][i];
          console.log("2222");
          return true;
        }
      }
      if(this.field[0][0] == this.field[1][1] &&
      this.field[0][0] == this.field[2][2] &&
      this.field[0][0] != null){
        this.winner = this.field[0][0];
        console.log("3333");
        return true;
      }
      else if(this.field[2][0] == this.field[1][1] &&
      this.field[2][0] == this.field[0][2] &&
      this.field[2][0] != null){
        this.winner = this.field[2][0];
        console.log("4444");
        return true;
      }
      else
        return false;
    }

    getWinner() {
      return this.winner;
    }

    noMoreTurns() {
      for (var i = 0; i <= 2; i++) {
        for (var k = 0; k <=2; k++) {
          if(this.field[i][k] == null)
            return false;
        }
      }
      return true;
    }

    isDraw() {
      if(this.noMoreTurns() && this.winner == null)
        return true;
      return false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex];
    }
}



module.exports = TicTacToe;
