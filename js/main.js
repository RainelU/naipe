let naipe_numero = [8, 9, 10, 7, 5, 6, 4, 3, 2, "A", "J", "Q", "K"];
let naipe_icono = ["Diamonds","Spades","Hearts","Clubs"];

const aleat = getAleatNaipeAleatorio();
const aleat2 = getAleatNaipeIcono();

const naipe_resultado = naipe_icono[aleat2] + '<br>' + naipe_numero[aleat];
const naipe_medium = naipe_numero[aleat];
const naipe_iconos = naipe_icono[aleat2];
const naipe_resultado2 = naipe_numero[aleat] + '<br>' + naipe_icono[aleat2];

const icono = getIcono(naipe_icono[aleat2]);

function getAleatNaipeAleatorio(max, min) {
	return Math.floor(Math.random() * (13 - 0) + 0);
}

function getAleatNaipeIcono(max, min) {
	return Math.floor(Math.random() * (4 - 0) + 0);
}

function myFunction() {

	document.getElementById("medium").innerHTML = naipe_medium;
}

myFunction();

document.getElementById("naipe1").classList.add("naipe1");
document.getElementById("naipe1").classList.add(icono);
document.getElementById("naipe").classList.add("naipe");

function getIcono(naipe_icono) {
	switch(naipe_icono){
		case"Diamonds":return"suit-diamonds";break;
		case"Spades":return"suit-spades";break;
		case"Hearts":return"suit-hearts";break;
		case"Clubs":return"suit-clubs";break;
	}
}


console.log(icono);

getIcono();
