// ВНИМАНИЕ! Соблюдайте форматирование кода (отступы, переносы)

// 1. Создать 10 литералов представлюящих числа (5 целых и 5 дробных)
2017;
10;
7;
45800;
700;
1.5;
1012.35;
12500.50;
15.7;
77.77;



// 2. Создать 10 строковых литералов
"Hello World";
"Imagine Dragons";
"London is the capital of Great Britain";
"Smooth Criminal";
"Avada Kedavra";



// 3. Создать 10 объектов представляющих объекты реального мира. В каждом объекте должно быть не меньше 4 свойств.
var book = {
    name: "Hobbit",
    year: 1937,
    author: "John Ronald Reuel Tolkien",
    isFilmed: true
};

var house = {
    material: "wood",
    windows: 8,
    square: 60,
    isOld: false
};

var cat = {
    paws: "fluffy",
    sound: "meow",
    isMainInThisHouse: true,
    age: 5
};

var phone = {
    brand: "iPhone",
    year: 2019,
    memory: 256,
    color: "dark green"
};

var film = {
    name: "Interstellar",
    year: 2014,
    duration: 169,
    isThriller: false
};

var car = {
    brand: "Jaguar",
    price: 195000,
    year: 2017,
    color: "red"
};

var html = {
    isProgrammingLanguage: false,
    year: 1993,
    version: "HTML5",
    developer: "W3C"
};

var notebook = {
    isRetina: true,
    brand: "Dell",
    year: 2021,
    screenSize: 15.6
};

var city = {
    name: "Chernihiv",
    founded: 907,
    isBeautiful: true,
    population: 280070
};

var tree = {
    kind: "peach",
    height: 2.5,
    isSweet: true,
    years: 3
};

// 4. Создать 10 массивов представляющих массивы некоторых значений из реальной жизни. В каждом массиве должно быть не меньше 4 элементов.
var films = ["Terminator", "Titanic", "Lord of The Rings", "Interstellar"];
var materials = ["gold", "metal", "silver", "wood"];
var years = [1990, 2007, 2017, 907];
var fruits = ["apples", "peaches", "strawberry", "apricots"];
var book1984 = [true, "George Orwell", 1949, "english"]; // whoa!
var Mazda6 = [4800, 2004, "Kyiv", 267000]; // whoa!
var cities = ["Kyiv", "Chernihiv", "Odessa", "Kharkiv"];
var phones = ["Nokia", "iPhone", "Xiaomi", "Samsung"];
var seasons = ["summer", "spring", "autumn", "winter"];
var coffee = ["Ferarra Caffe", 415, "Arabica", false]; // whoa!



// 5. Объявить 5 переменных с произвольным именем.
var theBestBook;
var loggedInUser;
var numberOfCustomers;
var phoneNumber;
var email;



// 6. Объявить еще 5 переменных и в момент объявления присвоить им значения произвольных типов данных.
var sea = "Carribean";
var country = "Greece";
var salary = 3000;
var isLoggedIn = false;
var dog = {name: "Coper", years: 3};


// 7. Создать массив из элементов, значения которых представлены всеми изученными типами данных в JavaScript.
var dataTypes = [10384, "string", true, null, undefined, [54.2, 954.2], {name: "Mallorca", population: 923608}];



// 8. Создать объект из 5 свойств. Три свойства должны иметь значения простых типов данных. Два остальных свойства должны иметь значения составного (объектного) типа данных.
var vacation = {
    cost: 2300,
    country: "Greece",
    hasTransfer: true,
    pet: {
        name: "Bobik",
        age: 3
    },
    hotels: ["Aegean hotel", "Rixos"]
};



// 9. Написать выражения использующие все изученные арифметические операторы
100 - 50;
-5;
1.5 + 6.7;
10 / 2;
5 * 5;
15 % 2;
2 + "2";



// 10. Написать выражения использующие все изученные операторы сравнения
2 < 1;
10 > 5;
7 <= 7;
15 >= 16;
"foo" === "foo";
2003 !== 2004;



// 11. Написать выражения использующие все изученные логические операторы
7 > 6 && 1 < 2;
55 < 10 || 34 > 10;
!117;



// 12. Написать выражение использующее тернарный условный оператор
catsNumber >= 2 ? "You are a cat lover" : "Get a cat!";



// 13. Написать выражения использующие все изученные операторы присваивания
a = 10;
b += 2;
c -= 15;
d *= 33;
e /= 2;
f %= 4;



// 14. Создать массив из 10 элементов (чисел) и написать выражения возвращающие значение первого, третьего, пятого и восьмого элемента
var numbers = [1, 23, 3, 77, 111, 0.5, 27, 8, 65, 9644];
numbers[0];
numbers[2];
numbers[4];
numbers[7];


// 15. Создать массив и написать 3 выражения меняющие значения его элементов
var cars = ["Audi", "Kia", "BMW", "Mercedez", "Volksvagen"];
cars[4] = "Toyota";
cars[3] = "Honda";
cars[2] = "Hyundai";



// 16. Создать объект из 5 свойств и написать 3 выражения возвращающие значения произвольных свойств
var bag = {
    color: "black",
    price: 150,
    pockets: true,
    style: "sport",
    size: 45
};
bag.style;
bag['color'];
bag.pockets;


// 17. Создать объект и написать 3 выражения меняющие значения его свойств
var student = {
    course: "js",
    duration: 4,
    name: "John",
    isFree: true,
    university: "Harvard"
};
student.course = "html";
student.duration = 1;
student.isFree = false;
student.university = "Yale";