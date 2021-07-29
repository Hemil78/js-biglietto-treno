//numero di km che il passeggero vuole percorrere
var km = prompt("Quanti km vuoi percorrere?");
console.log(km);
document.getElementById('km').innerHTML += km;
//età del passeggero
var eta = prompt("Quanti anni hai?");
console.log(eta);
document.getElementById('eta').innerHTML += eta;
//prezzo totale del viaggio in base a:
//0.21 € al km
var prezzoKm = km * 0.21;
//20% sconto ai minorenni
if (eta < 18) {
    prezzoKm = (prezzoKm - ((prezzoKm / 100) * 20));
}
//40% sconto over 65
if (eta >= 65) {
    prezzoKm = (prezzoKm - ((prezzoKm / 100) * 40));
}

//prezzo indicato con max 2 decimali
document.getElementById('prezzoKm').innerHTML += prezzoKm.toFixed(2);