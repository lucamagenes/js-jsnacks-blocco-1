//utente inserisce 10 volte un numero

//stampa la somma di tutti i numeri

/* strumenti

- prompt
    - pareseInt
- somma
-innerhtml

*/

/* let numeroUno = parseInt(prompt('scrivi un numero'))
let numeroDue = parseInt(prompt('scrivi un numero'))
let numeroTre = parseInt(prompt('scrivi un numero'))
let numeroQuattro = parseInt(prompt('scrivi un numero'))
let numeroCinque = parseInt(prompt('scrivi un numero'))
let numeroSei = parseInt(prompt('scrivi un numero'))
let numeroSette = parseInt(prompt('scrivi un numero'))
let numeroOtto = parseInt(prompt('scrivi un numero'))
let numeroNove = parseInt(prompt('scrivi un numero'))
let numeroDieci = parseInt(prompt('scrivi un numero')) */

//const somma = numeroUno + numeroDue + numeroTre + numeroQuattro + numeroCinque + numeroSei + numeroSette + numeroOtto + numeroNove + numeroDieci

//console.log(somma);

//document.querySelector('h1').innerHTML = somma


let result = 0;

for (let index = 0; index < 10; index++) {
    const user_number = parseInt(prompt('scrivi un numero'));

    result += user_number;
}

console.log(result);