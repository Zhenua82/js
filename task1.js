// Задача получение DOM элементов:
console.log(document.querySelectorAll('.one ')[0].innerText);
console.log(document.querySelector('.one span').innerText);
console.log(document.querySelector('body > div:nth-child(7) > span').innerText);
// Др. варианты достать "Элемент 2":
console.log(document.getElementsByClassName('one')[1].querySelector('span').innerText);
console.log(document.querySelectorAll('.one')[1].querySelector('span').innerText);

console.log(document.querySelector('#two').innerText);
console.log(document.querySelector('body > div:nth-child(9) > span').innerText);
// Др. варианты достать "Элемент 4":
console.log(document.querySelector('span[user-id="4"]').innerText);
console.log(document.querySelector('[user-id="4"]').innerText);
//Тренировка:
console.log(document.getElementsByClassName('one'));
console.log(document.querySelectorAll('.one'));
console.log(document.querySelector('body > div:nth-child(8)').getAttribute('id')) 