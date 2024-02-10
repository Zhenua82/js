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

//Метод entries - для вывода индекса элементов массива и самих элементов:
const massiv = [1, 4, 6, 3];
for (const [i, el] of massiv.entries()){
    console.log(`Раунд ${i + 1}: ${el} (количество очков)`);
}

// Метод forEach для вывода элементов массива:
massiv.forEach(function (el){
    console.log(`Раунд: ${el} (количество очков)`);
})
massiv.forEach(el => {
    console.log(`аунд: ${el} (количество очков)`);
})
const iterat = el => {
    console.log(`РРаунд: ${el} (количество очков)`);
}
massiv.forEach(iterat);

// Метод forEach для вывода элементов массива и их индекса:
massiv.forEach((el, i) => {
    console.log(`Раунд ${i + 1}: ${el} (количество очков)`);
})
const iteratt = (el, i, arr) => {
    console.log(`РРаунд ${i + 1}: ${el} (количество очков)`);
    console.log(arr);
}
massiv.forEach(iteratt);

// Метод map:
const neww = massiv.map((elem, i) => {
    return `${elem * 60} - ${i+1}`;
})
console.log(neww);
// или:
const ne = massiv
    .map((elem, i) => `${elem * 60} - ${i+1}`);
console.log(ne);

// Фильтрация в массивах (filter):
console.log(massiv)
const upThree = massiv.filter((element, i) => {
    return element > 3 && i < 2;
})
console.log(upThree)

// Фильтрация и преобразование в массивах (filter и map):
console.log(massiv)
const upThreePower = massiv
.filter(element => {
    return element > 3;
})
.map(element => element**2)
console.log(upThreePower)

// Задача:
// Имеется массив изменения цен prices, где внутри
// 	1й элемент массива является ценой в момент X,
// 	2й - ценой в момент Y.
// 	Нужно преобразовать данные в массив, где будут отображены
// 	только положительные изменения цен: [100, 150]

const prices = [[100, 200], [120, 100], [200, 350]];

const newMassiv = prices.filter(element => element[0] < element[1])
.map(element => element[1] - element[0]);
console.log(newMassiv);

// Метод reduce:
console.log(massiv);
const finalBalance = massiv.reduce((prev, elem, i) => {
    console.log(`Цикл ${i}: ${prev}`);
    return prev += elem;
})
console.log(finalBalance);

const minim = massiv.reduce((prev, elem) =>{
    if (elem < prev) {
        return prev = elem
    } else {return prev}
})
console.log(minim);

// Задача:
// Найти среднее значение последовательности
// 	чисел с помощью reduce
const arr = [2, 4, 4, 10, 20];
const mediumm = arr.reduce((prev, elem, i) =>{
    prev += elem;
    if((i+1) != arr.length){
        return prev
    } else {return prev/(i+1)}
})
console.log(mediumm);

// Методы find и findIndex:
const numb = arr.find(el => el > 2);
console.log(numb);
const ind = arr.findIndex(el => el < 1);
console.log(ind);

// Задача:
// Написать функцию, которые возващает true,
// 	если элемент есть, и false, если нет.

const fi = arr.findIndex(el => el === 20)
fi === -1 ? console.log(false) : console.log(true);

const fii = arr.find(el => el === 20)
fii === undefined ? console.log(false) : console.log(true);

function some(arrr, nummb){
    arrr.findIndex(el => el === nummb) === -1 ? a = false : a = true;
    return a
}
console.log(some(arr, 20));

// Метод some:
console.log(arr.some(el => el === 20));

// Методы flat и flatMap:
const pprices = [[100, 200], [120, 100], [200, [450, 9]]];
console.log(pprices.flat());
console.log(pprices.flat(2));
console.log(pprices.flatMap(el => el.concat(1)));
console.log(pprices.flatMap(el => el.concat(1)).flat(2));
console.log(pprices.map(el => el.concat(1)));

//Метод sort:
const nam = ['Вася', 'Надежда', 'Артем', 'Катя', 'Яна'];
const cifr = [100, -5, 30, -39, 40];
console.log(nam.sort());
console.log(nam.sort((a, b) => b.localeCompare(a)));
console.log(nam.sort().reverse());

console.log(cifr.sort());
console.log(cifr.sort((a, b) => a-b));
console.log(cifr.sort((a, b) => b-a));

// Создание и заполнение массивов:
const arra = Array(5);
console.log(arra);
arra.fill(1, 0, 3);
arra.fill(2, 3, 5);
console.log(arra);
const arra5 = Array(6).fill(1);
console.log(arra5);

let aa = 0;
console.log(arra5.map(el => {
    aa++ 
    return el + aa - 1})
)

const arra2 = Array.from({length: 5}, (cur, i) => i + 10);
console.log(arra2);
const arra3 = Array.from({length: 5}, (cur, i) => (i + 1) * 10);
console.log(arra3);