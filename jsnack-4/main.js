//array contiene lista partecipanti

//chiedi all'utente il nome

//controlla se il nome è inserito

/* strumenti

- array
- prompt
- if / else
- innerhtml

*/


const partecipanti = ['francesco', 'sofia', 'mattia', 'giulia', 'andrea', 'alice', 'riccardo', 'greta'];

const nomeUtente = prompt('come ti chiami?');

for (let index = 0; index < partecipanti.length; index++) {
    const partecipante = partecipanti[index];
    console.log(partecipante);

    if (nomeUtente === partecipante) {
        document.querySelector('h1').innerHTML = 'Sei stato invitato!'
    } else {
        document.querySelector('h1').innerHTML = 'Non puoi partecipare!'

    }
}
