/* Livello 3 — Combinazioni
Esercizio 7 — Login utente
Dato:
    let user = "admin";
    let password = "1234";
Controlla:
    admin + 1234 → accesso consentito
    altrimenti → accesso negato
Usa if
Poi riscrivilo con operatore ternario
*/
let user = "admin";
let password = "1234";

if (user == "admin" && password == 1234) {
    console.log("Accesso consentito");
} else {
    console.log("Accesso negato");
}

console.log((user == "admin" && password == 1234) ? "Access confirmed" : "Access denied");
