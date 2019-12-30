let game = new board();

function newGame() {
    for (let pos of game.black) {
        let id = game.pieces.length;
        let b = new piece("black", pos, id);
        $("#" + pos).append(b.html);
        game.pieces.push(b);
    }

    for (let pos of game.red) {
        let id = game.pieces.length;
        let r = new piece("red", pos, id);
        $("#" + pos).append(r.html);
        game.pieces.push(r);
    }
}

function addPiece(piece, position) {
    $("#" + position).append(piece.html);
    piece.position = position;
    if (piece.color === "black") {
        game.black.push(piece.position);
    } else {
        game.red.push(piece.position);
    }
}

function removePiece(piece, position) {
    $("#" + position).children("img").remove();
    if (piece.color === "black") {
        game.black.splice(game.black.indexOf(position), 1);
    } else {
        game.black.splice(game.red.indexOf(position), 1);
    }
}

function move(piece, prv, nxt) {
    if (game.validMove(piece, prv, nxt)) {
        console.log("valid move");
        removePiece(piece, prv);
        addPiece(piece, nxt);
    }
}

let temp;

$(document).ready(function() {
    let height = $(window).height();
    let sq = height / 8;

    $(".board-col").width(sq).height(sq).click(function() {
        let id = $(this).children("img").attr("id");
        let pos = $(this).attr("id");
        console.log(pos);
        let piece = game.pieces[id];
        if (!temp) {
            temp = piece;
        }
        else move(temp, temp.position, pos);
    });

    newGame();
});