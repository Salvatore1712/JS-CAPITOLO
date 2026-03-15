function saluto(nome){
    console.log("Ciao " + nome);
}

let nome = "MARIA"
saluto(nome)
saluto("CIRO")

function somma (a, b){
    let risultato = a + b;
    return risultato
}

console.log(somma(10, 22));

// funzione freccia
const somma2 = (a, b) => {
    let risul = a * b;
    return risul;
}

let risultatoMolt = somma2(10, 3)
console.log(risultatoMolt);

/*
Zero parametri: quando la funzione non riceve parametri, si usano le parentesi vuote.
    const saluta = () => {
    console.log("Ciao!");
    };
Un solo parametro: se c’è solo un parametro, puoi omettere le parentesi tonde. Ma puoi anche scriverla più compatta (vedi sotto).
    const raddoppia = numero => {
    return numero * 2;
    };
Più parametri: se ci sono due o più parametri, le parentesi sono obbligatorie.
    const somma = (a, b) => {
    return a + b;
    };
// La versione più concisa possibile
    const sottrazione = (a, b) => a - b;

    console.log(sottrazione(10, 3)); // Output: 7
*/


