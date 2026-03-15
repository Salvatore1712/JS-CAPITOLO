/*
Esercizio 9 — Contare calorie
Array:
let calorie = [200, 350, 150, 400];
Con for calcola la somma totale delle calorie.
Output:
Calorie totali: 1100
*/

let calorie = [100, 256, 120, 423];
let calorieTotal = 0;

for(i=0; i<calorie.length; i++) {
    calorieTotal +=calorie[i];
}

console.log(calorieTotal);
