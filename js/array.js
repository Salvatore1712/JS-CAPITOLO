// array

let nomeArray = ["latte", "pane", "pasta"]

nomeArray.push("farina"); //aggiunge alla fine dell'array
console.log(nomeArray);

nomeArray.unshift("uova"); //aggiunge all'inizio dell'array
console.log(nomeArray);
console.log(nomeArray[2]);


// pari e dispari in un array
let arrayNumeri = [21, 30, 10, 54, 67, 123, 751];
let pari = []
let dispari = []
for (let i= 0; i<arrayNumeri.length; i++) {

}

let citta = "Milano,Torino,Napoli";

let nuovoCitta = citta.split(","); //splitta la stringa a array
console.log(nuovoCitta);

let citta2 = nuovoCitta.join(", "); // da array a stinga
console.log(citta2);
console.log(typeof citta2);

