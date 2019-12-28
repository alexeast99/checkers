$(document).ready(function() {
    let height = $(window).height();
    let sq = height / 8;

    $(".board-col").width(sq).height(sq);
});