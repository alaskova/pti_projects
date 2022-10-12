// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы


// Создать объект со свойствами: x, getX, changeX. Где значение свойства "x" это число,
// а getX и changeX это методы которые манипулируют значением этого свойства "x".
// getX возвращает значение свойства "x", а changeX принимает в качестве аргумента число
// и результатом работы этого метода является присваивание этого числа свойству "x" объекта.
var obj = {
    x: 10,
    getX: function() {
        return this.x;
    },
    changeX: function(value) {
        this.x = value;
    }
};


// Создать функцию-конструктор Circle которая принимает 3 параметра:
// координаты центра окружности (x, y) и ее радиус (radius).
// Возвращает объект с собственными тремя свойствами (x, y, radius) и унаследованными тремя методами.
// 1. Метод getDiameter возвращает диаметр откружности. Формула расчета диаметра: diameter = 2 * radius
// 2. Метод getPerimeter возвращает длину откружности. Формула расчета длины окружности: perimeter = 3.14 * diameter
// 3. Метод getSquare возвращает площадь откружности. Формула расчета площади окружности: square = 3.14 * (radius в квадрате)
// Пример работы:
// var circle = new Circle(5, 5, 5);
// circle.getDiameter();
// => 10
// circle.getPerimeter();
// => 31.41592653589793
// circle.getSquare();
// => 78.53981633974483
var Circle = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
};

Circle.prototype.getDiameter = function() {
    return 2 * this.radius;
};

Circle.prototype.getPerimeter = function() {
    return 3.14 * this.getDiameter();
};

Circle.prototype.getSquare = function() {
    return 3.14 * (this.radius * this.radius);
};


// Создать класс Product который принимает 2-4 параметра в виде объекта:
// название, цена, скидка в % (необязательный) и кэшбэк в % (необязательный)
// Возвращает объект с двумя-четырмя собственными свойствами (title, price, discountRate, cashbackRate) и двумя унаследованными методами.
// 1. Метод getPriceWithDiscount возвращает цену с учетом скидки. Формула расчета цены с учетом скидки: цена с учетом скидки = price - price * discountRate / 100
// 2. Метод getCashbackAmount возвращает сумму кэшбэка. Формула расчета суммы кэшбэка: сумма кэшбэка = price * cashbackRate / 100
// Пример работы:
// var apple = new Product({title: 'Apple', price: 250, discountRate: 10, cashbackRate: 1});
// apple.getPriceWithDiscount();
// => 225
// apple.getCashbackAmount();
// => 2.25
// var pear = new Product({title: 'Pear', price: 650});
// pear.getPriceWithDiscount();
// => 650
// pear.getCashbackAmount();
// => 0
var Product = function({title, price, discountRate, cashbackRate}) {
    this.title = title;
    this.price = price;
    this.discountRate = discountRate;
    this.cashbackRate = cashbackRate;
};

Product.prototype.getPriceWithDiscount = function() {
    if (this.discountRate !== undefined) {
        return this.price - this.price * this.discountRate / 100;
    } else {
        return this.price;
    }
};

Product.prototype.getCashbackAmount = function() {
    if (this.cashbackRate !== undefined) {
        return this.getPriceWithDiscount() * this.cashbackRate / 100;
    } else {
        return 0;
    }
};


// Создать функции size, last, getPositiveNumbers, without, min, sum, как методы массивов
// Примеры работы:
// [7, 2, 8].size();
// => 3

// [5, 4, 3, 2, 1].last();
// => 1

// [10, -5, 100, -2, 1000].getPositiveNumbers();
// => [10, 100, 1000]

// [3, 6, 7, 'rere'].without(6);
// => [3, 7, 'rere']

// [10, 5, 100, 2, 1000].min();
// => 2

// [2, 2, 3].sum();
// => 7
Array.prototype.size = function() {
    return this.length;
};

Array.prototype.last = function() {
    return this[this.length - 1];
};

Array.prototype.getPositiveNumbers = function() {
    var i = 0;
    var result = [];
    while (i < this.length) {
        if (this[i] > 0) {
            result[result.length] = this[i];
        }
        i++;
    }
    return result;
};

Array.prototype.without = function(value) {
    var i = 0;
    var result = [];
    while (i < this.length) {
        if (value !== this[i]) {
            result[result.length] = this[i];
        }
        i++;
    }
    return result;
};

Array.prototype.min = function() {
    var i = 0;
    var result = this[0];
    while (i < this.length) {
        if (this[i] < result) {
            result = this[i];
        }
        i++;
    }
    return result;
};

Array.prototype.sum = function() {
    var i = 0;
    var sum = 0;
    while (i < this.length) {
        sum += this[i];
        i++;
    }
    return sum;
};


// Создать функции keys, values, pairs, extend, как методы объектов
Object.prototype.keys = function() {
    var prop;
    var result = [];
    for (prop in this) {
        if (this.hasOwnProperty(prop)) {
            result[result.length] = prop;
        }
    }
    return result;
};

Object.prototype.values = function() {
    var prop;
    var result = [];
    for (prop in this) {
        if (this.hasOwnProperty(prop)) {
            result[result.length] = this[prop];
        }
    }
    return result;
};

Object.prototype.pairs = function() {
    var prop;
    var result = [];
    for (prop in this) {
        if (this.hasOwnProperty(prop)) {
            result[result.length] = [prop, this[prop]];
        }
    }
    return result;
};

Object.prototype.extend = function(source) {
    var prop;
    for (prop in source) {
        if (source.hasOwnProperty(prop)) {
            this[prop] = source[prop];
        }
    }
    return this;
};


// Создать функцию charAt которая принимает строку и индекс и возвращает указанный символ из строки.
// Пример работы:
// charAt('March', 0);
// => 'M'
var charAt = function(str, index) {
    return str[index];
};


// Создать функцию join которая принимает массив и возвращает строку состоящую из его элементов разделенных запятой (по-умолчанию) или любым другим разделителем (строкой) указанным во втором аргументе вызываемой функции.
// Пример работы:
// join([1, 'lol', 5, 'dro']);
// => "1,lol,5,dro"
// join([1, 'lol', 5, 'dro'], '+');
// => "1+lol+5+dro"
var join = function(list, separator) {
    separator = separator === undefined ? ',' : separator;
    var i = 0;
    var result = '';
    while (i < list.length - 1) {
        result += list[i] + separator;
        i++;
    }
    return result + list[list.length - 1];
};


// Познакомиться с возможностями базовых (встроенных) классов
// Number
//     Number.prototype: toFixed
// String
//     String.prototype: charAt, concat, includes, indexOf, lastIndexOf, repeat, replace, slice, split,
//         substr, substring, toLowerCase, toUpperCase, trim
// Array
//     Array.prototype: concat, forEach, includes, indexOf, join, lastIndexOf, pop, push, reverse,
//         shift, slice, splice, unshift, length, sort, map, filter, every, some, reduce, reduceRight
// Object: keys, values, create, assign, entries
//     Object.prototype: hasOwnProperty
// Function
//     Function.prototype: apply, call, bind

// Привести примеры использования ниже

// Number
var num = 1.99;
num.toFixed();

// String
var str = 'London is the capital ';

str.charAt(1);
str.concat('of Great Britain');
str.includes('London');
str.indexOf('t');
str.lastIndexOf('t');
str.repeat(3);
str.replace('London', 'Liverpool');
str.slice(6, 9);
str.split('');
str.substr(14);
str.substring(0, 9);
str.toLowerCase();
str.toUpperCase();
str.trim();

// Array
var list = [1, 2, 3, 4, 3];

list.concat([4, 5, 6]);
list.forEach(function(elem, index) {
    console.log('element ' + elem + ' index ' + index)
});
list.includes(2);
list.indexOf(1);
list.join();
list.lastIndexOf(3);
list.pop();
list.push(4);
list.reverse();
list.shift();
list.slice(2, 4);
list.splice(1, 3, 55);
list.unshift(0, 11);
list.length;
list.sort();
list.map(function(elem) {
    return elem * 2
});
list.filter(function(elem) {
    return elem > 0
});
list.every(function(elem) {
    return elem === 0
});
list.some(function(elem) {
    return elem === 3
});
list.reduce(function(sum, elem) {
    return sum + elem
}, 0);
list.reduce(function(memo, n) {
    if (n % 2 === 0) {
        memo.push(n);
    }
    return memo;
}, []);
list.reduce(function(memo, n) {
    return n % 2 === 0 ? memo.concat(n) : memo;
}, []);
list.reduceRight(function(mult, elem) {
    return mult * elem
}, 0);

// Object
var obj2 = {
    name: 'Frodo',
    age: 25,
    hasRing: true
};

var obj3 = {
    name: 'abc'
};

Object.keys(obj2);
Object.values(obj2);
Object.create(Product.prototype);
Object.assign(obj2, obj3);
Object.entries(obj2);
obj2.hasOwnProperty('age');

// Function
var book = {
    year: 1984,
    name: 'Unknown'
};
var book2 = {
    year: 1984,
    name: 'Timmy'
};
var func = function(before, after) {
    before = before === undefined ? '' : before;
    after = after === undefined ? '' : after;
    console.log(before + 'Год ' + this.year + ' Автор ' + this.name + after);
};

func.apply(book, ['-> ', '!!']);
func.apply(book2);
func.call(book, '=> ', '??');

var newFunc = func.bind(book);


// Создать функцию reduce...
// Пример работы:
// reduce([1, 2, 3], function(memo, num) { return memo + num; }, 0);
// => 6
var reduce = function(list, iteratee, memo) {
    var i = 0;
    while (i < list.length) {
        memo = iteratee(memo, list[i]);
        i++;
    }
    return memo;
};


// Создать функцию uniq... Принимает массив значений и возвращает массив уникальных значений.
// Можно использовать любые изученные встроенные методы
// Пример работы:
// uniq([2, 6, 2, 5, 2]);
// => [2, 6, 5]
var uniq = function(list) {
    return list.reduce((memo, item) => {
        if (!memo.includes(item)) {
            memo[memo.length] = item;
        }
        return memo;
    }, []);
};


// Создать функцию count... Принимает массив значений и возвращает объект где ключи это уникальные значения, а значения это их количество.
// Пример работы:
// count(['apple', 'plum', 'apple', 'banana', 'pear', 'pear']);
// => {apple: 2, plum: 1, banana: 1, pear: 2}
var count = function(list) {
    return list.reduce((memo, item) => {
        if (memo[item] === undefined) {
            memo[item] = 1;
        } else {
            memo[item]++;
        }
        return memo;
    }, {});
};


// Написать функцию преобразования getSearchParams которая принимает строку вида '?a=1&b=2&c=3&d=4' и возвращает объект вида {a: '1', b: '2', c: '3', d: '4'}
// Можно использовать любые изученные встроенные методы
// Пример работы:
// getSearchParams('');
// => {}
// getSearchParams('?a=6&b=9');
// => {a: '6', b: '9'}
var getSearchParams = function(str) {
    return str.slice(1).split('&').reduce(function(memo, pair) {
        var pairItems = pair.split('=');
        memo[pairItems[0]] = pairItems[1];
        return memo;
    }, {});
};
