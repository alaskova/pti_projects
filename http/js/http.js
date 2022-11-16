// Write your code here
console.log('Hello world!');

// Чередуй два способа (XMLHttpRequest и $.ajax)

$('button.add-games').on('click', function() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://127.0.0.1:3001/games');
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('success', xhr.responseText);
                var gameTemplate = $('#game-template').html();
                $('#games').html(doT.template(gameTemplate)(JSON.parse(xhr.responseText)));
            } else {
                console.log('error');
            }
            console.log('complete');
        }
    });
    xhr.send();
});

$('button.btn-nav-en').on('click', function() {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3001/menu/en',
        dataType: 'json',
    }).done(function(data) {
        console.log('success', data);
        var menuTemplateEn = $('#nav-template').html();
        $('#nav').html(doT.template(menuTemplateEn)(data));
    }).fail(function() {
        console.log('error');
    }).always(function() {
        console.log('complete');
    });
});

$('button.btn-nav-ru').on('click', function() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://127.0.0.1:3001/menu/ru');
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('success', xhr.responseText)
                var menuTemplateRu = $('#nav-template').html();
                $('#nav').html(doT.template(menuTemplateRu)(JSON.parse(xhr.responseText)));
            } else {
                console.log('error');
            }
            console.log('complete');
        }
    });
    xhr.send();
});

$('button.add-whores').on('click', function() {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3001/whores',
        dataType: 'json',
    }).done(function(data) {
        console.log('success', data);
        var whoreTemplate = $('#whore-template').html();
        $('#whores').html(doT.template(whoreTemplate)(data));
    }).fail(function() {
        console.log('error');
    }).always(function() {
        console.log('complete');
    });
});

$('button.add-movies').on('click', function() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://127.0.0.1:3001/movies');
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('success', xhr.responseText);
                var movieTemplate = $('#movie-template').html();
                $('#movies').html(doT.template(movieTemplate)(JSON.parse(xhr.responseText)));
            } else {
                console.log('error');
            }
            console.log('complete');
        }
    })
    xhr.send();
});