let a = 'Hello world!';
let b = 3;
console.log(typeof a);
console.log(typeof b);
let t;
console.log(typeof t);
let g = null;
console.log(typeof g);

/*
Задача:
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/
let dni = 40 / 5;
console.log(dni + 2 <= 11);
console.log(40 * 80 + '$');
// Шаблонные строки:
const price = 3000;
const author = "Иван Пупкин";
console.log(author + ' заказал проект по цене: \n' + price + '$');
console.log(`${author} заказал проект по цене: 
${price}$`);
// Конвертация:
const age = '18';
console.log(Number(age) + 5);
console.log(age * 3);
const userName = 'Вася';
console.log(Number(userName) + 5);
console.log(typeof NaN);
console.log(String(4) + 5);
console.log(Boolean('') + 10);
console.log(true + 5);
// задача:
const z = 2 + '10';
console.log(z - 10);
// Конвертация в false:
console.log(Boolean(0));
console.log(Boolean(''));
let c;
console.log(Boolean(c));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(Number('dfgdf')));
console.log(Boolean(NaN));
// Крнструкция if else:
if (Boolean(Number(a))) {
    console.log('Условие выполнено')
} else if (a > 5) {
    console.log('Второе условие выполнено')
} else {
    console.log('Условие не выполнено')
}
console.log('Продолжение программы')
const q = prompt ('Введите число')
if (Number(q) === 7){
    console.log('Угадал')
} else {console.log('не угадал')};

const role = prompt ('Введите должность');
switch(role){
    case 'manager': // role === 'manager'
    case 'admin':
        console.log('Вы не руководитель!')
        break
    case 'director':
        console.log('Вы руководитель!')
        break
    case '':
    case null:
        console.log('Ты ничего не ввел!')
        break
    default:
        console.log('Таких у нас нет!')
};
console.log(role);
console.log(q);
// Тернарные операторы:
const bmwX7 = 100000;
const fordFocus = 70000;
const budget = 50000;

if (budget > bmwX7) {
    console.log('Я куплю БМВ')
} else if (budget > fordFocus) {
    console.log('Я куплю Форд')
} else {
    console.log('Я куплю велосипед')
};
let message = budget > bmwX7 ? 'БМВ' : budget > fordFocus ? 'Форд' : 'Велосипед';
console.log(`Я куплю ${message}`);
console.log(`Я куплю ${budget > bmwX7 ? 'БМВ' : budget > fordFocus ? 'Форд' : 'Велосипед'}`);

// Задача:
// Методом prompt получите ответ пользователя
// 	на вопрос "Сколько будет 7 + или - 15?". Если ответ верен
// 	выведите в консоле "Успех", если нет - "Вы робот!",
// 	а если он введёт "Я не робот", то тоже "Успех".
const cifra = prompt('Сколько будет 7+ или -15?');
switch(cifra){
    case '22':
    case '-8':
    case 'Я не робот':
        console.log('Успех')
        break
    default:
        console.log('Вы робот!')
};