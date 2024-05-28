'use strict';

for (let i = 0; i < 5; i++){
    setTimeout(()=> {
        console.log(i)
    }, 3000)
}

console.log(3 && 2 && 7)
console.log(4 && 6 || 0)
console.log(6 && 4 || 0)
console.log(0 || 4 && 8)