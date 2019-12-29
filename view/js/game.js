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
}

function removePiece(position) {
    $("#" + position).remove("img");
}

function move(piece, prv, nxt) {
    removePiece(prv);
    addPiece(piece, nxt);
}

$(document).ready(function() {
    let height = $(window).height();
    let sq = height / 8;

    $(".board-col").width(sq).height(sq).click(function() {
        let id = $(this).children("img").attr("id");
        let piece = game.pieces[id];
    });

    newGame();
});