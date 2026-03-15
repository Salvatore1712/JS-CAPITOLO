/*

Scrivi una funzione chiamata isEven che prenda in ingresso un numero e restituisca:

true se il numero è pari.
false se il numero è dispari.
*/

function isEven (numero) {

    if (numero %2 == 0) {
        return true;
    } else return false;
}

console.log(isEven(55));
