let domanda = prompt("Sei fidanzata? SI o NO");

let messaggio = (domanda === "SI" || domanda === "si") ? "Ok la nostra relazione è finita" : "Evvai quest'estate si cucca!!";
let paragrafo = document.querySelector(".risposta");
paragrafo.textContent = messaggio;