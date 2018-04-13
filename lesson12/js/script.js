$(document).ready(function () {
    $('.main_btn').on('click', function () {
    $('.overlay').fadeIn(900);
    $('.modal').slideDown(500);
});
$('.main_btna').on('click', function () {
    $('.overlay').fadeIn(900);
    $('.modal').slideDown(500);
});
$('nav ul li:eq(1)').on('click', function () {
    $('.overlay').fadeIn(900);
    $('.modal').slideDown(500);
});
$('.close').on('click', function () {
    $('.overlay').fadeOut(900);
    $('.modal').slideUp(500);
});
});