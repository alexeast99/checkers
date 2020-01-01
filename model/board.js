class board {

    //valid squares on the board
    gameBoard = [
        "A0", "A2", "A4", "A6",
        "B1", "B3", "B5", "B7",
        "C0", "C2", "C4", "C6",
        "D1", "D3", "D5", "D7",
        "E0", "E2", "E4", "E6",
        "F1", "F3", "F5", "F7",
        "G0", "G2", "G4", "G6",
        "H1", "H3", "H5", "H7"
    ];

    //starting positions
    black = [
        "F1", "F3", "F5", "F7",
        "G0", "G2", "G4", "G6",
        "H1", "H3", "H5", "H7"
    ];

    red = [
        "A0", "A2", "A4", "A6",
        "B1", "B3", "B5", "B7",
        "C0", "C2", "C4", "C6"
    ];

    p1 = 0;
    p2 = 0;

    pieces = [];  //keeps track of pieces by ID (id == index)
    turn = "black";

    updateScore(piece) {
        let player = piece.player;
        if (player === "p1") {
            this.p1 += 1;
            return this.p1;
        }
        else {
            this.p2 += 1;
            return this.p2;
        }
    }

    letTnum(letter) {
        let diction = {
            "A": 1, "B": 2, "C": 3, "D": 4,
            "E": 5, "F": 6, "G": 7, "H": 8
        };
        return diction[letter];
    }

    numTlet(num) {
        let diction = {
            1: "A", 2: "B", 3: "C", 4: "D",
            5: "E", 6: "F", 7: "G", 8: "H"
        };
        return diction[num];
    }

    validMove(piece, nxt) {
        let prv = piece.position;
        if (this.gameBoard.indexOf(nxt) < 0 || this.black.indexOf(nxt) >= 0 || this.red.indexOf(nxt) >= 0) return false;

        if (piece.king) {
            return true;
        } else if (piece.color === "red" && prv[0] < nxt[0]) {
            return true;
        } else return piece.color === "black" && prv[0] > nxt[0];
    }

    add(piece, position) {
        piece.position = position;
        if (piece.color === "black") this.black.push(position);
        else this.red.push(position);
    }

    remove(piece) {
        if (piece.color === "black") this.black.splice(this.black.indexOf(piece.position), 1);
        else this.red.splice(this.red.indexOf(piece.position), 1);
    }

    validJump(attacker, victim, nxt) {
        //checks if valid move and if total transaction involves exactly 3 rows (start, middle, end)
        let prv = attacker.position;
        let fRow = prv[0];  //letter of row
        let lRow = nxt[0];
        let fRn = this.letTnum(fRow);  //letter of row converted to number
        let lRn = this.letTnum(lRow);

        return Math.abs(fRn - lRn) === 2 && attacker.color !== victim.color;
    }

    isKing(piece) {
        if (piece.color === "black" && piece.position[0] === "A") {
            piece.html = "<img id='" + piece.id + "' src=" + "assets/images/king_black.svg" + " style='height: 100%;'>";
            piece.king = true;
            return true;
        } else if (piece.color === "red" && piece.position[0] === "H") {
            piece.html = "<img id='" + piece.id + "' src=" + "assets/images/king_red.svg" + " style='height: 100%;'>"
            piece.king = true;
            return true;
        } else return false;
    }

    win() {
        if (this.red.length === 0) {
            return "black";
        } else if (this.black.length === 0) {
            return "red";
        } else return "";
    }

}

class piece {
    constructor(color, position, id, p) {
        this.color = color;
        this.src = "assets/images/decorative_" + color + ".svg";
        this.position = position;
        this.id = id;
        this.html = "<img id='" + this.id + "' src=" + this.src + " style='height: 100%;'>";
        this.player = p;
    }
    src = "";
    color = "";
    position = "";
    html = "";
    id = 0;
    king = false;
    player = "";
}