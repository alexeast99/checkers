class board {
    gameBoard = {
        "A": ["0", "2", "4", "6"],
        "B": ["1", "3", "5", "7"],
        "C": ["0", "2", "4", "6"],
        "D": ["1", "3", "5", "7"],
        "E": ["0", "2", "4", "6"],
        "F": ["1", "3", "5", "7"],
        "G": ["0", "2", "4", "6"],
        "H": ["1", "3", "5", "7"]
    };

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

    pieces = [];
}

class piece {
    constructor(color, position, id) {
        this.color = "assets/images/decorative_" + color + ".svg";
        this.position = position;
        this.id = id;
        this.html = "<img id='" + this.id + "' src=" + this.color + " style='height: 100%;'>";
    }
    color = "";
    position = "";
    html = "";
    id = 0;
}