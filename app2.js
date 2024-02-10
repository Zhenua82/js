// Задача:
// Пользователь хочет приобрести игру в магазине
// 	Он может это сделать отлько если:
// 	- Eго баланс больше 1000 (balance) 
// 	или число бонусов больше 100 (bonusBalance)
// 	- Он не забанен (isBanned)
// 	- Игра не кулена (isExist)
// 	- Игра в продаже (isSelling)
// 	Напишите условие для покупки и выведите в консоль результат
let balance = 100;
let bonusBalance = 110;
let isBanned = false;
let isExist = false;
let isSelling = true;
console.log(`Игра куплена - ${(balance > 1000 || bonusBalance > 100) 
    && !isBanned 
    && !isExist 
    && isSelling ? 'да' : 'нет'}`);

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