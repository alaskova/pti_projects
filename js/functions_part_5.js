// Создать функции lastIndexOf, shift, getMatrixSum из файла js/functions_part_1 используя цикл for
var lastIndexOf = function(list, value) {
    for (var i = list.length - 1; i >= 0; i--) {
        if (list[i] === value) {
            return i;
        }
    }
    return -1;
};

var shift = function(list) {
    var result = [];
    for (var i = 1; i < list.length; i++) {
        result[result.length] = list[i];
    }
    return result;
};

var getMatrixSum = function(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list[i].length; j++) {
            sum += list[i][j];
        }
    }
    return sum;
}



// Перепиши вызовы функций ниже используя call и apply:
// [1,3,5,7].includes(3);
// [1,3,5,7].indexOf(5);
// [1,3,5,7].join('/');
// 'Вася любит яблоки'.replace('яблоки', 'Киев');
// 'Киев — столица Украины'.slice(7, 14)
// [0, 1, 2, 3].map(function(n) { return n + 1; });
[].includes.call([1,3,5,7], 3);
Array.prototype.includes.call([1,3,5,7], 3);

[].indexOf.call([1,3,5,7], 5);
Array.prototype.indexOf.call([1,3,5,7], 5);

[].join.call([1,3,5,7], '/');
Array.prototype.join.call([1,3,5,7], '/');

''.replace.apply('Вася любит яблоки', ['яблоки', 'Киев'])
String.prototype.replace.apply('Вася любит яблоки', ['яблоки', 'Киев']);

''.slice.apply('Киев — столица Украины', [7, 14]);
String.prototype.slice.apply('Киев — столица Украины', [7, 14]);

[].map.call([0, 1, 2, 3], function(n) { return n + 1; });
Array.prototype.map.call([0, 1, 2, 3], function(n) { return n + 1; });



// Создать функцию sumOfAllArguments которая принимает произвольное количество чисел и возвращает их сумму.
// Пример работы:
// sumOfAllArguments(2, 2, 3);
// => 7
// sumOfAllArguments(2, 2, 3, 3, 10);
// => 20
var sumOfAllArguments = function() {
    var sum = 0;
    var i = 0;
    while (i < arguments.length) {
        sum += arguments[i];
        i++;
    }
    return sum;
};



// Создать функцию trim которая удаляет пробельные символы с начала и конца строки.
// Пример работы:
// trim('   Hello world!   ');
// => 'Hello world!'
var trim = function(str) {
    var firstIdx;
    var lastIdx;
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            firstIdx = i;
            break;
        }
    }
    for (i = str.length - 1; i >= 0; i--) {
        if (str[i] !== ' ') {
            lastIdx = i;
            break;
        }
    }
    for (i = firstIdx; i <= lastIdx; i++) {
        result += str[i];
    }
    return result;
};



// Познакомиться с работой следующих встроенных свойств, функций и методов
// Math: abs, ceil, floor, max, min, pow, random, round, sqrt, trunc
// JSON: stringify, parse

// Привести примеры использования ниже
Math.abs(-7);
Math.ceil(77.2);
Math.floor(5.4);
Math.max(0, 3, 68, 45, -9);
Math.min(6, -3, 5, 1);
Math.pow(4, 2);
Math.random();
Math.round(3.1);
Math.sqrt(16);
Math.trunc(99.99);

var myObj = {
    name: 'Sally',
    age: 5,
    favoriteFood: 'Tofu'
}

JSON.stringify(myObj);

var myStr = '{"name":"Sally","age":5,"favoriteFood":"Tofu"}';
JSON.parse(myStr);