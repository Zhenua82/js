const massiv = [4, 2, 57, 0, -3, 48, 39, 63]
const massiv2 = ['Oleg', 'Ivan', 'Olja', 'Petr', 'Jon', 'Boris']
console.log(massiv)
console.log(massiv.sort((a, b) => b - a))
console.log(massiv2)
console.log(massiv2.sort((a, b) => b.localeCompare(a)))
console.log(massiv2.sort((a, b) => a.localeCompare(b)))
console.log(massiv)
massiv.forEach((elem, i) => console.log(`${i} - ${elem * 2}`))
console.log(massiv)
massiv.forEach(function(elem, i) {
    let a = elem * 2
    console.log(a)
    return elem
})
console.log(massiv)
let ccc = []
console.log(ccc)
massiv.forEach(function(elem, i) {
    ccc.push(elem * 2)
    return ccc
})
console.log(ccc)
let neww = massiv.map((elem, i) => elem * 2)
console.log(neww)
let bb
bb =  massiv.find(el => el == 5)
console.log(massiv.find((el, i) => el == 4 && i == 4))
console.log(massiv.flat(3))
if (massiv.find(el => el == 4)){
    console.log('Yes')
} else {
    console.log('no')
}
let b = massiv.filter(el => el > 5 && el < 50)
console.log(b)
let v = b.join(' ')
console.log(v)
console.log(b.toString())

// $('.inp button').css({'color': 'red'});
// $('body').css({'background-color': 'red'});
document.querySelector('.inp button').style.color = 'black'
document.querySelector('body').style.backgroundColor = 'yellow'

// $('h1').on("click", function() { 
//     $(this).css({'color': 'red'})
//     $(this).text('Меняем текст <em>на курсивный шрифт</em>');
//     $(this).html('Меняем текст <em>на курсивный шрифт</em>');
//     $(this).append('Вводим в конец доп текст <em>с курсивным шрифтом</em>');
//     $(this).prepend('Вводим в начало доп текст <em>с курсивным шрифтом</em>');
// })


let habbits;
let j = 0
const TRENIROVKA = 'Trenirovka';

//init:
(function() {
    const habbitsString = localStorage.getItem(TRENIROVKA);
    const habbitsArray = JSON.parse(habbitsString);
    let hash = document.location.hash.replace('#', '')
    if (Number(hash) > 0) {
        habbits = habbitsArray;
    } else{habbits = 'JS'}
    
})();

function saveData(){
  localStorage.setItem(TRENIROVKA, JSON.stringify(habbits));
};

document.querySelector('h1').addEventListener("click", function() {
    this.style.color = 'black';
    j += 1
    document.location.replace(document.location.pathname + '#' + j);
    // this.textContent = 'Меняем текст <em>на курсивный шрифт</em>'
    // this.innerHTML = 'Меняем текст <em>на курсивный шрифт</em>'
    // this.insertAdjacentHTML('beforeend', 'Вводим в конец доп текст <em>с курсивным шрифтом</em>');
    this.append('Вводим в конец доп текст <em>с курсивным шрифтом</em>');
    this.prepend('Вводим в начало доп текст <em>с курсивным шрифтом</em>');
    // this.insertAdjacentText('beforebegin', 'Вводим в конец доп текст <em>с курсивным шрифтом</em>');  
    // let span = document.createElement("span");
    // span.innerHTML = "Вводим в конец доп текст <em>с курсивным шрифтом</em>";
    // let computedStyle = window.getComputedStyle(this);
    // for (var i = 0; i < computedStyle.length; i++) {
    //     span.style.setProperty(computedStyle[i], computedStyle.getPropertyValue(computedStyle[i]));
    // }
    // this.parentNode.insertBefore(span, this);
    habbits = this.innerText
    saveData()
})
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('h1').addEventListener("contextmenu", function(event) {
        event.preventDefault();
        console.log(j)
        if (j > 0) {
            j -= 1
            document.location.replace(document.location.pathname + '#' + j);
            // Проверяем, есть ли что-то в начале элемента, что нужно удалить
            if (this.firstChild.nodeType === Node.TEXT_NODE) {
                // Удаляем только первый дочерний текстовый узел
                this.removeChild(this.firstChild);
            }
            if (this.lastChild.nodeType === Node.TEXT_NODE) {
                // Удаляем только первый дочерний текстовый узел
                this.removeChild(this.lastChild);
            } 
            habbits = this.innerText
            saveData()
        } else {this.innerText = 'Js'}      
    });
});
document.querySelector('h1').innerText = habbits