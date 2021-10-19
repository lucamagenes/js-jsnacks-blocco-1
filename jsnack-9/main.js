//calcola la somma e la media dei primi 10 numeri
/* 
const numeri = [];

for (let index = 1; index < 100; index++) {
    const element = index;

    if (element <= 10) {

        numeri.push(element)
    }


}
const sum = numeri[0] + numeri[1] + numeri[2] + numeri[3] + numeri[4] + numeri[5] + numeri[6] + numeri[7] + numeri[8] + numeri[9]
console.log(sum);
const media = sum / 10
console.log(media);
 */


let sum = 0;
let avg = 0;

for (let index = 0; index <= 10; index++) {
    sum += index;

}
avg = sum / 10

console.log(sum);
console.log(avg);