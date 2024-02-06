// Snack 3
// - Crea due array che hanno un numero di elementi diversi. 
// - Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. 
//   (Se iniziate con un array da 3 elementi e l'altro da 5, 
//   eseguite istruzioni sinchè non ne hanno entrambi 5)


// // creiamo 2 array che abbiano un numero diverso di elementi
let array1 = [10, 35, 49];
let array2 = [48, 59, 36, 87, 18, 54, 12, 89];

// Chiedi all'utente di inserire i numeri per il primo array finchè non raggiunge lo stesso numero di elemnti del secondo
do {
  
    let numbers = parseInt(prompt("Inserisci un numero per il primo array:"));
    
    array1.push(numbers);
   
  // finchè la lunghezza di array1 è minore della lunghezza di array2 chiederà all'utente di inserire numeri
  } while (array1.length < array2.length);

  // console.log("Array 1:", array1);
  // console.log("Array 2:", array2);

  // creo la variabile per stampare in pagina l'array1
  const numberInserted = document.querySelector("#array1")

  for (let i = 0; i < array1.length; i++){

      // creo un nuovo elemento li
      const newElement = document.createElement("li");

      // scrivo il numero preso dall'array di numeri dispari
      newElement.innerText = array1[i];
      
      // lo appendo alla lista in pagina
      numberInserted.append(newElement);
  }

  // creo la variabile per stampare in pagina l'array2
  const numberArray2 = document.querySelector("#array2")

  for (let i = 0; i < array2.length; i++){

      // creo un nuovo elemento li
      const newElement = document.createElement("li");

      // scrivo il numero preso dall'array di numeri dispari
      newElement.innerText = array2[i];
      
      // lo appendo alla lista in pagina
      numberArray2.append(newElement);
  }