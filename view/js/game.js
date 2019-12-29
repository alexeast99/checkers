let game = new board();

function newGame() {
    for (let pos of game.black) {
        let b = new piece("black", pos);
        $("#" + pos).append(b.html);
    }

    for (let pos of game.red) {
        let r = new piece("red", pos);
        $("#" + pos).append(r.html);
    }
}

$(document).ready(function() {
    let height = $(window).height();
    let sq = height / 8;

    $(".board-col").width(sq).height(sq);

    newGame();
});