/*
3. Simulare operazioni asincrone
Obiettivo: capire il comportamento async con callback.
Esercizio:
Simula una richiesta con setTimeout.
Estensione:
Passa i dati alla callback:
*/

setTimeout(function(messaggio) {
    console.log("Richiesta asincrona" + "salvo")
}, 3000)



function mostra (valore) {
    console.log(valore);
    
}

function sommaRisultato (a, b, callback) {
    let risultato = a + b;
    callback(risultato)
}

mostra(sommaRisultato(10, 9, mostra))