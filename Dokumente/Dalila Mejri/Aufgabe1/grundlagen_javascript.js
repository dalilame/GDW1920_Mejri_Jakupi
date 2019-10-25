
// Aufgabe 1
const name = 'Dalila Mejri';
console.log(name);

// Aufgabe 2
const maxbewertung = 5;
let anzahlbewertung;
var bewertung;

anzahlbewertung = 20;
bewertung = 4; 

function gibBewertung() {
    console.log(`Die Aktuelle Bewertung: ${bewertung}/${maxbewertung}`);
    console.log(`Die Anzahl der Bewertungen: ${anzahlbewertung}`);
}
gibBewertung();

// anzahlbewertung = "hans"; // Javaskript hat eine dynamische Typzuweisung also kein Fehler
anzahlbewertung = 40;
bewertung = 4.5;

console.log(`Die Aktuelle Bewertung: ${bewertung}/${maxbewertung}`);
console.log(`Die Anzahl der Bewertungen: ${anzahlbewertung}`);
// Die Variablen nehmen den Wert einfach an 
// maxbewertung = 6 funktioniert nicht weil es eine constante ist, diese sind unveränderlich, passiert Fehlermeldung

//Aufgabe 3
// Einbinden des readline moduls
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// rl.question('Wie viele Sterne verleihst du unserer App?', function(answer) {
// console.log(`Danke für deine Bewertung von ${answer} Sternen!`); // Hier geben wir die eingegebene answer aus

// if(parseInt(answer)<=maxbewertung){
//     anzahlbewertung++;
//     bewertung = (bewertung+parseInt(answer))/2;
//     gibBewertung();
// } else { 
//     console.log('Deine Eingabe war nicht valide, bitte versuch es erneut.')
// }
// rl.close();
// });

//Aufgabe 5
function bewertungsberechnung(abgegebenebewertung){
    bewertung = Math.floor((bewertung+ abgegebenebewertung)/2);
    anzahlbewertung++;
}


//Aufagbe 4
rl.question('Wie oft möchtest du die Bewertung durchführen?', function(answer) {
    // console.log(`Danke für deine Bewertung von ${answer} Sternen!`); // Hier geben wir die eingegebene answer aus
    for (let index = 0; index < parseInt(answer); index++) {
        
        let abgegebenebewertung = Math.random()*5;
        console.log('Die abgegebene Bewertung lautet: '+ Math.floor(abgegebenebewertung));
        bewertungsberechnung(abgegebenebewertung);
        gibBewertung();
    }
    rl.close();
    });

