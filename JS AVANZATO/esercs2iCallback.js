/*
Filtrare i numeri pari

Scrivi una funzione chiamata filtraPari che accetta un array di numeri e restituisce un nuovo array contenente soltanto i numeri pari.

Per effettuare il filtraggio, utilizza il metodo .filter() e passa come callback una funzione anonima che controlli se un numero è pari.

Infine, stampa in console il risultato dell’elaborazione.
*/

const numeri = [10, 25, 32, 11, 87, 56, 102, 41]


let numeriPari = numeri.filter(function(n) {
    return n % 2 === 0;
}) 

console.log(numeriPari);
