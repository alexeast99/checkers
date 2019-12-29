$(document).ready(function() {
    let height = $(window).height();
    let sq = height / 8;

    $(".board-col").width(sq).height(sq);
});

function removePiece(location) {
    $("#" + location).css("display", "none");
}

function addPiece(location) {
    $("#" + location).css("display", "inline");
}

function movePiece(prv, nxt) {
    removePiece(prv);
    addPiece(nxt);
}