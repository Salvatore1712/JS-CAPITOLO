/*
Esercizi bonus (livello quasi reale)
Bonus 1 — Todo list
Funzionalità:
    aggiungere attività
    completare attività
    eliminare attività
Concetti
DOM
eventi
classi CSS
*/

// attesa caricamento pagina
document.addEventListener("DOMContentLoaded", () => {

    // selezione delgi elementi
    const inputArea = document.querySelector("#inputText"); // input field
    const btnAggiungi = document.querySelector("#btnAggiungi"); // bottone add
    const listaUl = document.querySelector("#listaUl") // lista UL


    // funzione al click aggiungi
    function aggiungi() {

        const textInput = inputArea.value.trim() // testo inserito
        
        //crea gli elementi
        let itemLi = document.createElement("li"); // li
        let spanItem = document.createElement("span"); // tag span
        const btnElimina = document.createElement("button") // bottone elimina
        btnElimina.textContent = "Elimina"
        btnElimina.className = "btn"

        //inserire testo nello span
        spanItem.textContent = textInput

        //comporre la lista
        listaUl.appendChild(itemLi)
        itemLi.appendChild(spanItem)
        itemLi.appendChild(btnElimina)
        

        inputArea.value = "" //azzera il campo inserimento

    }

    btnAggiungi.addEventListener("click", aggiungi) // aggiunge funzione al click bottone aggiungi

    //eliminare o contrassegnare elemento della lista
    listaUl.addEventListener("click", (event) => {
        let eleClicked = event.target; //elemento cliccato

        // barra attività selezionata
        if(eleClicked.tagName === "SPAN") {
            const parenLi = eleClicked.parentElement;
            parenLi.classList.toggle("selected");
        }

        if (eleClicked.classList.contains("btn")) {
            const parenLi = eleClicked.parentElement;
            listaUl.removeChild(parenLi)

            /* se elemento cliccato contiene la classe desiderata,
                cioè il bottone, vai a selezionare il diretto parente superiore (li)
                ed eliminalo (elimina l'intera lista)
            */
        }
    })












}) //fine loader