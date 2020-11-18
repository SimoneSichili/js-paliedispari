/* Palindroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma. */

// #1 Creo la funziona per la verifica della parola
function isPalindrome(word) {

    var palindrome = word.toLowerCase().split("").reverse().join("");

    if (word == palindrome) {
        return true;
    } else {
        return false;
    }
    
}

//-------------------------------------------------

// #2 Chiedo all'utente di inserire una parola
var userWord =  prompt("Inserisci una parola");
document.getElementById("user-word").innerHTML = userWord;

// #3 Verifico che la parola sia palindroma
if (isPalindrome(userWord)) {
    console.log("la parola è palindroma");
    messaggio = "la parola è palindroma";
} else {
    console.log("la parola non è palindroma");
    messaggio = "la parola non è palindroma";
}

document.getElementById("result").innerHTML = messaggio;