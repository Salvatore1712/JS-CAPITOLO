/*
Livello 2 — Logica nei cicli
Esercizio 4 — Mangiare biscotti
Dato:
let biscotti = 10;
Con while stampa:
Mangio un biscotto
finché i biscotti arrivano a 0.
Alla fine stampa:
Biscotti finiti
*/


let biscotti = 10;

while(biscotti != 0) {
    console.log("mangio un biscotto");
    biscotti--;
    if (biscotti == 0) {
        console.log("Biscotti finiti")
    }
}
