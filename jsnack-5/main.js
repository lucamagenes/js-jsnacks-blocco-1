//crea un array vuoto

//chiedi all'utente per 6 volte un numero

//se il numero è dispari 

//inseriscilo nell'array

/* strumenti

- array vuoto
- for
- prompt
- if 

*/


const dispari = [];

for (let index = 0; index < 6; index++) {

    const numeri = parseInt(prompt('scrivi un numero'))
    console.log(numeri);

    if (numeri % 2 != 0) {
        dispari.push(numeri)
        console.log(dispari);
    }

}