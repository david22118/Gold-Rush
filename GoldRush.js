class GoldRush extends Matrix {
  constructor(row, colum, player1, player2) {
    super(row, colum, player1, player2);
    this.matrix = this.generateMatrix(row, colum, player1, player2);
    this.player1 = { player1: player1, score: 0 };
    this.player2 = { player2: player2, score: 0 };
  }

  generateMatrix(row, colum, player1, player2) {
    this.matrix = [];
    const tax = this.getRandomTax(row, colum);
    const coins = this.getRandomcoins(row, colum);
    let counter = ".";
    for (let r = 0; r < row; r++) {
      let m = [];
      for (let c = 0; c < colum; c++) {
        m.push(counter);
      }
      this.matrix.push(m);
    }
    for (let i = 0; i < coins; i++) {
      let number = this.getRandomPosition(row);
      let number2 = this.getRandomPosition(row);
      this.matrix[number2][number] = "tag_faces";
    }
    this.matrix[0][0] = "tablet_mac";
    this.matrix[this.matrix.length - 1][this.matrix.length - 1] = "android";
    /* return this.matrix; */

     for (let i = 0; i < tax; i++) {
      let rows = this.getRandomPosition(row);
      let colums = this.getRandomPosition(row);
      if(this.matrix[rows][colums]!=="tablet_mac"&&this.matrix[rows][colums]!=="android")
      this.matrix[rows][colums] = "X";
      }
         return this.matrix;
    } 
 


  findPlayer(player) {
    for (let r = 0; r < this.matrix.length; r++) {
      for (let c = 0; c < this.matrix[r].length; c++) {
        if (this.matrix[r][c] === player) {
          return { r: r, c: c };
        }
      }
    }
  }
  movePlayer(player, direction) {
    const position = this.findPlayer(player);

    if (
      direction == "right" &&
      position.c !== this.matrix[position.r].length - 1
    ) {
      if (
        this.matrix[position.r][position.c + 1] !== "android" &&
        this.matrix[position.r][position.c + 1] !== "tablet_mac" &&
        this.matrix[position.r][position.c + 1] !== "X"
      ) {
        if (this.matrix[position.r][position.c + 1] == "tag_faces") {
          this.increaseCoins(player);
        }
        this.matrix[position.r][position.c] = ".";
        this.matrix[position.r][position.c + 1] = player;
      }

      this.print();
    }
    if (direction == "left" && position.c !== 0) {
      if (
        this.matrix[position.r][position.c - 1] !== "android" &&
        this.matrix[position.r][position.c - 1] !== "tablet_mac" &&
        this.matrix[position.r][position.c - 1] !== "X"
      ) {
        if (this.matrix[position.r][position.c - 1] == "tag_faces") {
          this.increaseCoins(player);
        }
        this.matrix[position.r][position.c] = ".";
        this.matrix[position.r][position.c - 1] = player;
      }

      this.print();
    }
    if (direction == "up" && position.r !== 0) {
      if (
        this.matrix[position.r - 1][position.c] !== "android" &&
        this.matrix[position.r - 1][position.c] !== "tablet_mac" &&
        this.matrix[position.r - 1][position.c] !== "X"
      ) {
        if (this.matrix[position.r - 1][position.c] == "tag_faces") {
          this.increaseCoins(player);
        }
        this.matrix[position.r][position.c] = ".";
        this.matrix[position.r - 1][position.c] = player;
      }

      this.print();
    }
    if (direction == "down" && position.r !== this.matrix.length - 1) {
      if (
        this.matrix[position.r + 1][position.c] !== "android" &&
        this.matrix[position.r + 1][position.c] !== "tablet_mac" &&
        this.matrix[position.r + 1][position.c] !== "X"
      ) {
        if (this.matrix[position.r + 1][position.c] == "tag_faces") {
          this.increaseCoins(player);
        }
        this.matrix[position.r][position.c] = ".";
        this.matrix[position.r + 1][position.c] = player;
      }

      this.print();
    }
  }
  getRandomcoins(row, colum) {
    let min = Math.ceil(row * colum * 0.95);
    let max = Math.floor(row * colum * 0.95);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getRandomTax(row, colum) {
    let min = Math.ceil(row * colum * 0.2);
    let max = Math.floor(row * colum * 0.3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getRandomNumber() {
    let min = Math.ceil(0);
    let max = Math.floor(1.9);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomPosition(row) {
    let min = Math.ceil(row * 0);
    let max = Math.floor(row - 1);
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
  }
  increaseCoins(player) {
    if (player === "tablet_mac") {
      this.player1.score += 10;
    } else if (player === "android") {
      this.player2.score += 10;
    }
  }
}


/* p1.print()
p1.movePlayer(1, "right");
p1.movePlayer(1, "right");
p1.movePlayer(1, "right");
p1.movePlayer(2, "up");
p1.movePlayer(2,"left")
p1.movePlayer(2,"up")
console.log(p1.player1.score,p1.player2.score); */

/* p1.print()
console.log(p1.matrix) */

/* console.log(p1.matrix)
console.log(p1.findPlayer(1)) */
