// Snack 2:
//  - Il software deve chiedere per 10 volte all’utente di inserire un numero.
//  - Il programma stampa la somma di tutti i numeri inseriti.

// chiedo all'utente di inserire per 10 volte un numero tramite il prompt ed un ciclo for
const numbers = [];
let number;

for (let i = 0; i < 10; i++){
  number = parseInt(prompt('Inserisci un numero'));
  numbers.push(number);
}
// console.log(numbers);

// variabile per la somma
let sumNumbers = 0;

// ciclo for per sommare gli elementi dell'array
for (let i = 0; i < numbers.length; i++) {

    sumNumbers += numbers[i];
    // console.log(sumNumbers);
    document.querySelector("#sum").innerHTML = `${sumNumbers}`;
}