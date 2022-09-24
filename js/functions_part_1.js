// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы




// Создать функцию isUndefined которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если значение равно undefined иначе возвращает false.
// Пример работы:
// isUndefined(undefined);
// => true
// isUndefined(null);
// => false
// isUndefined('hello');
// => false
// isUndefined(5);
// => false
var isUndefined = function(value) {
    return value === undefined;
};



// Создать функцию isNull которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если значение равно null иначе возвращает false.
// Пример работы:
// isNull(null);
// => true
// isNull(undefined);
// => false
// isNull(5);
// => false
var isNull = function(value) {
    return value === null;
};



// Создать функцию isBoolean которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если принимаемое значение является значением логического типа данных. В противном случае вернет false.
// Пример работы:
// isBoolean(null);
// => false
// isBoolean(5);
// => false
// isBoolean(false);
// => true
// isBoolean(true);
// => true
var isBoolean = function(value) {
    return value === true || value === false;
};



// Создать функцию size которая принимает в качестве единственного входящего параметра массив и возвращает количество элементов в массиве.
// Пример работы:
// size([7, 2, 8]);
// => 3
// size([7, 2, 3, 5, 1]);
// => 5
var size = function(list) {
    return list.length;
};



// Создать функцию first которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает первое из них.
// Пример работы:
// first([5, 4, 3, 2, 1]);
// => 5
// first([9, 0, 4, 7, 2]);
// => 9
var first = function(list) {
    return list[0];
};



// Создать функцию last которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает последнее из них.
// Пример работы:
// last([5, 4, 3, 2, 1]);
// => 1
// last([8, 2, 1, 7, 3]);
// => 3
var last = function(list) {
    return list[list.length - 1]
};



// Создать функцию isEven которая возвращает true если число четное или false в противном случае.
// Пример работы:
// isEven(10);
// => true
// isEven(8);
// => true
// isEven(7);
// => false
var isEven = function(value) {
    return value % 2 === 0;
};



// Создать функцию indexOf которая вернёт позицию, на которой находится элемент value в массиве array, или -1, если данный элемент не был найден.
// Пример работы:
// indexOf([7, 2, 3], 2);
// => 1
// indexOf([7, 2, 3], 7);
// => 0
// indexOf([7, 2, 3], 5);
// => -1
var indexOf = function(list, value) {
    var index = 0;
    while (index < list.length) {
        if (list[index] === value) {
            return index;
        }
        index++;
    }
    return -1;
};


// Создать функцию lastIndexOf которая паринимает два параметра (массив, значение) и ищет значение в массиве и возвращет его индекс, но делает это не с начала массива, а с его конца.
// Т.е. возвращает позицию последнего вхождения значения в массиве значений. Иначе возвращает -1.
// Пример работы:
// lastIndexOf([1, 2, 3, 1, 2, 3], 2);
// => 4
// lastIndexOf([1, 2, 3, 1, 2, 3], 3);
// => 5
var lastIndexOf = function(list, value) {
    var index = list.length - 1;
    while (index >= 0) {
        if (list[index] === value) {
            return index;
        }
        index--;
    }
    return -1;
};



// Создать функцию push которая принимает массив и произвольное значение и возвращает копию массива + произвольное значение (которое находится в конце массива)
// Пример работы:
// push([1, 2, 3, 4], 5);
// => [1, 2, 3, 4, 5]
var push = function(list, value) {
    var index = 0;
    var newList = [];
    while (index < list.length) {
        newList[newList.length] = list[index];
        index++;
    }
    newList[newList.length] = value;
    return newList;
};



// Создать функцию unshift которая принимает массив и произвольное значение и возвращает копию массива + произвольное значение (которое находится в начале массива)
// Пример работы:
// unshift([1, 2, 3, 4], 5);
// => [5, 1, 2, 3, 4]
var unshift = function(list, value) {
    var index = 0;
    var newList = [];
    newList[newList.length] = value;
    while (index < list.length) {
        newList[newList.length] = list[index];
        index++;
    }
    return newList;
};



// Создать функцию pop которая принимает массив и возвращает копию массива без последнего значения.
// Пример работы:
// pop([1, 2, 3, 4]);
// => [1, 2, 3]
var pop = function(list) {
    var index = 0;
    var newList = [];
    while (index < list.length - 1) {
        newList[newList.length] = list[index];
        index++;
    }
    return newList;
};



// Создать функцию shift которая принимает массив и возвращает копию массива без первого значения.
// Пример работы:
// shift([1, 2, 3, 4]);
// => [2, 3, 4]
var shift = function(list) {
    var index = 1;
    var newList = [];
    while (index < list.length) {
        newList[newList.length] = list[index];
        index++;
    }
    return newList;
};



// Создать функцию getPositiveNumbers которая принимает массив чисел и возвращает массив положительных чисел найденных в исходном массиве.
// Пример работы:
// getPositiveNumbers([10, -5, 100, -2, 1000]);
// => [10, 100, 1000]
var getPositiveNumbers = function(list) {
    var index = 0;
    var newList = [];
    while (index < list.length) {
        if (list[index] > 0) {
            newList[newList.length] = list[index];
        }
        index++;
    }
    return newList;
};



// Создать функцию reverse которая принимает массив и возвращает копию входящего массива с элементами в обратном порядке.
// Пример работы:
// reverse([1, 'lol', 5, {}, []]);
// => [[], {}, 5, "lol", 1]
var reverse = function(list) {
    var index = list.length - 1;
    var newList = [];
    while (index >= 0) {
        newList[newList.length] = list[index];
        index--;
    }
    return newList;
};



// Создать функцию compact которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает копию массива без undefined значений.
// Пример работы:
// compact([10, 1, 4, 2, undefined, 3, null]);
// => [10, 1, 4, 2, 3, null]
var compact = function(list) {
    var index = 0;
    var newList = [];
    while (index < list.length) {
        if (list[index] !== undefined) {
            newList[newList.length] = list[index];
        }
        index++;
    }
    return newList;
};



// Создать функцию contains которая принимает два входящих параметра (массив значений простых типов данных и значение простого типа данных).
// Функция вернет true если в массиве содержится определенное значение. Иначе функция вернет false.
// Пример работы:
// contains([1, 2, 3], 3);
// => true
var contains = function(list, value) {
    var index = 0;
    while (index < list.length) {
        if (list[index] === value) {
            return true;
        }
        index++;
    }
    return false;
};



// Создать функцию without которая возвращает копию массива, в которой удалены все значения второго аргумента указанного при вызове функции.
// Пример работы:
// without([3, 6, 7, 'rere'], 6);
// => [3, 7, 'rere']
var without = function(list, value) {
    var index = 0;
    var newList = [];
    while (index < list.length) {
        if (list[index] !== value) {
            newList[newList.length] = list[index];
        }
        index++;
    }
    return newList;
};



// Создать функцию concat которая принимает два массива и возвращает новый массив состоящий из значений первого и второго.
// Пример работы:
// concat(['a', 'b', 'c'], ['d', 'e', 'f']);
// => [ "a", "b", "c", "d", "e", "f" ]
var concat = function(list1, list2) {
    var newList = [];
    var index = 0;
    while (index < list1.length) {
        newList[newList.length] = list1[index];
        index++;
    }
    index = 0;
    while (index < list2.length) {
        newList[newList.length] = list2[index];
        index++;
    }
    return newList;
};

var concat2 = function(list1, list2) {
    var newList = [];
    var i;
    for (i = 0; i < list1.length; i++) {
        newList[newList.length] = list1[i];
    }
    for (i = 0; i < list2.length; i++) {
        newList[newList.length] = list2[i];
    }
    return newList;
};



// Создать функцию slice которая принимает 3 параметра. Массив и два числа (begin и end). Возвращает копию части исходного массива. Начиная с индекса begin и заканчивая индексом end включительно (или концом массива если параметр end отстутствует).
// Пример работы:
// slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 3);
// => ['camel', 'duck']
var slice = function(list, begin, end) {
    var index = begin;
    var newList = [];
    end = (end === undefined) ? list.length - 1 : end;
    while (index <= end) {
        newList[newList.length] = list[index];
        index++;
    }
    return newList;
};



// Создать функцию getMatrixSum которая принимает матрицу чисел и возвращает сумму всех чисел.
// Пример работы:
// getMatrixSum([[1, 2], [0, 4], [1, 2]]);
// => 10
var getMatrixSum = function(list) {
    var i = 0;
    var j;
    var sum = 0;
    while (i < list.length) {
        j = 0;
        while (j < list[i].length) {
            sum += list[i][j];
            j++;
        }
        i++;
    }
    return sum;
};



// Создать функцию getMatrixSumByDiagonal которая принимает квадратную матрицу чисел и возвращает сумму чисел по диагонали (слева направо, сверху вниз).
// Пример работы:
// var matrix = [
//      [1, 2, 3],
//      [3, 0, 4],
//      [0, 1, 2]
// ];
// getMatrixSumByDiagonal(matrix);
// => 3 (1 + 0 + 2)
var getMatrixSumByDiagonal = function(matrix) {
    var i = 0;
    var sum = 0;
    while (i < matrix.length) {
        sum += matrix[i][i];
        i++;
    }
    return sum;
};



// Создать функцию min которая принимает в качестве единственного входящего параметра массив чисел и возвращает наименьшее из них.
// Пример работы:
// min([10, 5, 100, 2, 1000]);
// => 2
var min = function(list) {
    var i = 1;
    var min = list[0];
    while (i < list.length) {
        if (list[i] < min) {
            min = list[i];
        }
        i++;
    }
    return min;
};



// Создать функцию max которая принимает в качестве единственного входящего параметра массив чисел и возвращает наибольшее из них.
// Пример работы:
// max([10, 5, 100, 2, 1000]);
// => 1000
var max = function(list) {
    var index = 1;
    var max = list[0];
    while (index < list.length) {
        if (list[index] > max) {
            max = list[index];
        }
        index++;
    }
    return max;
};



// Создать функцию repeat которая принимает строку и число count и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки.
// Пример работы:
// repeat('Work', 6);
// => 'WorkWorkWorkWorkWorkWork'
var repeat = function(string, count) {
    var index = 0;
    var newString = '';
    while (index < count) {
        newString += string;
        index++;
    }
    return newString;
};



// Создать функцию sum которая принимает массив чисел и возвращает их сумму.
// Пример работы:
// sum([2, 2, 3]);
// => 7
var sum = function(list) {
    var index = 0;
    var sum = 0;
    while (index < list.length) {
        sum += list[index];
        index++;
    }
    return sum;
};



// Создать функцию multiply которая принимает массив чисел и возвращает их произведение.
// Пример работы:
// multiply([2, 2, 3]);
// => 12
var multiply = function(list) {
    var index = 0;
    var multiply = 1;
    while (index < list.length) {
        multiply *= list[index];
        index++;
    }
    return multiply;
};



// Создать функцию abs которая принимает число и возвращает его модуль (абсолютная величина, неотрицательное число).
// Пример работы:
// abs(-4);
// => 4
var abs = function(value) {
    return value < 0 ? -value : value;
};



// Создать функцию pow которая принимает два числа и возводит первое число в степень (представленную вторым числом).
// Пример работы:
// pow(2, 2);
// => 4
// pow(3, 3);
// => 27
var pow = function(value, exp) {
    var i = 0;
    var result = 1;
    while (i < exp) {
        result *= value;
        i++;
    }
    return result;
};



// Создать такие структуры данных чтобы выражение
// dro[1]().bro вернуло в качестве результата значение true,
// выражение a[4][1][1].y вернуло строку 'Север',
// выражение b.y().y.z()[3].author вернуло строку 'Дима'.
var dro = [
    0,
    function() {
        return {
            bro: true
        };
    }
];

var a = [0, 1, 2, 3, [0, [0, {y: 'Север'}]]];

var b = {
    y: function() {
        return {
            y: {
                z: function() {
                    return [0, 1, 2, {author: 'Дима'}];
                }
            }
        };
    }
};

// TODO: чтобы выражение $()()[$()().hu][2] возвращало 999
var $ = function() {
    return function() {
        return {
            hu: 'one',
            one: [0, 1, 999]
        };
    };
};