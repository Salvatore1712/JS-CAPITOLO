let meteo = "Sole";
if (meteo === "Pioggia") {
    console.log("Ricordati l'ombrello");
} else if (meteo === "Sole") {
    console.log("RIcorda gli occhiali da sole");    
}

// truthy falsy
if("ciao"){
    console.log("Stringa truthy perchè non vuota");
    // essendo truthy una stringa non vuota, la condizione verrà compilata
}

if("") {
    console.log("non stampa nulla perchè falsy/false");
    // la stringa vuota come 0 NaN e null, è un falsy e quindi non verrà eseguita la condizione
}

// condizioni IF ELSE
let eta = 16;

// valutà se età è maggiore di 18
if (eta >= 18){
    console.log("Accesso consentito");
} else {
    console.log("Accesso negato");
}

//alternativa con condizione ternario
let login = "SI";
let accesso = ("SI") ? true : false;
console.log(accesso);


// prova if else
let auto = true;
let patente = true;

if (auto === true && patente === true) {
    console.log("Puoi guidare");    
} else {
    console.log("Non puoi guidare");
}