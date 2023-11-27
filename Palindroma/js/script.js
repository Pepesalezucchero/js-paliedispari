/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//chiedo una parola all'utente
const userParola = (prompt("Scrivi una parola, con la magia arcana a te sconosciuta ti dirò se hai scritto una parola PALINDROMA o no :)."));
console.log("Parola scelta:", userParola);

//richiamo la funzione
parolaPalindroma (userParola);

//creo la funzione
function parolaPalindroma () {

    //divido la parola in lettere
    let userLettereParola = userParola.split("");
    console.log("Lettere nella parola scelta:", userLettereParola);

    //inverto l'ordine delle lettere della parola
    userLettereParola = userLettereParola.reverse("");
    console.log("Lettere della parola invertite:", userLettereParola);

    //a questo punto riunisco le lettere invertite e ricreo una parola
    const userParolaInvertita = userLettereParola.join("");
    console.log("Lettere invertite riunite nella parola scelta:", userParolaInvertita);

    //qui verifico che la parola scritta normale sia uguale alla parola invertita
    if(userParola === userParolaInvertita){
        console.log("La parola scelta è palindroma");

    } else {
    console.log("La parola scelta non è palindroma");

    };
};