

const colori = ["rosso", "giallo", "blu", "verde"];
console.log(colori[colori.length - 2]);

//add prop object
const libro = {
  titolo: "Il Signore degli Anelli",
  pagine: 1200
};

libro.autore = "Tolkien";
console.log(libro);

let rubrica = [];

const utente1 = {
    nome: "ciro",
    cognome: "de roma",
    numero: 3408312741,
}
const utente2 = {
    nome: "salvatore",
    cognome: "de roma",
    numero: 3408312740,
}
const utente3 = {
    nome: "isabella",
    cognome: "de roma",
    numero: 3408312742,
}

rubrica.push(utente1, utente2, utente3);
console.log(rubrica);

// Scrivi una riga di codice che acceda al secondo contatto nell'array e ne stampi in console solo il numero di telefono.

console.log(rubrica[1].numero);

// Scrivi una riga di codice che modifichi il cognome del primo contatto nell'array, cambiandolo in un valore a tua scelta. Stampa di nuovo l'oggetto del primo contatto per verificare la modifica.

rubrica[0].cognome = "degregori";
console.log(rubrica);
