//l' utente inserisce due parole in successione
//usando 2 prompt

//il software stampa prima la parola più corta
//poi quella più lunga

/* strumenti

- prompt

- if / else
    - .lenght
- innerhtml

 */

const firstWord = prompt('Scrivi una parola');
const secondWord = prompt('Scrivi una parola');

if (firstWord.length > secondWord.length) {
    document.querySelector('h1').innerHTML = secondWord + ' ' + firstWord
} else {
    document.querySelector('h1').innerHTML = firstWord + ' ' + secondWord
}