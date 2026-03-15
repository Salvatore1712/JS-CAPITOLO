function messaggio (domanda, yes, no) {
    if(confirm(domanda)) {
        yes()
    } else no()
}

function heSaidYes () {
    console.log("Hai accettato");
}

function heSaidNo () {
    console.log("Hai declinato");
}

messaggio("Sei bello?", heSaidYes, heSaidNo)