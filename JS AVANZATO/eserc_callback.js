/*
1. Base — capire la callback
Obiettivo: passare una funzione come argomento.
Esercizio:
Crea una funzione saluta(nome, callback) che:
stampa "Ciao, [nome]"
poi esegue la callback
Estensione:
Passa callback diverse (arrivederci, grazie, ecc.).
*/
const saluto = function(nome) {
    return "Benvenuto "
}

const salutare = function (nome, callback) {
    return callback() + nome
}

console.log(salutare("salvo", saluto))

/*
2. Callback con parametri
Obiettivo: callback che ricevono dati.
Esercizio:
Crea una funzione calcola(a, b, operazione):
operazione è una callback che esegue somma, sottrazione, ecc.
Estensione:
Crea funzioni separate (somma, moltiplica) e passale come callback.
*/

function somma (a, b) {
    return a + b
}

function sottrai (a, b) {
    return a - b
}

function moltiplica (a, b) {
    return a * b
}

// funzione di callback con parametri
// non dimenticare il return altrimenti ricevi undefined
function calcola (a, b, operazione) {
    return operazione(a, b)
}

console.log(calcola(10, 5, somma));
console.log(calcola(10, 3, moltiplica));
