//chiedi un numero di 4 cifre
// calcola somma di tutte le cifre

const userNumber = prompt('scrivi un numero di 4 cifre');
console.log(userNumber);

const myArray = userNumber.split('');
console.log(myArray);

const numberUno = parseInt(myArray[0])
const numberDue = parseInt(myArray[1])
const numberTre = parseInt(myArray[2])
const numberQuattro = parseInt(myArray[3])

console.log(numberUno + numberDue + numberTre + numberQuattro);
