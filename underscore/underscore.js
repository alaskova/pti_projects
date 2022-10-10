// Написать примеры использование функций из cheatsheets/cheat_sheet_underscore.txt

//Collections
_.each([5, 7, 4, 2], function(el) {
    console.log(el + 2);
});

_.map({name: 'apple', number: 10}, function(value) {
    return value;
});

_.reduce([0, 55, -3, 12], function(memo, value) {
    memo[value] = value;
    return memo;
}, {});

_.reduceRight([5, 3, 2], function(memo, value) {
    memo.push(value);
    return memo;
}, []);

_.find([0, 6, 5, 2, 1], function(el) {
    return el > 2;
});

_.filter([1, 8, 4, 3, 7, 5, 2], function(el) {
    return el % 2 !== 0;
});

_.where(
    [
        {id: 32322, name: 'car'},
        {id: 12123, name: 'bike'},
        {id: 88944, name: 'bike'}
    ],
    {name: 'bike'}
);

_.findWhere(
    [
        {id: 32322, name: 'car'},
        {id: 12123, name: 'bike'}
    ],
    {name: 'bike'}
);

_.reject([9, 4, 3, 2], function(el) {
    return el % 2 === 0;
});

_.every([0, -1, 3, 5, -6], function(el) {
    return el > 0;
});

_.some([0, -1, 3, 5, -6], function(el) {
    return el > 0;
});

_.contains([77, 90, 32], 77);

_.pluck(
    [
        {student: 'John', age: 20},
        {student: 'Diana', age: 19},
        {student: 'Alla', age: 21},
        {student: 'Jack', age: 23}
    ], 'age'
);

_.min([54, 3, 1, 9, 67]);

_.max([54, 3, 1, 9, 67]);

_.sortBy(
    [
        {student: 'John', age: 20},
        {student: 'Diana', age: 19},
        {student: 'Alla', age: 21},
        {student: 'Jack', age: 23}
    ], 'age'
);

_.shuffle([5, 3, 2, 6, 9]);

_.sample([5, 3, 2, 6, 9], 2);

_.toArray({0: 54, 1: 23, 2: 65});

_.size([3, 2, 1]);

_.partition([5, 3, -1, 7, 2, 0], function(el) {
    return el > 0;
});

//Arrays
_.first([9, 4, 3, 2], 2);

_.last([9, 4, 3, 2], 3);

_.rest([77, 90, 32, 3, 9], 2);

_.compact([0, 5, false, null, 9, undefined, '']);

_.flatten([5, [6], [4, [44]]]);

_.without([9, 5, 3, 1, 9, 3], 9, 3);

_.union([99, 0, 3], [8, 3, 99]);

_.intersection([6, 1, 8], [8, 0, 1], [7, 8, 6, 1]);

_.difference([9, 4, 3, 2], [2, 3]);

_.uniq([77, 90, 32, 3, 9, 3, 90]);

_.indexOf([1, 5, 0], 0);

_.lastIndexOf([1, 5, 0], 0);

_.findIndex([1, 5, 0], function(el) {
    return el === 5;
});

_.findLastIndex([54, 3, 65, 56], function(el) {
    return el > 50;
});

//Functions
//Bind
var obj = {
    student: 'John',
    age: 19,
    hasBooks: true
};

var func = function() {
    console.log(this.student, this.age, this.hasBooks);
};

_.bind(func, obj)();

//Throttle
var throttled = _.throttle(function() {
    console.log('функция вызвана')
}, 300);

window.addEventListener('resize', throttled);

//Once
var createList = function() {
    return [3, 2, 6];
};

var createListOnce = _.once(createList);
createListOnce();

//Compose
var f1 = function(n) {
    return n + 1;
};
var f2 = function(n) {
    return n * 4;
};
var f3 = function(n) {
    return n - 5;
};
var comp = _.compose(f1, f2, f3);
comp(40);

//Objects
_.keys({
    id: 32322,
    name: 'bike',
    year: 2017
});

_.values({
    id: 32322,
    name: 'bike',
    year: 2017
});

_.pairs({
    id: 32322,
    name: 'bike',
    year: 2017
});

_.invert({
    id: 32322,
    name: 'bike',
    year: 2017
});

_.create(obj, {student: 'Alla', age: 22});

_.extend({year: 2021, name: 'Mazda'}, {name: 'Nissan'});

_.pick({year: 2021, name: 'Mazda'}, 'name');

_.omit({year: 2021, name: 'Mazda'}, 'name');

_.defaults(obj, {age: 55, newStudent: false});

_.has({
    name: "John",
    isFree: true,
    university: "Harvard"
}, 'university');

//isEqual
var cat = {
    paws: "fluffy",
    sound: "meow",
    isMainInThisHouse: true,
    age: 5
};

var cat2 = {
    paws: "fluffy",
    sound: "meow",
    isMainInThisHouse: true,
    age: 5
};

_.isEqual(cat, cat2);

//isMatch
var film = {
    name: "Interstellar",
    year: 2014,
    duration: 169,
    isThriller: false
};

_.isMatch(film, {name: "Interstellar"});

_.isEmpty({});

_.isArray('string');

_.isObject(cat);

_.isFunction(func);

_.isString(948484);

_.isNumber('45');

_.isBoolean('true');

_.isNull(null);

_.isUndefined();

//Utils
var underscore = _.noConflict();

_.noop();

_.random(150, 250);

_.uniqueId('уникальный номер_');

var book = {
    name: "Hobbit",
    func: function() {
        return 'false';
    }
};

_.result(book, 'name');
_.result(book, 'func');

_.now();
