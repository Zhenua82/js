const userName = '🍒 Васелиса Пупкина';
console.log(userName);
console.log(userName[0] + userName[1]);
console.log(userName.charAt(0) + userName.charAt(1));
console.log(userName.length);
console.log(userName.indexOf('Ва'));
console.log(userName.lastIndexOf('а'));
console.log(userName.includes('уп'));//Поиск 'уп' в строке userName
console.log(userName.startsWith('🍒'));
console.log(userName.endsWith('а'));
console.log(userName.indexOf('упе'));
console.log(userName.slice(3));
console.log(userName.slice(3, 11));
//Пример работы includes:
const stroka = 'fghfdjkgh.gjdkf'
if (stroka.includes('gf')){
    console.log(stroka)   
} else {
    console.log(stroka+1111)
}

// Задача:
// вытащить имя и фамилию в отдельные перемнные
const fullUserName = 'Вася aka Terminator Perdinator Пупкин';
const parts = fullUserName.split(' ');
console.log(parts);
const firstName = parts[0];
const lastName = parts.at(-1);
console.log('Имя:', firstName);
console.log('Фамилия:', lastName);
// 2-ой вариант решения задачи:
console.log(fullUserName.slice(0, fullUserName.indexOf(' ')));
console.log(fullUserName.slice(fullUserName.lastIndexOf(' ') + 1, fullUserName.length));
console.log(fullUserName.slice(fullUserName.lastIndexOf(' ') + 1));

console.log(userName.toLocaleLowerCase());
console.log(userName.toLocaleUpperCase());
console.log(userName.replace('В', 'ф'));
console.log(userName.replaceAll('а', 'е'));
console.log(userName.replace(/а/g, 'е')); // регулярное выражение

const str2 = '    Виолетта    Олимпиадовна        \n 1';
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());
console.log(str2.split(' ').filter(el => el.trim() !== '').join(' '));
console.log(str2.split(' ').filter(el => el !== '').join(' '));

//Проверка на наличие букв в строке:
console.log(isNaN(Number('42145')));
console.log(isNaN(Number('dfghgh')));
console.log(isNaN(Number('42dfghg67')));
console.log(isNaN(Number('42тмыолщ67')));

// Задача:
/* проверить является ли это номером телефона России */
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '  +7(910) 323-53-56  ';
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function isNum(telef){
    if ((isNaN(Number(telef)) && (telef.includes('(') === false && telef.includes(')') === false))
     || (telef.length < 11) || (telef[0] != '8' && telef[0] != '+' && telef[0] != ' ')) {
        return false
    } else {
        return true}
}
console.log(isNum(num4Error));
// 2- ой вариант:
function numbTel(tel){
    tel = tel.replaceAll('(', '');
    tel = tel.replaceAll(')', '');
    tel = tel.replaceAll('-', '');
    tel = tel.replaceAll(' ', '');
    if(tel.startsWith('+7')){
        tel = tel.replace('+7', '8');
    };
    console.log(tel);
    if (tel.length != 11) {return false}
    else if (isNaN(Number(tel))) {return false}
    else {return true}
}
console.log(numbTel(num4Error));

const film = 'Звездные войны ';
console.log(film.padStart(22, ' *').padEnd(28, ' *'));
console.log(film.repeat(10));

// Задача:
/* Замаскировать всё, кроме последних 4х символов */
/* ************8353 */
const card = '2342834503458353';

function mask(newCard){
    return newCard.slice(-4).padStart(newCard.length, '*');
}
console.log(mask(card))
