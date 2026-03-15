/* Simulatore distributore automatico
Dato:
    let prodotto = "caffe";
Con switch gestisci:
    caffe = 1€
    te = 1.5€
    cioccolata = 2€
Poi usa ternario per stampare:
    pagamento accettato
    oppure
    credito insufficiente
*/

let paragrafo = document.querySelector(".risultato");
let prodotto = prompt(`COSA VUOI ACQUISTARE?
    Caffè 1€- The 1.5€ - Cioccolata 2€`);

let soldi = prompt("Inserisci moneta")

if (soldi <=2) {
    paragrafo.textContent = "Pagamento accettato";
} else {
    paragrafo.textContent = "Pagamaneto negato";
}

