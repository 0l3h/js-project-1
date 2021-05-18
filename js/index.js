// **********************Переменные*********************

// Умножение чисел
const a = 2;
const b = 3;
console.log(a * b);

// Деление чисел
const c = 4;
const d = 5;
console.log(c / d);

// Сумма чисел
const e = 4;
const f = 5;
console.log(e + f);

// Значения переменных
const numberValue = 11;
const booleanValue = true;
const stringTextValue = "java script";
const stringNumberValue = "100";
console.log(numberValue, booleanValue, stringTextValue, stringNumberValue);

// Операции присваивания
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num += 1;
num -= 1;

// ********************prompt()*************************

// Квадрат чисел
const userNumber = Number(prompt("Введите число"));
alert("Ваше число в квадрате: " + userNumber**2);

// Среднее арифметическое
const userNumberFirst = Number(prompt("Введите первое число"));
const userNumberSecond = Number(prompt("Введите второе число"));
alert("Среднее арифметическое: " + (userNumberFirst + userNumberSecond) / 2);

// Минуты в секунды
const numberOfMinutes = Number(prompt("Введите количество минут"));
alert("Кол-во минут в секундах: " + numberOfMinutes*60);

// Приветствие
const userName = String(prompt("Введите ваше имя"));
const greeting = "Hello, " + userName + "!";
alert(greeting);

// ******************Условные операторы*******************

const userNumber2 = Number(prompt("Введите число"));
if(userNumber2 === 10) {
    alert("Верно");
}
else {
    alert("Неверно");
}

const test = true;
if(test === true) {
    alert("Верно");
}
else {
    alert("Неверно");
}

if(test !== true) {
    alert("Верно");
}
else {
    alert("Неверно");
}

// Скидка на товар
let purchasePrice = Number(prompt("Цена товара"));
if(800 >= purchasePrice && purchasePrice > 500) {
    purchasePrice -= purchasePrice * 0.03;
    alert("Стоимость покупки с учетом скидки " + purchasePrice);
}
if (purchasePrice > 800) {
    purchasePrice -= purchasePrice * 0.05;
    alert("Стоимость покупки с учетом скидки " + purchasePrice); 
}
else {
    alert("Скидка не учитывается");
}
console.groupEnd();

// *************************Циклы************************

console.group("Числа от 25 до 0");
// Цикл for
for (let number = 25; number >= 0; number--){
    console.log(number);
}

// Цикл while
let number = 25;
while(number >= 0) {
    console.log(number);
    number--;
}

// Цикл do-while
number = 25;
do {
    console.log(number);
    number--;    
} while(number >= 0);
console.groupEnd();

console.group("Числа от 10 до 50 кратные 5");
// Цикл for
for (number = 10; number <= 50; number += 5) {
    console.log(number);
}

// Цикл while
number = 10;
while(number <= 50) {
    console.log(number);
    number += 5;
}

// Цикл do-while
number = 10;
do {
    console.log(number);
    number += 5;
} while(number <= 50);
console.groupEnd();

console.group("Сумма чисел от 1 до 100");

// Цикл for
number = 0;
for (let i = 0; i <= 100; i++){
    number += i; 
}
console.log(number);

// Цикл while
number = 0;
let i = 0;
while(i <= 100) {
    number += i;
    i++;
}
console.log(number);

// Цикл do-while
number = 0;
i = 0;
do {
    number += i;
    i++;
} while(i <= 100);
console.log(number);
console.groupEnd();

// Цикл for
let userResult = Number(prompt("Решите пример 2 + 2 * 2:"));
for (;userResult !== 6;) {
    alert("Попробуйте снова");
    userResult = Number(prompt("Решите пример 2 + 2 * 2:"));
}
alert("Верно");

// Цикл while
userResult = Number(prompt("Решите пример 2 + 2 * 2:"));
while(userResult !== 6) {
    alert("Попробуйте снова");
    userResult = Number(prompt("Решите пример 2 + 2 * 2:"));
}
alert("Верно");

// Цикл do-while
userResult = Number(prompt("Решите пример 2 + 2 * 2:"));
do {
    alert("Попробуйте снова");
    userResult = Number(prompt("Решите пример 2 + 2 * 2:"));
} while (userResult !== 6);
alert("Верно");