'use strict';

localStorage.setItem('token', 'stroka');
localStorage.setItem('token1', 55);
localStorage.setItem('token2', 45);
localStorage.setItem('token3', false);
const token2 = localStorage.getItem('token2');
console.log(token2);
console.log(typeof token2);
console.log(localStorage.getItem('token1'));
localStorage.removeItem('token1');
console.log(localStorage.getItem('token1'));
localStorage.clear();

const obj = JSON.parse('{"a": 1}');
const obj2 = JSON.parse('{"a": "1"}');
console.log(obj);
console.log(obj2);
console.log(obj2.a);
console.log(typeof obj2.a);
console.log(obj.a);
console.log(typeof obj.a);

const str = JSON.stringify({a:1});
console.log(str);
const str2 = JSON.stringify(obj2);
console.log(str2);

// Задача с index-dom.html, сохранение объекта в виде строки в localStorage 
// путем преобразования его в строку методом JSON:
let dan = document.querySelector('.panel').innerText;
document.querySelector('button').addEventListener('click', function(){
    const dannye = document.querySelector('.panel').innerText;
    if (dannye != dan){
        dan = document.querySelector('.panel').innerText;
        const object = {text: dan}
        localStorage.setItem('text', JSON.stringify(object))
        // localStorage.setItem('text', object.text)
        // localStorage.setItem('text', dan)
    }
});