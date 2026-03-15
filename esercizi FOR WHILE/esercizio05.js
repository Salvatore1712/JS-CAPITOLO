/*
Livello 3 — Cicli + condizioni
Esercizio 7 — Pizza piccante
Array:
let pizze = ["margherita", "diavola", "marinara", "diavola"];
Con for stampa:
Pizza normale
Pizza piccante
Pizza normale
Pizza piccante
Se la pizza è "diavola" stampa piccante.
*/

let pizze = ["margherita", "diavola", "marinara", "diavola"];

for (let i = 0; i<pizze.length; i++) {
    if (pizze[i] == "diavola") {
        console.log("Pizza piccante");
    } else console.log("Pizza normale");
}