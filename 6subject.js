'use strict';
let user = {
    name: 'Ivan',
    surname: 'Pupkin',
    age: 25,
    hobby: ['sky', 'chess'],
    eduBasic: 'school №3',
    eduPro: 'VMedA',
};
console.log(user);
console.log(user.hobby);
console.log(user.hobby[0]);
console.log(user['hobby'][1]);
// let res = prompt('Введите свойство объекта');
// let res = 'eduPro';
let res = 'Basic';
console.log(user[res]);
console.log(user.res);
console.log(user['edu' + res]);
user.address = 'Moscow';
console.log(user);
user['age'] = 30;
console.log(user);

// Задача:
/* отсортировать пользователей по возрасту */
const users = [
	{ name: 'Вася', age: 30 },
	{ name: 'Катя', age: 18 },
	{ name: 'Аня', age: 40 },
	{ name: 'Петя', age: 25 },
];

let sortt = [];
for (let i of users) {
    let g = i.age
    sortt[g] = i
}
let sortMassive = sortt.filter(el => {return el != 'empty'})
console.log(sortMassive)
console.log(users[2].age)

// 2-ой вариант:
console.log(users.sort((a, b) => a.age - b.age))

// Задача:
/* преобразовать пользователей до вида
	{ fullName: 'Вася Пупкин', skillNum: 2  }
*/
const userss = [
    {
		name: 'Вася',
		surname: 'Пупкин',
		age: 30,
		skills: ['Разработка', 'DevOps'] 
	},
	{ 
		name: 'Катя', 
		surname: 'Белова',
		age: 18, 
		skills: ['Дизайн'] 
	},
];

const newMas = userss.map((elem) => {
    elem.fullName = elem.name + ' ' + elem.surname;
    elem.skillNum = elem.skills.length;
    elem = {fullName: elem.fullName, skillNum: elem.skillNum};
    return elem;
})
console.log(newMas)

// 2-ой вариант:
const newMass = userss.map(elem => {
    return {
        fullName: `${elem.name} ${elem.surname}`, 
        skillNum: elem.skills.length
    }  
})
console.log(newMass);

// Методы объектов:
const chel = {
    name: 'Ura',
    suname: 'Ivanov',
    age: 32,
    fullName: function(){
        return this.name + ' ' + this.suname
    },
    pens() {
        this.age >= 65? console.log('pens') : console.log('no pens')
    }
};
console.log(chel.fullName());
chel.pens();
// Задача:
/* Релизовать методы увеличения и уменьшения баланса, 
	при котором каждая операция сохраняется в массив
	operations в виде { reason: 'Оплата налогов', sum: -100 }.
	Возвращается true, если успешно и false, если не хватает баланса
	Так же реализовать метод вывода числа операций по кошельку
 */

const wallet = {
    balance: 0,
    operations: [],
    oper: function(reason, money){
        if (this.balance + money >=0){
            this.balance += money;
            this.operations.push({reason: reason, sum: money});
            return true;
        }
        return false;
    },
    count: function(){
        return this.operations.length
    }
};
console.log(wallet.oper('add balance', 20));
console.log(wallet);
console.log(wallet.oper('sdff', 60));
console.log(wallet);
console.log(wallet.oper('minus balance', -50));
console.log(wallet);
console.log(wallet.count());
// 2-ой вариант:
const wallett = {
    balance: 0,
    operations: [],
    addBalans: function(reason, sum){
        this.balance += sum;
        this.operations.push({reason, sum});
        return true;  
    },
    minusBalans: function(reason, sum){
        if (this.balance - sum >=0){
            this.balance -= sum;
            this.operations.push({reason, sum: -sum});
            return true;
        }
        console.log('small money');
        return false;
    },
    count: function(){
        return this.operations.length;
    }
};
console.log(wallett.addBalans('Add money', 100));
console.log(wallett);
console.log(wallett.minusBalans('minus balance', 700));
console.log(wallett);
console.log(wallett.count());

// Enhance object literas:
const balance = 20;
const wwallet = {
    balance,
    operations: []
};
console.log(wwallet);

// Итерирование по объекту:
const cities = {
    moscow: {
        let: 200,
        temp: 20
    },
    novosib: {
        let: 120,
        temp: 18
    },
};
// 1-ый вариант:
let sumTemp = 0;
for (let key of Object.keys(cities)){
    sumTemp += cities[key].temp
}
console.log(sumTemp/Object.keys(cities).length)
// 2-ой вариант:
sumTemp = 0;
let sumkey = 0;
for (let key in cities){
    sumkey ++;
    sumTemp += cities[key].temp
}
console.log(sumTemp/sumkey)

// Деструктуризация, rest и спрэд
console.log(user);
const {age, ...other} = user;
console.log(age);
console.log(other);

const addData = {
    rassa: 'niger',
    famaly: 'no'
};
user = {
    ...user,
    ...addData
}
console.log(user)

// Optional chaining (проверка цепочки на ошибки):
console.log(cities);
let city = 'krd';
// console.log(cities[city].temp.kelvin);
console.log(cities[city]?.temp?.kelvin);

// Задача:
/*
	Сделать объект склад с методами добавления на склад, поиска
	по складу товара и расчёт веса
*/
/* товары */
const car = {
	id: 1,
	weight: {
		kg: 1000
	},
	brand: 'Ford'
};
const chair = {
	id: 2,
	weight: {
		kg: 2
	},
};
const paper = {
	id: 3,
	color: 'red'
};

const warehouse = {
	goods: [],
	findGoodById: function (id) {
        for (let key of Object.keys(warehouse.goods)){
            if (warehouse.goods[key].id === id){
                return warehouse.goods[key]
            }
        }
        return `false - ${id}`
        
    },
	addGood: function (good) {
        const sush = this.goods.find(el => el.id === good.id)
        if (sush){
            console.log('Товар уже есть');
            return false;
        } 
        this.goods.push(good);
        return console.log(warehouse);
    },
	getWeightKg: function () {
        let finalWeight = 0
        for (let key of Object.keys(warehouse.goods)){
            if (warehouse.goods[key].weight?.kg != undefined){
            finalWeight += warehouse.goods[key].weight.kg}
        }
        return finalWeight 
    },
    getWeightKgg: function () {
        const finalWeight = this.goods.reduce((prev, elem) => {
            if (elem.weight?.kg != undefined){
                return prev + elem.weight?.kg;
            } else {
                return prev; // Вернуть prev, если условие не выполняется
            }       
        }, 0);
        return finalWeight;
    }
};

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.findGoodById(12));
console.log(warehouse.getWeightKg());
console.log(warehouse.getWeightKgg());
warehouse.addGood(paper);

// 2-ой вариант:
const warehousee = {
	goods: [],
	findGoodById: function (id) {
        return this.goods.find(el => el.id === id);       
    },
	addGood: function (good) {
        if (this.findGoodById(good.id) != undefined){
            console.log('Товар уже есть');
            return false;
        } 
        this.goods.push(good);
        return console.log(warehousee);
    },
    getWeightKg: function () {
        return this.goods.reduce((prev, elem) => 
        (elem.weight?.kg != undefined) ? prev += elem.weight.kg : prev, 
        0);
    },
    getWeightKgg: function () {
        return this.goods.reduce((prev, elem) => 
            prev += elem.weight?.kg ? elem.weight.kg : 0, 
            0)         
    }
};

warehousee.addGood(car);
warehousee.addGood(chair);
warehousee.addGood(paper);
console.log(warehousee.findGoodById(1));
console.log(warehousee.getWeightKg());
console.log(warehousee.getWeightKgg());
warehousee.addGood(paper);

// Копирование объектов (без глубокого копирования - массивы и др. вложенные объекты - не копируются, на них только создается ссылка в памяти):
const uuser = {
    name: 'Ivan',
    id: 1,
    roles: ['admin']
};
const newUser = Object.assign({}, uuser);

uuser.name = 'NewUser';
uuser.roles.push('director');
console.log(uuser);
console.log(newUser);

const newUser2 = {
    ...uuser
};

uuser.name = 'Petr';
uuser.roles.push('manager');
console.log('_________________________________');
console.log(uuser);
console.log(newUser);

// Задача:
/* 
	дополнить объект методами для получения имени:
	- компании
	- ceo
	- сотрудника
*/
const company = {
	name: 'ООО Агро',
    employees: [
        {
            name: 'Света',
            nameEmpl() {
                return this.name
            }
        },
    ],
    ceo: {
        name: 'Вася',
        nameCeo() {
            return this.name
        }
    },
    nameComp(){
        return this.name
    }
}
console.log(company.nameComp());
console.log(company.ceo.nameCeo());
console.log(company.employees[0].nameEmpl());
console.log(company.employees.map(elem => elem.nameEmpl()));

//Преобразование объекта в строку(массив):
const cchel = {
    name: 'Ura',
    suname: 'Ivanov',
    age: 32,
    fullName: function(){
        return this.name + ' ' + this.suname
    },
    pens() {
        this.age >= 65? console.log('pens') : console.log('no pens')
    }
};
let mmm = new Map(Object.entries(cchel))
let mm = [...mmm].flat()
console.log(mm)