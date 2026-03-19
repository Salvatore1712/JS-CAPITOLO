// fragment

const frammento = document.createDocumentFragment();
let lista = document.querySelector(".lista");

for (let i = 0; i < 3; i++) { // itera per la costruzione di 3 li
    let liTag = document.createElement("li")
    liTag.textContent = "elemento " + (i + 1);
    frammento.append(liTag)
}

lista.append(frammento)
