//selezione bottone
const btnMode = document.querySelector("#mode")
const titleH1 = document.querySelector(".container__title");
const card = document.querySelector(".card") // card intera
let cardText = document.querySelector(".card__text");

btnMode.addEventListener("click", ()=>{
    document.body.classList.toggle("light");
    titleH1.classList.toggle("rotazione");

    const testi = ["Ciao Mondo", "Hello World", "Hola", "Asante"];
    let indice = 0;

    setInterval(() => {
        if(titleH1) {
            titleH1.textContent = testi[indice];
            indice = (indice + 1) % testi.length;
        }
    }, 2000);

})


HTMLAudioElement.

card.addEventListener("click", ()=> {
    setTimeout(3);
    card.classList.toggle("rotazione360");
})