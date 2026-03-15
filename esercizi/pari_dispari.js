
let arr = [];
const numeroElementi = 10
const numeroMax = 100;


for (let i = 0; i <= numeroElementi; i++) {
    let numero = Math.floor(Math.random()* numeroMax)
    arr.push(numero);
    if (numero % 2 == 0) {
        console.log(`${numero} è pari`);
    } else {
        console.log(numero);
    }
    
}
/// somma di tutti i valori di array
let somma = 0;

arr.forEach(numero => {
    somma += numero;
})

console.log(somma);
