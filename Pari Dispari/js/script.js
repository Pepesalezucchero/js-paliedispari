/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

//l’utente sceglie pari o dispari e inserisce un numero da 1 a 5
const userNum = parseInt(prompt("Scegli un numero da 1 a 5. Il computer farà uguale e i due numeri verranno sommati"));
console.log("Numero scelto", userNum);

//controllo se l'utente ha rispettato la regola
if (userNum > 5 || userNum < 1) {

    if (alert("Ehh no, ho detto scegli un numero da 1 a 5.")){

    } else {
        window.location.reload();
    }
};

//adesso, faccio generare al pc un numero random
const pcRandomNum = randomNum();
console.log("Numero scelto dal computer", pcRandomNum);

//risultato finale e scelta del vincitore :)
const risultato = finale();

//funzioni

//funzione che genera un numero random
function randomNum () {
    const RandomNum = Math.floor(Math.random() * 5) + 1;
    return RandomNum;
}

//funzione che definisce se la somma dei due numeri è pari o dispari
function finale () {
    let risultato = userNum + pcRandomNum
    console.log("Somma dei due numeri", risultato);

    if (risultato % 2 === 0) {
        console.log(risultato, "è un numero pari");
    } else {
        console.log(risultato, "è un numero dispari");
    }
};