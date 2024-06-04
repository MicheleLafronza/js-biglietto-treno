// creo variabile prezzo finale
let finalPrice;

// richiesta km da percorrere
let trip = parseInt(prompt("Quanti sono i km da percorrere per il viaggio?"));
console.log("Km da percorrere", trip);

// richiesta età del passeggero
let age = parseInt(prompt("Quanti anni ha il passeggero?"));
console.log("Anni del passeggero", age);

// calcolare prezzo totale del viaggio (0,21cents per km)
const price = 0.21;
console.log("Prezzo base per km", price);

let noDiscount = (trip*price);
console.log("Prezzo senza sconto", noDiscount);

// va applicato sconto per gli under 18 di 20%, oppure per gli over 65 di 40% sul prezzo finale
if (age < 18) {
    finalPrice = (noDiscount-(noDiscount*0.2));
} else if (age >= 65) {
    finalPrice = (noDiscount-(noDiscount*0.4));
} else {
    finalPrice = noDiscount;
}

// prezzo finale dopo sconto
console.log("Il prezzo del biglietto è di: ", finalPrice);