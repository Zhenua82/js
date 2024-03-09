'use strict';
console.log(document.head);
// document.querySelector('h1').innerText = 'Hi my friends!';
document.querySelector('.panel').innerText = 'Hi my friends!';
document.querySelector('.input').value = 'Text';
let i = 1;
document.querySelector('button').addEventListener('click', function(){
    const dannye = document.querySelector('input').value;
    if (dannye){
        document.querySelector('.panel').innerText = dannye;
        document.querySelector('input').value = '';
        i++
        if (i % 2 === 0) {
            document.querySelector('button').style.backgroundColor = 'red'
        } else {document.querySelector('button').style.backgroundColor = 'blue'};
        return (document.querySelector('.panel').innerText, document.querySelector('input').value)

    }
    return
});
// функция для работы с отслеживателем действий из html документа (oncontextmenu="dbl()"):
function dbl(){
    const dannye = document.querySelector('input').value.toLocaleUpperCase();
    if (dannye){
        document.querySelector('.panel').innerText = dannye;
        document.querySelector('input').value = '';
        // document.querySelector('input').style.backgroundColor = 'blue';
        return (document.querySelector('.panel').innerText, document.querySelector('input').value)

    }
    return
};
//Обработка событий клавиатуры:
document.querySelector('input').addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        dbl();
        document.querySelector('input').classList.add('input_active');
        console.log(document.querySelector('input').getAttribute('class')) 
    }
});
// функция для работы с отслеживателем действий действий из html документа (onkeydown="keyd(event)"):
function keyd(e) {
    if (e.key == 'Tab') {
        dbl();
        document.querySelector('input').classList.remove('input_active');
    }
};
// Установка атрибутов:
console.log(document.querySelector('input').getAttribute('class'));
document.querySelector('input').setAttribute('class', 'input input_passive');
console.log(document.querySelector('input').getAttribute('class'));
document.querySelector('input').setAttribute('class', 'input');
console.log(document.querySelector('input').getAttribute('class'));
document.querySelector('input').setAttribute('key', 1);
console.log(Number(document.querySelector('input').getAttribute('key')));

// Добавление элементов html на лету:
const newElement = document.createElement('button');
newElement.innerText = 'Кнопка';
const beforeTest = newElement.cloneNode(true);
const afterTest = newElement.cloneNode(true);
const img2 = document.createElement('img');
img2.setAttribute('src', './logo.svg')

//Добавление внутрь элемента:
document.querySelector('.test').appendChild(newElement);
//Добавление перед элементом:
document.querySelector('.test').parentNode.insertBefore(beforeTest, document.querySelector('.test'));
//Добавление после элемента:
document.querySelector('.test').insertAdjacentElement('afterend', afterTest);

newElement.setAttribute('user-id', 5);
afterTest.classList.add('button');

const newDiv = document.createElement('div');
document.querySelector('.test').appendChild(newDiv);
newDiv.classList.add('panel');
newDiv.innerHTML = `<button class = 'button'> btn </button> <h2>Заголовок</h2>`;
document.querySelector('body > div.test > div > h2').insertAdjacentElement('afterend', img2);

//Удаление элемента:
document.querySelector('.test button').remove();





