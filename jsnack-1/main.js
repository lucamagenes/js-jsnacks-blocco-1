//l'utente inserisce due numeri in successione
// utilizzando 2 prompt

//il software stampa il maggiore


/* strumenti

- prompt
 - parseint

- if / else
- querySelector
- innerhtml

*/


const firstNumber = parseInt(prompt('Inserisci un numero da 0 a 10'))

const secondNumber = parseInt(prompt('Inserisci un numero da 0 a 10'))

console.log(firstNumber, secondNumber);

if (firstNumber > secondNumber) {
    document.querySelector('h1').innerHTML = firstNumber
} else {
    document.querySelector('h1').innerHTML = secondNumber

}