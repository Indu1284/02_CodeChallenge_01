
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
