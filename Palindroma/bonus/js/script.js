/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//chiedo una parola all'utente
const inputParola = document.getElementById("my_input");
let userParola = inputParola.value;
console.log("La parola scelta è:", userParola);

//creo la funzione
const sendButton = document.querySelector(".send")
sendButton.addEventListener ("click",

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
            const userParolafinale = document.querySelector(".parola");
            userParolafinale.append(`la parola ${userParola} è palindrome`);
            console.log("La parola scelta è palindrome");

        } else {
            const userParolafinale = document.querySelector(".parola");
            userParolafinale.append(`la parola ${userParola} non è palindrome`);
            console.log("La parola scelta non è palindrome");
        }
    }
);