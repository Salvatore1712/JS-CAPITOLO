// oggetti

const persona = {
    nome: "salvatore",
    cognome: "de roma",
    eta: 41,
    lavoro: true,
    passioni: ["informatica", "Fotografia", "Sport"],
    indirizzo: {
        via: "fratelli cervi",
        nCivico: 2,
        provincia: "TA",
    },
    saluto: function() {
        console.log("Hello Everyone!!");
    }
}
// DOT NOTATION
console.log(persona.nome);
console.log(persona.indirizzo.via);
persona.saluto()
console.log(persona.passioni[1]);

// bRACKET NOTATION
console.log(persona["passioni"][1]);
console.log(persona["indirizzo"].provincia);

// AGGIORNARE UN OGGETTO
persona.nome = "Ciro"
console.log(persona.nome);

// aggiunge valori all'array nell'oggetto
persona.passioni.push("Alimentazione");
console.log(persona.passioni);


