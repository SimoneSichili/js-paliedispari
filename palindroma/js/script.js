function isPalindrome(word) {

    var palindrome = word.toLowerCase().split("").reverse().join("");

    if (word == palindrome) {
        return true;
    } else {
        return false;
    }
    
}

//-------------------------------------------------

var userWord =  prompt("Inserisci una parola");
document.getElementById("user-word").innerHTML = userWord;



if (isPalindrome(userWord)) {
    console.log("la parola è palindroma");
    messaggio = "la parola è palindroma";
} else {
    console.log("la parola non è palindroma");
    messaggio = "la parola non è palindroma";
}

document.getElementById("result").innerHTML = messaggio;