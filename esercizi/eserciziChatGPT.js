/* Esercizio 1 — Numero positivo o negativo
    Scrivi un programma che:
    chiede un numero
    stampa:
    "Numero positivo"
    "Numero negativo"
    "Zero"
*/
let numero = prompt("Inserisci un numero");
let paragrafo = document.querySelector(".risultato");

if (numero < 0) {
    paragrafo.textContent = "Numero negativo";
} else if (numero > 0) {
    paragrafo.textContent = "Numero positivo";
} else {
    paragrafo.textContent = "Zero";
}