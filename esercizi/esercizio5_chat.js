/* Esercizio 6 — Menu ristorante
Dato:
let piatto = "pizza";
Usa switch per stampare il prezzo:
    pizza = 8€
    pasta = 10€
    insalata = 6€
    default = piatto non disponibile
*/

let piatto = "pizza";

switch (piatto) {
    case "pizza":
        console.log("Prezzo 8€");
        break

    case "pasta":
        console.log("Prezzo 10€");
        break;

    case "insalata":
        console.log("Prezzo 6€");
        break;

    default:
        console.log("Piatto non disponibile");
        break
}