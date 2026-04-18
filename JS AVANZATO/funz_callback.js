//FUNZIONI DI CALLBACK
// passate come argomento di un'altra funzione. Si differenziano in 
//  - SINCRONE (eseguite immediatamente)
//  - ASINCRONE (eseguite una volta terminata una operazione)

setTimeout(function(){ // <- function è passata come argomento in setTimeout
    console.log("funzione callback");
}, 5000) //<- ritardo 5 secondi

let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeriPari = numeri.filter(function (n) {
    return n % 2 === 0 //la callback restituisce i num pari
})

console.log(numeriPari);

function diCiao(){
    return "Hello";
}

function messaggio (saluto, nome){
    console.log(saluto() +" " + nome);
}

messaggio(diCiao, "salvatore");