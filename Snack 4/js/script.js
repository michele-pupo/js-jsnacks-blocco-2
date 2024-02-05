// Snack 4:
//  - Chiedi un numero di 4 cifre all’utente
//  - e calcola la somma di tutte le cifre che compongono il numero.

// chiediamo all'utente di inserire un numero di 4 cifre
const number = prompt("Scrivi un numero di 4 cifre");

// convertiamo il numero in una stringa
let numberStringa = number.toString();

// console.log(numberStringa);

let sumNumbers = 0;

// prendiamo ogni cifra delle stringa e la sommiamo
for (let i = 0; i < numberStringa.length; i++){

    // sommiamo ogni cifra
    sumNumbers += parseInt(numberStringa[i]);
    // console.log(sumNumbers);

    // stampiamo la somma ottenuta in pagina
    document.querySelector("#sum").innerHTML = `${sumNumbers}`;
}