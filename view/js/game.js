let game = new board();
let temp = false;

function newGame() {
    for (let pos of game.black) {
        let id = game.pieces.length;
        let b = new piece("black", pos, id, "p1");
        $("#" + pos).append(b.html);
        game.pieces.push(b);
    }

    for (let pos of game.red) {
        let id = game.pieces.length;
        let r = new piece("red", pos, id, "p2");
        $("#" + pos).append(r.html);
        game.pieces.push(r);
    }
}

function addPiece(piece, position) {
    $("#" + position).append(piece.html);
    game.add(piece, position);
}

function removePiece(piece, position) {
    $("#" + position).children("img").remove();
    game.remove(piece, position);
}

function deselect(id) {
    $("#" + id).removeClass("bg-primary").addClass("bg-dark");
    temp = false;
}

function changePlayer(piece) {
    let color = "black";
    if (piece.color === "black") color = "red";
    game.turn = color;
    $("#turn_ind").text(color + "'s Turn").css("text-transform", "capitalize");
    $("#turn_ic").attr("src", "assets/images/decorative_" + color + ".svg");
}

function changeScore(piece) {
    let newScore = game.updateScore(piece);
    $("#" + piece.player).text(piece.player + ": " + newScore).css("text-transform", "capitalize");
}

function getVictim(prv, nxt) {
    let victim, victimID, nCn, nRn, row, pos;
    let fRn = game.letTnum(prv[0]);
    let lRn = game.letTnum(nxt[0]);
    let fCn = prv[1];
    let lCn = nxt[1];


    if (lCn > fCn) {  //moved right
        nCn = Number(fCn) + 1;
    } else {  //moved left
        nCn = Number(fCn) - 1;
    }

    if (lRn < fRn) {  //moved up
        nRn = lRn + 1;
    } else {  //moved down
        nRn = lRn - 1;
    }

    row = game.numTlet(nRn);
    pos = row + nCn;
    victimID = $("#" + pos).children("img").attr("id");
    victim = game.pieces[victimID];
    return victim;
}

function move(piece, nxt) {
    let prv = piece.position;
    let fRn = game.letTnum(prv[0]);
    let lRn = game.letTnum(nxt[0]);

    if (!game.validMove(piece, nxt)) {
        deselect(prv);
        return;
    } else if (Math.abs(fRn - lRn) === 1) {
        removePiece(piece, prv);
        addPiece(piece, nxt);
        changePlayer(piece);
    } else {
        let victim = getVictim(prv, nxt);
        if (game.validJump(piece, victim, nxt)) {
            removePiece(piece, prv);  //remove old piece
            removePiece(victim, victim.position);  //remove jumped piece
            addPiece(piece, nxt);
            changeScore(piece);
        }
    }
    deselect(prv);
}

$(document).ready(function() {
    let height = $(window).height();
    let sq = height / 8;

    $(".board-col").width(sq).height(sq).click(function() {
        let id = $(this).children("img").attr("id");
        let pos = $(this).attr("id");
        let piece = game.pieces[id];

        console.log(pos);

        if (!temp && piece.color === game.turn) {
            temp = piece;
            $(this).removeClass("bg-dark").addClass("bg-primary");
        }
        else if (temp && temp.color === game.turn) move(temp, pos);
    });

    newGame();
});