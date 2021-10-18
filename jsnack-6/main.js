//stampa il cubo dei primi N numeri

//N = numero indicato dall'utente


let number

let exponent = 3;

const ul = document.querySelector('ul')

let index = 0;
while (index < 100) {
    number = index
    console.log(number);

    console.log(number ** exponent);

    let li = document.createElement('li')
    li.append(number ** exponent)
    ul.append(li)

    const fermati = prompt('vuoi fermarti? [y/n]')
    if (fermati === 'y') {
        index = 100
        console.log('fine');
    }

    index++
}

