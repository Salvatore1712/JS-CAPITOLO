// METODI STRINGA

let stringa = "corso javascript";
console.log(stringa.length);

console.log(stringa[2]);
console.log(stringa[stringa.length -1]); //ultima lettera

console.log(stringa.indexOf("javascript")); // indice da dove comincia la parola tra parentesi

console.log(stringa.slice(0, 5)); //divide la stringa

console.log(stringa.replace("corso", "Corso")); // cambia le parole nelle parentesi, da vecchio a nuovo


let poesia = "Mi illumino di immenso";
console.log(poesia.toUpperCase());
console.log(poesia.slice(3, 11));
let poesianPlurale;
poesianPlurale = poesia.replace("Mi", "Ci")
console.log(poesianPlurale.replace("illumino", "illuminiamo"));






