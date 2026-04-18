/* 
Eseguire un’operazione con callback

Crea una funzione eseguiOperazione che accetta due numeri e una funzione callback.

La funzione deve:

Stampare in console "Eseguo operazione...".
Chiamare la callback passando i due numeri.
Stampare il risultato restituito dalla callback.
Segui queste istruzioni:

Definisci una funzione somma(a, b) che restituisce la somma dei due numeri.
Passa somma come callback a eseguiOperazione.
Ripeti poi l’esercizio usando una funzione anonima (o arrow function) che calcoli la moltiplicazione.
*/

let somma = function(a, b) {
    return a + b;
}

let moltiplicazione = (a,  b) => {return a * b}

function eseguiOperazione (a, b, callback) {
    console.log("Eseguo operazione");
    console.log(callback(a, b));
    // console.log("Eseguo moltiplicazione");
    // console.log(callback2(a, b));
}

eseguiOperazione(15, 10, somma, moltiplicazione)
eseguiOperazione(25, 5, (a, b)=> a - b ) // in questo richiamo di funzione, anziché somma, viene passata una arrow function anonima


//dichiarare separatemente le due funzioni che eseguono il calcolo (molt e somma),
// dichiarare la funzione che esegue le operazione passandogli come parametri, a parte i 2 numeri, anche le funzioni di callback.
