'use strict';
// Методы call и apply и объект arguments:
const audi = {
    make: 'Audi',
    model: 'A3',
    years: 2020,
    damages: [],
    addDamages(part, rate){
        console.log(`У авто ${this.make} ${this.model} добавлено повреждение ${part} степенью ${rate}`);
        console.log(arguments);//В стрелочных функциях arguments не работает
        console.log(arguments[0]);
        return this.damages.push([part, rate])
    }
};
audi.addDamages('бампер', 1);
console.log(audi);

let addDamagesAll = audi.addDamages;
const bmw = {
    make: 'BMW',
    model: 'X5',
    years: 2023,
    damages: [],
};

console.log(addDamagesAll.call(bmw, 'крыло', 2));
console.log(audi.addDamages.call(bmw, 'крыло', 3));
console.log(addDamagesAll.apply(bmw, ['дверь', 1]));
console.log(bmw);

// Метод bind - связывание функции с объектом:
const carManipul = {
    addDamag(part, rate){
        this.damages.push({part, rate});
        console.log(`Добавлено повреждение на ${this.make} ${this.model}: повреждение ${part} степенью ${rate}`);
    }
}
const addDamagesBmw = carManipul.addDamag.bind(bmw);
addDamagesBmw('Бампер', 4);
console.log(bmw);

function carManip(part, rate){
    this.damages.push({part, rate});
    console.log(`Добавлено повреждение на ${this.make} ${this.model}: повреждение ${part} степенью ${rate}`);
}
const addDamagesAudi = carManip.bind(audi, 'Лобовое стекло');
addDamagesAudi(3);
console.log(audi);

// Задача:
/*
	Создайте объект пользователя с паролем.
	С помощью функции ниже удалить пароль сделав
	функцию сброса пароля
 */
function removePassword (reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
};
const pupkin = {
    name: 'Иван',
    surname: 'Иванов',
    password: '34532'
};

const delPassPupkin = removePassword.bind(pupkin, true);
delPassPupkin();
console.log(pupkin);

//Инкапсуляция IIFO:
(function() {
    console.log('Start init');
    const a = 6;
})();
// console.log(a);

// Замыкание и задача:
/* 
	Сделать функицю пользовтеля, которая берёт за основу
	userInfo и за счёт замыкания создаёт новый объект, с
	котором можно работать как user1().increse(100)
*/
const userInfo = {
	balance: 0,
	operations: 0,
	increse(sum) {
		this.balance +=sum;
		this.operations++;
	}
}

function newchel(user) {
    // return user = userInfo; //Если так - то при новом user.. 
    // все будет суммироваться т.к. информация по userInfo передается из кучи по ссылке
    return user = {
        balance: 0,
        operations: 0,
        increse(sum) {
            this.balance +=sum;
            this.operations++;
        }
    }
}
let a = {};
const user1 = newchel(a);
user1.increse(100);
console.log(user1);
user1.increse(200);
console.log(user1);
const user3 = newchel(a);
user3.increse(500);
console.log(user3);

// 2-ой вариант:
function chel(){
    const newchel = {
        balance: 0,
        operations: 0,
        increse(sum) {
            this.balance +=sum;
            this.operations++;
        }
    }
    return function(){
        return newchel
    }
};
const user5 = chel();
user5().increse(50);
user5().increse(120);
console.log(user5());
const user6 = chel();
user6().increse(80);
user6().increse(140);
console.log(user6());

//Работа с формой (делаем ее неактивной)
function addDays(event){
    let form = event.target;
    event.preventDefault();
    console.log(form);
    let data = new FormData(form);
    console.log(data.get('inputday'));// т.к. <input name="inputday"/>
    data.append('aaa', 'a555' );
    console.log(data.get('aaa'));
    console.log(data.getAll('aaa'));
    // console.log(document.querySelector('.inputdenj').value);
    // form['inputday'].classList.add('empty');
    form['inputday'].style.border = '1px solid rgb(240, 8, 8)';
};

function exper(context, value_onclic){
    let form_input= document.querySelector('.poleinput input[name="exp"]');
    form_input.value = value_onclic;
    console.log(form_input.value);
    console.log(context.classList)
};

// Mетод eval()
let aaa = '5 * 8 + 5 / 5';
console.log(eval(aaa));