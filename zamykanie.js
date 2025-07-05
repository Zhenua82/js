const zamykanie = function() {
    const name = 'Zamykanie';
    return function() { //Замыкание это функция, возвращающая переменную из локальной зоны видимости
        return name;
    };
}
console.log(zamykanie()());
//Либо:
const rezult = zamykanie();
console.log(rezult());