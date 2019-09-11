//Willem Xu Pizza calculator opdracht
var SM = 5 
var M = 10 
var L = 15 
alert("type hoeveel pizza's van welke grootte je wilt")//geeft aan om je keuzes in te typen

var small = (prompt("Small"));// geeft de pop up om te typen hoeveel small pizzas de persoon wilt
document.write("Aantal Small pizzas = ");//tekst met aantal small pizzas aan
document.write(small);//geeft aantal small pizzas aan
document.write("<br/>")//slaat een regel tekst over

var medium = (prompt("Medium"));
document.write("Aantal Medium pizzas = ");
document.write(medium);
document.write("<br/>")

var large = (prompt("Large"));
document.write("Aantal Large pizzas = ");
document.write(large);
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

document.write("Prijs small pizzas = &euro;" + (SM * small));//geeft prijs small pizzas
document.write("<br/>")

document.write("Prijs small pizzas = &euro;" + (M * medium));//geeft prijs meduium pizzas
document.write("<br/>")

document.write("Prijs small pizzas = &euro;" + (L * large));//geft prijs large pizzas
document.write("<br/>")
document.write("<br/>")
document.write("Prijs in totaal= &euro;" + (L * large + M * medium + SM * small));









