// Write your code here
console.log('Hello world!');

$('.add-games').on('click', function() {
    var gameTemplate = $('#game-template').html();
    $('#games').append(doT.template(gameTemplate)(games));
});

$('.btn-nav-en').on('click', function() {
    var navTemplate = $('#nav-template').html();
    $('#nav').append(doT.template(navTemplate)(navEn));
});

$('.btn-nav-ru').on('click', function() {
    var navTemplate = $('#nav-template').html();
    $('#nav').append(doT.template(navTemplate)(navRu));
});

$('.add-whores').on('click', function() {
    var whoreTemplate = $('#whore-template').html();
    $('#whores').append(doT.template(whoreTemplate)(whores));
});

$('.add-movies').on('click', function() {
    var movieTemplate = $('#movie-template').html();
    $('#movies').append(doT.template(movieTemplate)(movies));
});