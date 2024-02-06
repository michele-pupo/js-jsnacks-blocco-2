// Snack 2
// - Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. 
// - Il programma poi deve far comparire un messaggio "il numero è troppo alto" 
//   oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente 
//   non è perfettamente uguale al numero estratto in modo casuale.
// - Quando l'utente trova il numero, fateglielo sapere!


const secretNumberEl = document.getElementById("esito");


    document.querySelector("#start").addEventListener("click", function() {
    
            
        // numero casuale da 1 a 100 inclusi
        const randomNumber = Math.floor(Math.random() * 100) + 1;
    
        // scrivo in pagina
        secretNumberEl.innerText = randomNumber;
    
    
        // dichiariamo una variabile per il numero scelto dall'utente
        let userNumber;
    
        // inizializziamo il contatore dei tentativi
        let count = 0;
    
        do {
    
            userNumber = Number(prompt("Indovina il numero"));
    
            if(userNumber > randomNumber) {
                
                alert("Troppo alto");
    
            } else if (userNumber < randomNumber) {
    
                alert ("Troppo basso");
    
            }
    
            count++;
    
        } while (userNumber !== randomNumber);
    
        // l'utente ha indovinato
        console.log("Bravo hai vinto! Il numero era " + randomNumber + ". Hai fatto " + count + " tentativi.");
        secretNumberEl.classList.add("finish");
    
    });
