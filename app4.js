// Циклы:
for(let j = 1; j < 10; j++){
    console.log('Баланс: 1$')
};
for(let i = 1; i < 10; i = i + 2){
    console.log(`Баланс: ${i}$`)
};

const tasks = ['Задача 1', 'Задача 2','Задача 3', 'Задача 4']
for (el = 0; el < tasks.length; el++){
    if (tasks[el] === 'Задача 1'){
        continue;
    }
    if (tasks[el] === 'Задача 4'){
        break;
    }
    console.log(tasks[el])
}

// Задача:
// Вывести в консоль строку "Я люблю JS !" из массива,
// 	проходя циклом в обратном порядке, не используя метод reverse.
// 	const arr = ['!', 'JS', 'люблю', 'Я'];

const arr = ['!', 'JS', 'люблю', 'Я'];
let string = ''
for (elem = arr.length - 1; elem >=0; elem--){
    string += arr[elem] + ' '
}
console.log(string);
// 2-ой вариант:
let str = []
for (element = arr.length - 1; element >=0; element--){
    str.push(arr[element])
}
console.log(str.join(' '));
// 3-ий вариант:
let st = []
for (elemen = 0; elemen < arr.length; elemen++){
    st.unshift(arr[elemen])
}
console.log(st.join(' '));
// 4-вариант:
console.log(arr.reverse().join(' '));
// Цикл в цикле:
for (let g = 1; g < 4; g++){
    console.log(`Цикл 1 - ${g}`);
    for (let gg = 4; gg > 2; gg--){
        console.log(`Цикл 2 - ${gg}`);
    }
}
// Перебор двумерного массива:
let spisok = '';
const arrayy = [[5, 5], [4, 4, 4], [3, 3]];
for (let c = 0; c < arrayy.length; c++){
    for (let cc = 0; cc < arrayy[c].length; cc++){
        spisok += arrayy[c][cc] + ', '
        console.log(arrayy[c][cc]);
    }
}
console.log(spisok);
// Цикл while:
let iter = 0
while(iter < 3){
    console.log(iter);
    iter++;
}
let x = 7
do {
    x++;
    console.log(x);
} while(x < 0);
// for ( of или in ):
for (let h of arr){
    console.log(h)
};
for (let z in arr){
    console.log(z)
    console.log(arr[z])
}
// Задача:
// Есть выгрузка операций пользователя
// 	const operations = [1000, -700, 300, -500, 10000];
// 	а так же начальный баланс в 100$
// 	Необходимо сделать функции расчёта:
// 	- Итогового баланса
// 	- Наличия отрицательного баланса (если после очередной операции
// 		баланс < 0, то выдавать false)
// 	- Расчёта среднего расхода и среднего дохода

const operations = [1000, -700, 300, -500, 10000];

function itog(balance, bal){
    for (let v of balance){
        bal += Number(v)
    }
    return bal
};
function otric(balance, bal){
    for (let vv of balance){
        if (bal >= 0) {
            bal += Number(vv)
        } else {return false;} 
    } return bal;
}
// 2-ой вариант:
function otric(balance, bal){
    let bool = true;
    for (let vv of balance){
        if (bool === true) {
            bal += Number(vv);
        } else {break} 
        if (bal < 0){
            bool = false; 
            return bool; 
        }   
    } return bool;
}
function medium(balance){
    let plus = 0;
    let minus = 0;
    let quantity_plus = 0;
    let quantity_minus = 0;
    for (let vvv of balance){
        if (Number(vvv) > 0){
            plus += Number(vvv);
            quantity_plus += 1; 
        } else if (Number(vvv) < 0) {
            minus += Number(vvv);
            quantity_minus += 1;
        }
    }
    return (`Средний доход: ${plus/quantity_plus}, средний расход: ${minus/quantity_minus}`);
}

console.log(itog(operations, 100));
console.log(otric(operations, 100));
console.log(medium(operations));