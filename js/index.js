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
let userNumber = prompt("Введите число");
alert("Ваше число в квадрате: " + userNumber**2);

// Среднее арифметическое
let userNumber_1 = prompt("Введите первое число");
let userNumber_2 = prompt("Введите второе число");
let averageMeanNumber = userNumber_1 / 2 + userNumber_2 / 2;
alert("Среднее арифметическое: " + averageMeanNumber);

// Минуты в секунды
userNumber = prompt("Введите количество минут");
alert("Кол-во минут в секундах: " + userNumber*60);

// Приветствие
let greeting = "Hello, ";
const userName = prompt("Введите ваше имя");
greeting += userName + "!";
alert(greeting);

// ******************Условные операторы*******************

userNumber = prompt("Введите число");
if(userNumber === 10) {
    alert("Верно");
}
else {
    alert("Неверно");
}

let test = true;
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
let purchasePrice = prompt("Цена товара");
if(800 > purchasePrice && purchasePrice > 500) {
    purchasePrice -= purchasePrice * 0.03;
    alert("Стоимость покупки с учетом скидки " + purchasePrice)
}
if (purchasePrice > 800) {
    purchasePrice -= purchasePrice * 0.05;
    alert("Стоимость покупки с учетом скидки " + purchasePrice) 
}
console.groupEnd();

// *************************Циклы************************

console.group("Числа от 25 до 0");
let number = 25;
for (; number >= 0; number--){
    console.log(number);
}

number = 25;
while(number >= 0) {
    console.log(number);
    number--;
}

number = 25;
do {
    console.log(number);
    number--;    
} while(number >= 0)
console.groupEnd();

console.group("Числа от 10 до 50 кратные 5");
number = 10;
for (; number <= 50; number++){
    if(number % 5 === 0) {
        console.log(number);
    }
}

number = 10;
while(number <= 50) {
    if(number % 5 == 0) {
        console.log(number);
    }
    number++;
}

number = 10;
do {
    if(number % 5 == 0) {
        console.log(number);
    }
    number++;
} while(number <= 50)
console.groupEnd();

console.group("Сумма чисел от 1 до 100");
number = 0;
let i = 0;
for (; i <= 100; i++){
    number = number + i; 
}
console.log(number);

number = 0;
i = 0;
while(i <= 100) {
    number = number + i;
    i++;
}
console.log(number);

number = 0;
i = 0;
do {
    number = number + i;
    i++;
} while(i <= 100)
console.log(number);
console.groupEnd();

let userResult = prompt("Решите пример 2 + 2 * 2:");
while(userResult != 6) {
    alert("Попробуйте снова");
    userResult = prompt("Решите пример 2 + 2 * 2:");
}