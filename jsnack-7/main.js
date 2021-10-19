//stampa le potenze di 2 fino a 1000

let numero = 2

let esponente

const ul = document.querySelector('ul')
/* 
let i = 0;

do {

    esponente = i

    let potenze = numero ** esponente;
    console.log(numero ** esponente);

    let li = document.createElement('li');
    li.append(potenze);
    ul.append(li);





    i++
} while (i < 1000) */


let n = 0;

while (Math.pow(2, n) < 1000) {
    console.log(Math.pow(2, n));
    n++
}