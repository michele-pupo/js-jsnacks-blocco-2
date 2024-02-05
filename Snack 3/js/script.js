// Snack 3:
// - Crea un array vuoto.
// - Chiedi per 6 volte all’utente di inserire un numero,
// - Solo se è dispari inseriscilo nell’array.
// - Stampa a schermo il contenuto dell'array

// chiedo all'utente di inserire per 6 volte un numero tramite il prompt ed un ciclo for
const numbers = [];
let number;

for (let i = 0; i < 6; i++){
  number = parseInt(prompt('Inserisci un numero'));

  // se il numero non sarà divisibile per 2 sarà dispari  
  if (number % 2 != 0){

    // se il numero è dispari, inseriscilo nell'array
    numbers.push(number)
  }
} 
// console.log(numbers);

// creo la variabile per stampare in pagina il risultato
const numberShots = document.querySelector("#shots")

for (let i = 0; i < numbers.length; i++){

    // creo un nuovo elemento li
    const newElement = document.createElement("li");

    // scrivo il numero preso dall'array di numeri dispari
    newElement.innerText = numbers[i];
    
    // lo appendo alla lista in pagina
    numberShots.append(newElement);
}

