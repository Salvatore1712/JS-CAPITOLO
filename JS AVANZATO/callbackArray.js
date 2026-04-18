/*
4. Callback su array (fondamentale)
Obiettivo: usare callback con metodi reali JS.
a) forEach
b) map
c) filter
Esercizio:
Dato un array di utenti, filtra solo quelli maggiorenni
Poi trasformali in stringhe "Nome - Età"
*/

const utenti = [
    {nome: "Carlo", eta: 16},
    {nome: "Alberto", eta: 22},
    {nome: "Mauro", eta: 40},
    {nome:"Filippo", elta: 15}
]

let checkEta = function (array) {
    return array.filter(utente => utente.eta >= 18);
}

function maggiorenni (array, callback) {
    let risultato = callback(array)
    console.log(risultato);
    setTimeout(function(){
        console.log("Uetenti caricati");
    }, 3000)
    
}

maggiorenni(utenti, checkEta)
