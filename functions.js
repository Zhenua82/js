'use strict';
// Обычные функции:
function qvadro (number) {
    return number * number;
}
console.log(qvadro(5));
// Анонимные функции:
const anonimFunc = function(number){
    return number * number;
};
console.log(anonimFunc(6));
// Стрелочные функции:
const strelFunc = number => number * number;
console.log(strelFunc(7))

const toPower = (number, power) => number ** power;
console.log(toPower(2,3));

// Задача:
// Пользователь:
// 	- Возраст
// 	- Наличие работы
// 	- Деньги
// 	Нужно проверить может ли он купить новый MacBook за 2000$?
// 	Он может брать не только свои деньги, но и взять кредит.
// 	Ему дадут 500$, только если ему больше 24-х лет и он
// 	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
// 	ином случае.
// 	Напишите функцию, которая принимает данные пользователя
// 	и товара и возвращает true или false;

let allMoney = 0;

function calculation1 (age, job, money, priceMacBook){
    if (age > 24 && job) {
        allMoney = money + 500
    }
    else if (age > 24){
        allMoney = money + 100
    }
    else {allMoney = money};
    return allMoney >= priceMacBook;
}
console.log(calculation1(25, false, 1900, 2000))
// 2-ой вариант:
function calculationAllMoney(age, job, money){
    if (age > 24 && job) {
        return allMoney = money + 500
    }
    else if (age > 24){
        return allMoney = money + 100
    }
    return allMoney = money;
}
function calculation2 (age, job, money, priceMacBook){
    return calculationAllMoney(age, job, money) >= priceMacBook;
}
console.log(calculation2(25, true, 1500, 2000))

// Функции высшего порядка (callback):
function calculat (a, b, fn){
    console.log(fn.name);
    const result = fn(a, b);
    return result;
}

function add(a, b){
    return (a + b);
}
function substract(a, b){
    return (a - b);
}

console.log(calculat(3, 5, add))
console.log(calculat(3, 5, substract))

// Функции высшего порядка (возврат функции):
function power(pow){
    return function(numb){
        return numb ** pow;
    }
}

const powerTwo = power(2);
console.log(powerTwo(3));
console.log(power(2)(3));

const powerThree = power(3);
console.log(powerThree(2));
console.log(power(3)(2));

// Возврат функции в виде стрелочной функции:
const stepen = step => num => num ** step;
console.log(stepen(2)(3));

// Функции в объектах (методы):
const user = {
    userName: 'Sonja',
    userSurname: 'Petrova',
    age: 20,
    getInfo: function(){
        return `${this.userName} ${this.userSurname}`
    },
    getInfo2: () => {
        return [this.userName, this.userSurname]
    },
    getFullInfo() {
        function mayDrink(){// не работает т.к. здесь this - undefined 
        //(функция mayDrink не принадлежит непосредственно объекту user)
            this.age > 18 ? console.log('yes') : console.log('no')
        }
        mayDrink()
        return `${this.userName} ${this.userSurname}`
    },
    getFullInfo2() {
        let answer
        const mayDrink = () =>{
            answer = (this.age >= 18 ? 'yes' : 'no')
        }
        mayDrink()
        return `${this.userName} ${this.userSurname} ${answer}`
    },
}
console.log(user.getInfo());
console.log(user.getInfo2());
// console.log(user.getFullInfo());// Не сработает, т.к. здесь this - undefined
console.log(user.getFullInfo2());

//Инкапсуляция IIFO:
(function() {
    console.log('Start init');
    const a = 6;
})();
// console.log(a);

