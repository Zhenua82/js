// Работа с массивами:
const massive = ['Ира', 'Галя', 'Максим', 'Егор'];
const massive2 = new Array('Ваня', 'Галя', 'Максим', 'Юля');
console.log(massive, massive2);
console.log(massive[0], massive2[1]);
console.log(massive.length);
console.log(massive[massive.length - 1]);
console.log(massive.at(-1));

massive[3] = 'Гоша';
console.log(massive);

massive[7] = 'Гоша'
console.log(massive);

massive.push('Никита');
console.log(massive);
console.log(massive.push('Никита'));
console.log(massive);

massive.unshift('Филя')
console.log(massive);
console.log(massive.unshift('Филипп'));
console.log(massive);

massive.pop();
console.log(massive);
console.log(massive.pop());
console.log(massive);

massive.shift()
console.log(massive);
console.log(massive.shift());
console.log(massive);

console.log(massive.indexOf('Максим'));
console.log(massive.indexOf('Марк'));
console.log(massive.includes('Максим'));
console.log(massive.includes('Валя') ? 'Доступ есть' : 'Хрен');

console.log(massive.slice(2, 4));
console.log(massive);
console.log(massive.slice(-3));

console.log(massive.splice(4, 3));
console.log(massive.splice(-2));
console.log(massive);

console.log(massive.reverse());

console.log(massive.concat(massive2));
console.log(massive2);

const stringg = 'auth/user/login';
console.log(stringg.split('/'));
console.log(stringg);

console.log(massive.join('-'));
console.log(massive);

// Задача:
// Дан список задач
// 	const tasks = ['Задача 1'];
// 	Сделать функции:
// 	- Добавление задачи в конец
// 	- Удаление задачи по названию
// 	- Перенос задачи в начало списка по названию 
// 	Всегда меняем исходный массив
const task = ['Задача 1', 'Задача 2', 'Задача 3', 'Задача 4'];

function add(taskN){
    return task.push(taskN)
};
function del(taskName){
    if (task.indexOf(taskName) >= 0) {
        return task.splice(task.indexOf(taskName), 1);
    } 
    return task    
};
// function transfer(taskName){
//     if (task.indexOf(taskName) >= 0) {
//         task.splice(task.indexOf(taskName), 1);
//         return task.unshift(taskName);
//     } 
//     return task   
// };
// function transfer(taskName){
//     if (task.indexOf(taskName) >= 0) {
//         del(taskName);
//         return task.unshift(taskName)};
// };
function transfer(taskName){
    del(taskName);
    return task.unshift(taskName);
};
add('Задача 2');
console.log(task);
del('Задача 2');
console.log(task);
transfer('Задача 5');
console.log(task);

// Деструктуризация:
console.log(massive2);
const [namee, sername, secondName] = massive2;
console.log(namee, sername, secondName);
const [x, _, y] = massive2;
console.log(x, y);

// Rest оператор:
const data =[1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data;
console.log(one, two, others);

// Задача:
// Дан произвольный url - 
// 	'https://purpleschool.ru/course/javascript'
// 	Нужно сделать функцию, которая выводит в консоль:
// 	- Протокол (https)
// 	- Доменное имя (purpleschool.ru)
// 	- Путь внутри сайта (/course/javascript)
url = 'https://purpleschool.ru/course/javascript';
function pars(url){
    const array = url.split('/')
    const [protocol, _, domen, ...sait] = array
    if (!domen.includes('.')){
        return;   
    }  
    return (`- Протокол: (${protocol.split(':')[0]})
- Доменное имя: (${domen})
- Путь внутри сайта: (/${sait.join('/')})`) 
}
console.log(pars(url))

// includes работает еще и со строками:
const stroka = 'fghfdjkgh.gjdkf'
if (stroka.includes('gf')){
    console.log(stroka)   
} else {
    console.log(stroka+1111)
}
