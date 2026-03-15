/* Esercizio 5 — Voto scolastico
Dato:
let voto = 7;
Stampa:
    >= 9  → Ottimo
    7-8   → Buono
    6     → Sufficiente
    <6    → Insufficiente
Usa if / else if
*/

let voto = 7;

if (voto >= 9){
    console.log("Ottimo");
} else if (voto < 9 && voto >= 7 ){
    console.log("Buono");
} else if (voto == 6) {
    console.log("Sufficiente");
} else if (voto < 6) {
    console.log("Insufficiente");
}