$(document).ready(function() {
    let width = $(window).width();
    let height = $(window).height();
    let sq = height / 8;

    $(".square").height(sq);

    $(".board-col").width(sq);
});