// Write your code here
console.log('Hello world!');

document.querySelector('.b1').addEventListener('click', function() {
    document.querySelector('.t1').style.color = 'red';
});

document.querySelector('.b2').addEventListener('click', function() {
    document.querySelector('.t2').style.backgroundColor = '#ffd600';
});

document.querySelector('.b3').addEventListener('click', function() {
    document.querySelector('a').href = 'https://google.com';
});

document.querySelector('.b4').addEventListener('click', function() {
    document.querySelector('img').src = 'images/fish.jpg';
});

document.querySelector('.b5').addEventListener('click', function() {
    document.querySelector('#ab').id = 'cd';
});

document.querySelector('.b6').addEventListener('click', function() {
    document.querySelector('.t6').innerText = 'Текст изменен';
});

document.querySelector('.b7').addEventListener('click', function() {
    document.querySelector('.t7').innerHTML = '<i>Цветы</i>';
});

document.querySelector('.b8').addEventListener('click', function() {
    document.querySelector('.t8').style.fontSize = '20px';
});

document.querySelector('.b9').addEventListener('click', function() {
    document.querySelector('.t9').classList.add('hi');
});

document.querySelector('.b10').addEventListener('click', function() {
    document.querySelector('.t10').classList.remove('hi');
});

document.querySelector('.b11').addEventListener('click', function() {
    document.querySelector('.t11').classList.toggle('hi');
});

document.addEventListener('click', function(e) {
    document.querySelector('.t12').innerText = e.target.className;
});

document.querySelector('.b13').addEventListener('click', function() {
    document.querySelector('.t13').innerText = document.querySelector('.t13').dataset.en;
});

window.addEventListener('resize', function() {
    var red = Math.ceil(Math.random() * 255);
    var green = Math.ceil(Math.random() * 255);
    var blue = Math.ceil(Math.random() * 255);
    // document.querySelector('.t99').style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.querySelector('.t99').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

document.querySelector('.t98').addEventListener('input', function(e) {
    document.querySelector('.t98-2').innerText = e.target.value.length;
});

// Girls
// 1
var whore1 = document.querySelector('.whore').cloneNode(true);
whore1.querySelector('.whore-name').innerText = jasmine.name;
whore1.querySelector('.whore img').src = jasmine.photo;
whore1.querySelector('.whore-age').innerText = 'Возраст: ' + jasmine.age;
whore1.querySelector('.whore-boobs').innerText = 'Размер груди: ' + jasmine.boobs;
whore1.querySelector('.whore-height').innerText = 'Рост: ' + jasmine.height;
whore1.querySelector('.whore-weight').innerText = 'Вес: ' + jasmine.weight;
whore1.querySelector('.whore-phone').innerText = jasmine.phone;
whore1.querySelector('.whore-can-come').innerText = 'Выезд: ' + jasmine.can_come === true ? '+' : '-';
whore1.querySelector('.whore-teaser').innerText = jasmine.teaser;

document.querySelector('.b14').addEventListener('click', function() {
    document.querySelector('.whores-container').appendChild(whore1);
});

// 2
document.querySelector('.b14').addEventListener('click', function() {
    var container = document.querySelector('.whores-container');

    var whore2 = document.createElement('div');
    whore2.classList.add('whore');

    var whoreName = document.createElement('div');
    whoreName.classList.add('whore-name');
    whoreName.innerText = jasmine.name;
    whore2.appendChild(whoreName);

    var whoreImg = document.createElement('img');
    whoreImg.src = jasmine.photo;
    whoreImg.width = 200;
    whore2.appendChild(whoreImg);

    var whoreAge = document.createElement('div');
    whoreAge.classList.add('whore-age');
    whoreAge.innerText = 'Возраст: ' + jasmine.age;
    whore2.appendChild(whoreAge);

    var whoreBoobs = document.createElement('div');
    whoreBoobs.classList.add('whore-boobs');
    whoreBoobs.innerText = 'Размер груди: ' + jasmine.boobs;
    whore2.appendChild(whoreBoobs);

    var whoreHeight = document.createElement('div');
    whoreHeight.classList.add('whore-height');
    whoreHeight.innerText = 'Рост: ' + jasmine.height;
    whore2.appendChild(whoreHeight);

    var whoreWeight = document.createElement('div');
    whoreWeight.classList.add('whore-weight');
    whoreWeight.innerText = 'Вес: ' + jasmine.weight;
    whore2.appendChild(whoreWeight);

    var whorePhone = document.createElement('div');
    whorePhone.classList.add('whore-phone');
    whorePhone.innerText = jasmine.phone;
    whore2.appendChild(whorePhone);

    var whoreCanCome = document.createElement('div');
    whoreCanCome.classList.add('whore-can-come');
    whoreCanCome.innerText = 'Выезд: ' + jasmine.can_come ? '+' : '-';
    whore2.appendChild(whoreCanCome);

    var whoreTeaser = document.createElement('div');
    whoreTeaser.classList.add('whore-teaser');
    whoreTeaser.innerText = jasmine.teaser;
    whore2.appendChild(whoreTeaser);

    container.appendChild(whore2);
});

document.querySelector('.b14').addEventListener('click', function() {
    document.querySelector('.whores-container').innerHTML += whore3;
});

//3
var whore3 = `
    <div class="whore">
        <div class="whore-name">TODO:</div>
        <img src="images/silvia.jpg" width="200">
        <div class="whore-age">Возраст: ${jasmine.age}</div>
        <div class="whore-boobs">Размер груди: 3</div>
        <div class="whore-height">Рост: 170</div>
        <div class="whore-weight">Вес: 60</div>
        <div class="whore-phone">+380960000000</div>
        <div class="whore-can-come">Выезд: -</div>
        <div class="whore-teaser">Я - симпатичная девочка экзотической внешности без комплексов и с огромной любовью к сексу! Я непревзойденная любовница, страстная, доступная и яркая! Я невероятно сексуальна и изобретательна, мила и непосредственна. Не теряй времени, звони мне, мой друг! Я скрашу твоё одиночество :)</div>
    </div>
`;

// Fish
document.querySelector('.b15').addEventListener('click', function() {
    var fish = document.querySelector('.fish');
    if (document.querySelector('.cat-container-1 .fish')) {
        document.querySelector('.cat-container-2').appendChild(fish);
    } else {
        document.querySelector('.cat-container-1').appendChild(fish);
    }
});

// Tooth
document.querySelector('.b16').addEventListener('click', function() {
    document.querySelector('.tooth').remove();
});

// Skier
document.querySelector('.b17').addEventListener('click', function() {
    var x = 0;
    var timerId = setInterval(function() {
        x += 5;
        document.querySelector('.skier').style.left = x + 'px';
    }, 16);

    document.querySelector('.b17-2').addEventListener('click', function() {
        clearInterval(timerId);
    })
});

// Mikki
for (var i = 0; i < mikki.length; i++) {
    for (var j = 0; j < mikki[i].length; j++) {
        var tile = document.createElement('div');
        tile.classList.add('mikki_tile');
        if (mikki[i][j] === 'X') {
            tile.style.backgroundColor = 'black';
        }
        document.querySelector('.mikki_tiles').appendChild(tile);
    }
}

// Mario
document.querySelector('.b18').addEventListener('click', function() {
    for (i = 0; i < map.length; i++) {
        for (j = 0; j < map[i].length; j++) {
            var tile = document.createElement('div');
            tile.classList.add('tile');
            tile.style.top = i * 16 + 'px';
            tile.style.left = j * 16 + 'px';
            switch (map[i][j]) {
                case 'z':
                    tile.classList.add('x_z');
                    break;
                case 'k':
                    tile.classList.add('x_k');
                    break;
                case 'c':
                    tile.classList.add('x_c');
                    break;
                case 't':
                    tile.classList.add('x_t');
                    break;
                case 'g':
                    tile.classList.add('x_g');
                    break;
                case 'b':
                    tile.classList.add('x_b');
                    break;
                case 'd':
                    tile.classList.add('x_d');
                    break;
                case 'w':
                    tile.classList.add('x_w');
                    break;
            }
            document.querySelector('.scene').appendChild(tile);
        }
    }
});

// Slides
document.querySelector('.next').addEventListener('click', function() {
    var activeSlide = document.querySelector('.slider .active');
    if (activeSlide.nextElementSibling) {
        activeSlide.classList.remove('active');
        activeSlide.nextElementSibling.classList.add('active');
    }
});

document.querySelector('.previous').addEventListener('click', function() {
    var activeSlide = document.querySelector('.slider .active');
    if (activeSlide.previousElementSibling) {
        activeSlide.classList.remove('active');
        activeSlide.previousElementSibling.classList.add('active');
    }
});

// FAQ
document.querySelector('.faq').addEventListener('click', function(e) {
    e.target.classList.toggle('active');
});

// Tabs
document.querySelector('.tabs').addEventListener('click', function(e) {
    if (!e.target.classList.contains('item')) {
        return;
    }

    var activeTab = document.querySelector('.tabs .item.active');
    var activeContent = document.querySelector('.tabs-content .item.active');

    activeTab.classList.remove('active');
    activeContent.classList.remove('active');

    e.target.classList.add('active');
    document.querySelector(`.tabs-content [data-tab="${e.target.dataset.tab}"]`).classList.add('active');
});

// Login
document.querySelector('.show-login-pop-up').addEventListener('click', function() {
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.pop-up').classList.remove('hidden');
});

document.querySelector('.pop-up .close').addEventListener('click', function() {
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.pop-up').classList.add('hidden');
});

// Link
document.querySelector('.link-ebanoe').addEventListener('click', function(e) {
    e.preventDefault();
});

// Local storage
document.querySelector('.b97').addEventListener('click', function() {
    localStorage.setItem('hideAd', 'true');
    document.querySelector('.t97').classList.add('hidden');
});

if (localStorage.getItem('hideAd') === 'true') {
    document.querySelector('.t97').classList.add('hidden');
}
