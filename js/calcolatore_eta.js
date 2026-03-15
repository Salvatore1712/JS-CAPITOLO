/*
Crea un nuovo script calcolatore.js (e il relativo file index.html per collegarlo).

Scrivi un programma che:

Saluta la persona che visita il sito con un alert() di benvenuto.
Chiede il suo anno di nascita usando prompt(). Memorizza il risultato in una variabile const. Suggerimento: prompt() restituisce sempre una stringa! Per fare calcoli, dovrai convertirla in un numero. Puoi farlo così: const annoNascita = Number(prompt("..."));
Calcola l'età approssimativa sottraendo l'anno di nascita dall'anno corrente (puoi usare 2025 come valore fisso). Memorizza il risultato in una variabile let.
Stampa un riassunto nella console usando console.log(). Il messaggio dovrebbe essere simile a: "Hai circa XX anni.".
Usa confirm() per chiedere "I dati sono corretti?". Stampa la risposta booleana (true/false) nella console.
*/

let nome = prompt("Come ti chiami");
let messaggio = `Ciao ${nome} oggi è una splendida giornata`


let paragrafo = document.querySelector(".info");
paragrafo.textContent = messaggio;



