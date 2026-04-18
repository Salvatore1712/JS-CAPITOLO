// FUNZIONE ANONIMA, priva di nome e spesso agganciata ad una variabile
const saluta = function(){
    console.log("Ciao da funzione anonima");
}

//richiama funzione
saluta();

// funzione somma anonima con valori
const somma = function(a, b) {
    let risultato = a + b
    return risultato;
}

console.log(somma(100, 22));
