//chiedi un numero di 4 cifre
// calcola somma di tutte le cifre
/* 
const userNumber = prompt('scrivi un numero di 4 cifre');
console.log(userNumber);

const myArray = userNumber.split('');
console.log(myArray);

const numberUno = parseInt(myArray[0])
const numberDue = parseInt(myArray[1])
const numberTre = parseInt(myArray[2])
const numberQuattro = parseInt(myArray[3])

console.log(numberUno + numberDue + numberTre + numberQuattro);
 */


let sum = 0

const num_utente = prompt('scrivi un numero');

for (let index = 0; index < num_utente; index++) {
    const numb = parseInt(num_utente[index])
    sum += numb
}

console.log(sum);