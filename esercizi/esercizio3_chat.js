/* Esercizio 3 — Giorno della settimana
Dato:
let giorno = 3;
Usa switch per stampare:
1 Lunedi
2 Martedi
3 Mercoledi
4 Giovedi
5 Venerdi
6 Sabato
7 Domenica
*/

let giorno = 3;
let paragrafo = document.querySelector(".risultato");

switch (giorno) {
    case 1:
        paragrafo.textContent = "Lunedi"
        break;
    case 2:
        paragrafo.textContent = "Martedi"
        break;
    case 3:
        paragrafo.textContent = "Mercoledi"
        break;
    case 4:
        paragrafo.textContent = "Giovedi"
        break;
    case 5:
        paragrafo.textContent = "Venerdi"
        break;
    case 6:
        paragrafo.textContent = "Sabato"
        break;
    case 7:
        paragrafo.textContent = "Domenica"
        break;
}