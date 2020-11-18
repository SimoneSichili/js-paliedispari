/* Palindroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma. */

// #1 METODO A Creo la funziona per la verifica della parola 
/* function isPalindrome(str) {

    var palindrome = str.toLowerCase().split("").reverse().join("");

    if (str == palindrome) {
        return true;
    } else {
        return false;
    }
    
} */

// #1 METODO B Creo la funziona per la verifica della parola
function isPalindrome(str) {
    
    var newStr = "";

    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    if (str == newStr) {
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