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

    validMove(piece, prv, nxt) {
        if (this.gameBoard.indexOf(nxt) < 0 || this.black.indexOf(nxt) >= 0 || this.red.indexOf(nxt) >= 0) return false;

        if (piece.king) {
            return true;
        } else if (piece.color === "red" && prv[0] < nxt[0]) {
            return true;
        } else return piece.color === "black" && prv[0] > nxt[0];

    }

    changePlayer(nxt) {
        this.turn = nxt;
        $("#turn_ind").text(nxt + "'s Turn").css("text-transform", "capitalize");
        $("#turn_ic").attr("src", "assets/images/decorative_" + nxt + ".svg");
    }

    pieces = [];
    turn = "black";
}

class piece {
    constructor(color, position, id) {
        this.color = color;
        this.src = "assets/images/decorative_" + color + ".svg";
        this.position = position;
        this.id = id;
        this.html = "<img id='" + this.id + "' src=" + this.src + " style='height: 100%;'>";
    }
    src = "";
    color = "";
    position = "";
    html = "";
    id = 0;
    king = false;
}