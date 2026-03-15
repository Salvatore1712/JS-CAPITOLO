
let titolo = document.querySelector("#titolo");
let paragrafo = document.querySelector(".paragrafo");

titolo.textContent = "Oggi Piove";
titolo.style.color = "red"; // cambia colore

paragrafo.style.fontSize = "20px"; // cambia font size

//AGGIUNGERE ELEMENTO E CREARLO

let listaMenu = document.createElement("ul");
listaMenu.textContent = "lista";


listaMenu.classList.add("brown")

let box = document.querySelector(".box");
box.append(listaMenu)

let button = document.createElement("button");
button.textContent = "INVIA";
box.append(button)

// create element crea un elemento HTML
// append lo inserisce nel dom ma va selezionato dove, il padre che lo contiene

let searchTimout;
let searchBar = document.querySelector("#searchBar")

searchBar.addEventListener("input", (Event) => {
    clearTimeout(searchTimout);

    searchTimout = setTimeout(() => {
        console.log(`Eseguo la ricerca per: ${Event.target.value}`);    
    }, 500);
});