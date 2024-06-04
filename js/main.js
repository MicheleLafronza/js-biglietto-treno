// creo variabile prezzo finale
let finalPrice;
let message

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
    message = ("E' stato applicato uno sconto del 20%");
} else if (age >= 65) {
    finalPrice = (noDiscount-(noDiscount*0.4));
    message = ("E' stato applicato uno sconto del 40%");
} else {
    finalPrice = noDiscount;
    message = ("Nessuno sconto è stato applicato");
}
console.log("Prezzo prima dell'arrotondamento: ", finalPrice);

// arrotondamento prezzo finale dopo sconto
finalPrice = Math.round(finalPrice * 100) / 100;
console.log("Il prezzo del biglietto è di: ", finalPrice);
console.log(message);

// mostro dati sulla pagina
document.getElementById("trip").innerHTML ="I km da percorrere sono: " + trip;
document.getElementById("age").innerHTML ="Anni del passeggero: " + age;
document.getElementById("price").innerHTML ="Costo del biglietto per km: " + price;
document.getElementById("final-price").innerHTML ="Prezzo totale del biglietto: " + finalPrice;
document.getElementById("message").innerHTML = message;


