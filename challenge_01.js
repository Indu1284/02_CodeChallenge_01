
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

let Value1;
let Value2;
let summ;

Value1 = prompt("Please enter the first value:");
Value2 = prompt("Please enter the second value:");
summ = Number(Value1) + Number(Value2);
console.log("The result is:" + summ);
/*********** Variante 1  ****************/

// Vorteil: gute Lesbarkeit | aber viele Variablen

/*
// Deklaration
let ziffer1, ziffer2;
let zahl1, zahl2, summe;
// Eingabe :: Ziffern
ziffer1 = prompt("Bitte Zahl 1 eingeben"); // 2
ziffer2 = prompt("Bitte Zahl 2 eingeben"); // 2
console.log(typeof ziffer1);
console.log(typeof ziffer2);
// Typkonvertierung | Ziffer --> Zahl (string --> number)
zahl1 = parseInt(ziffer1);
zahl2 = parseInt(ziffer2);
console.log(typeof zahl1);
console.log(typeof zahl2);
// Berechnung :: Summe
summe = zahl1 + zahl2; 
console.log("Die Summe ist: " + summe);
*/

/*********** Variante 2  ****************/

// Kompaktere Lösung

/*
let zahl1, zahl2, summe;
zahl1 = parseInt(prompt("Bitte Zahl 1 eingeben"));
zahl2 = parseInt(prompt("Bitte Zahl 2 eingeben"));
summe = zahl1 + zahl2;
console.log("Die Summe ist: " + summe);
*/

/*********** Variante 3  ****************/
// Kompakt, aber schlecht lesbar

console.log
(
    "Die Summe ist: " + 
   (
    parseFloat(prompt("Bitte Zahl 1 eingeben")) +
    parseFloat(prompt("Bitte Zahl 2 eingeben"))
   ) 
);
