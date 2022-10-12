// Write your code here
console.log('Hello world!');

$('.b1').click(function() {
    $('.t1').css('color', 'red');
});

$('.b2').click(function() {
    $('.t2').css('background-color', 'red')
});

$('.b3').on('click', function() {
    $('.t3 a').attr('href', 'https://google.com');
});

$('.b4').on('click', function() {
    $('.t4 img').attr('src', 'images/kat.png');
});

$('.b5').on('click', function() {
    $('.t5').attr('id', 'new-id')
});

$('.b6').on('click', function() {
    $('.t6').text('lorem')
});

$('.b7').on('click', function() {
    $('.t7').html('<h2>Цветы</h2>')
});

$('.b8').on('click', function() {
    $('.t8').css('font-size', '30px')
});

$('.b9').on('click', function() {
    $('.t9').addClass('hi')
});

$('.b10').on('click', function() {
    $('.t10').removeClass('hi')
});

$('.b11').on('click', function() {
    $('.t11').toggleClass('hi')
});

$(document).on('click', function(e) {
    $('.t12').text(e.target.className);
});

$('.b13').on('click', function() {
    $('.t13').text(function() {
        return $(this).attr('data-en');
    });
});

$(window).on('resize', function() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    $('.t99').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
});

$('.t98 input').on('input', function() {
    $('.t98-2').text($(this).val().length);
});

//1
$('.b14').click(function() {

    var whore1 = $('<div class="whore">');

    $('<div class="whore-name">').text(jasmine.name).appendTo(whore1);

    var whoreImg = $('<img>', {
        src: jasmine.photo,
        width: 200
    });
    $(whoreImg).appendTo(whore1);

    $('<div class="whore-age">').text('Возраст: ' + jasmine.age).appendTo(whore1);
    $('<div class="whore-boobs">').text('Размер груди: ' + jasmine.boobs).appendTo(whore1);
    $('<div class="whore-height">').text('Рост: ' + jasmine.height).appendTo(whore1);
    $('<div class="whore-weight">').text('Вес: ' + jasmine.weight).appendTo(whore1);
    $('<div class="whore-phone">').text(jasmine.phone).appendTo(whore1);
    $('<div class="whore-can-come">').text('Выезд: ' + jasmine.can_come ? '+' : '-').appendTo(whore1);
    $('<div class="whore-teaser">').text(jasmine.teaser).appendTo(whore1);

    $(whore1).appendTo($('.whores-container'));
});

//2
$('.b14').on('click', function() {
    $('.whores-container').append('<div class="whore">'+
        '<div class="whore-name">' + jasmine.name + '</div>'+
        '<img src="' + jasmine.photo + '" width="200">'+
        '<div class="whore-age">Возраст: ' + jasmine.age + '</div>'+
        '<div class="whore-boobs">Размер груди: 3</div>'+
        '<div class="whore-height">Рост: ' + jasmine.height + '</div>'+
        '<div class="whore-weight">Вес: ' + jasmine.weight + '</div>'+
        '<div class="whore-phone">' + jasmine.phone + '</div>'+
        '<div class="whore-can-come">Выезд: ' + (jasmine.can_come ? '+' : '-') + '</div>'+
        '<div class="whore-teaser">' + jasmine.teaser + '</div>'+
    '</div>');
});

// Fish
$('.b15').on('click', function() {
    if ($('.cat-container-1 .fish')) {
        $('.fish').appendTo($('.cat-container-2'))
    } else {
        $('.fish').appendTo($('.cat-container-1'))
    }
});

// Tooth
$('.b16').on('click', function() {
    $('.tooth').remove();
});

// Skier
$('.b17').on('click', function() {
    var x = 0;
    var timerId = setInterval(function() {
        x += 5;
        $('.skier').css('left', x + 'px');
    }, 16);

    $('.b17-2').on('click', function() {
        clearInterval(timerId);
    });
});

// Mikki
for (var i = 0; i < mikki.length; i++) {
    for (var j = 0; j < mikki[i].length; j++) {
        var tile = $('<div class="mikki_tile">');
        if (mikki[i][j] === 'X') {
            $(tile).css('background-color', 'black')
        }
        $(tile).appendTo('.mikki_tiles');
    }
}

// Mario
$('.b18').on('click', function() {
    for (i = 0; i < map.length; i++) {
        for (j = 0; j < map[i].length; j++) {
            var tile = $('<div class="tile">');
            $(tile).css('top', i * 16 + 'px');
            $(tile).css('left', j * 16 + 'px');
            if (map[i][j] === 'z') {
                $(tile).addClass('x_z')
            }
            if (map[i][j] === 'k') {
                $(tile).addClass('x_k')
            }
            if (map[i][j] === 'c') {
                $(tile).addClass('x_c')
            }
            if (map[i][j] === 't') {
                $(tile).addClass('x_t')
            }
            if (map[i][j] === 'g') {
                $(tile).addClass('x_g')
            }
            if (map[i][j] === 'b') {
                $(tile).addClass('x_b')
            }
            if (map[i][j] === 'd') {
                $(tile).addClass('x_d')
            }
            if (map[i][j] === 'w') {
                $(tile).addClass('x_w')
            }
            $(tile).appendTo('.scene');
        }
    }
});

// Slides
$('.pagination .next').on('click', function() {
    var activeSlide = $('.slide.active');
    var nextSlide = $('.slide.active').next();
    if (nextSlide) {
        activeSlide.removeClass('active');
        nextSlide.addClass('active');
    } else {
        activeSlide.removeClass('active');
        $('.slide').first().addClass('active');
    }
});

$('.pagination .previous').on('click', function() {
    var activeSlide = $('.slide.active');
    var prevSlide = $('.slide.active').prev();
    if (prevSlide) {
        activeSlide.removeClass('active');
        prevSlide.addClass('active');
    } else {
        activeSlide.removeClass('active');
        $('.slide').last().addClass('active');
    }
});

// FAQ
$('.question').on('click', function() {
    $(this).toggleClass('active');
});

// Tabs
$('.tabs .item').on('click', function() {
    $('.tabs .active').removeClass('active');
    $('.tabs-content .active').removeClass('active');

    $(this).addClass('active');

    $(`.tabs-content [data-tab="${$(this).attr('data-tab')}"]`).addClass('active');
});

// Login
$('.show-login-pop-up').on('click', function() {
    $('.pop-up--login').removeClass('hidden');
    $('.overlay').removeClass('hidden');
});

$('.pop-up--login .close').on('click', function() {
    $('.pop-up--login').addClass('hidden');
    $('.overlay').addClass('hidden');
});

// Link
$('a.link-ebanoe').click(function(e) {
    e.preventDefault();
});

// Local storage
$('.b97').click(function() {
    localStorage.setItem('hideAd', 'true');
    $('.t97').addClass('hidden');
});

if (localStorage.getItem('hideAd') === 'true') {
    $('.t97').addClass('hidden');
}











