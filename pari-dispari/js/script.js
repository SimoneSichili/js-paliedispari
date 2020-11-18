/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
Dichiariamo chi ha vinto. */

// #1 Chiedi all'utente di scegliere pari o dispari
var userSelection = prompt("Scegli tra pari e dispari");
console.log("Scelta tra pari e dispari:", userSelection);
document.getElementById("user-selection").innerHTML = userSelection;

// #2 Chiedi all'utente di scegliere un numero da 1 a 5
var userNumber = parseInt(prompt("Scegli un numero tra 1 e 5"));
console.log("Scelta di un numero utente tra 1 e 5:", userNumber);
document.getElementById("user-number").innerHTML = userNumber;

// #3 Generiamo un numero random da 1 a 5 per il PC (usando una funzione)
function randomNumber(min, max) {
    // Generazione numero random (min e max inclusi)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pcNumber = randomNumber(1, 5);
console.log("Generazione numero PC tra 1 e 5:", pcNumber);
document.getElementById("pc-number").innerHTML = pcNumber;

// #4 Sommiamo i due numeri
var sum = userNumber + pcNumber;
console.log("Somma di numero Utente e numero PC:", sum);
document.getElementById("sum").innerHTML = sum;


// #5 Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEven(numero) {
    if (sum % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var result = isEven(sum);

if (result == true) {
    result = "pari";
    console.log("La somma è:", result);
    document.getElementById("result").innerHTML = result;

} else {
    result = "dispari";
    console.log("La somma è:", result);
    document.getElementById("result").innerHTML = result;
}


// #6 Dichiariamo il vincitore
if (userSelection == result) {
    console.log("Hai vinto");
    document.getElementById("winner").innerHTML = "Hai vinto";
} else {
    console.log("Hai perso");
    document.getElementById("winner").innerHTML = "Hai perso";
}