/*Klikanimatie 1*/
var ffklikke = document.querySelector(".T");

ffklikke.addEventListener('click', function() {
  ffklikke.classList.toggle("klikklik")
})

/*Klikanimatie 2*/
var ffklikke1 = document.querySelector(".Y");

ffklikke1.addEventListener('click', function() {
  ffklikke1.classList.toggle("klikklik1")
})

/*Klikanimatie 3*/
var ffklikke2 = document.querySelector(".P1");

ffklikke2.addEventListener('click', function() {
  ffklikke2.classList.toggle("klikklik2")
})

/*Klikanimatie 4*/
var ffklikke3 = document.querySelector(".O");

ffklikke3.addEventListener('click', function() {
  ffklikke3.classList.toggle("klikklik3")
})

/*Klikanimatie 5*/
var ffklikke4 = document.querySelector(".G");

ffklikke4.addEventListener('click', function() {
  ffklikke4.classList.toggle("klikklik4")
})

/*Klikanimatie 6*/
var ffklikke5 = document.querySelector(".R");

ffklikke5.addEventListener('click', function() {
  ffklikke5.classList.toggle("klikklik5")
})

/*Klikanimatie 7*/
var ffklikke6 = document.querySelector(".A");

ffklikke6.addEventListener('click', function() {
  ffklikke6.classList.toggle("klikklik6")
})

/*Klikanimatie 8*/
var ffklikke7 = document.querySelector(".P2");

ffklikke7.addEventListener('click', function() {
  ffklikke7.classList.toggle("klikklik7")
})

/*Klikanimatie 9*/
var ffklikke9 = document.querySelector(".H");

ffklikke9.addEventListener('click', function() {
  ffklikke9.classList.toggle("klikklik9")
})

/*Klikanimatie 10*/
var ffklikke10 = document.querySelector(".I");

ffklikke10.addEventListener('click', function() {
  ffklikke10.classList.toggle("klikklik10")
})

/*Klikanimatie 11*/
var ffklikke11 = document.querySelector(".E");

ffklikke11.addEventListener('click', function() {
  ffklikke11.classList.toggle("klikklik11")
})

/*klikanimatie 1*/
var toetsklik = document.querySelector(".T");

document.addEventListener("keypress",function(e) {
  if(e.keyCode === 116) {
  toetsklik.classList.toggle("toetsklikken");
  }
});

/*klikanimatie 2*/
var toetsklik1 = document.querySelector(".Y");

document.addEventListener("keypress",function(e) {
  if(e.keyCode === 121) {
  toetsklik1.classList.toggle("toetsklikken");
  }
});

/*klikanimatie 3*/
var toetsklik2 = document.querySelector(".P1");

document.addEventListener("keypress",function(e) {
  if(e.keyCode === 112) {
  toetsklik2.classList.toggle("toetsklikken");
  }
});

/*klikanimatie 4*/
var toetsklik3 = document.querySelector(".O");

document.addEventListener("keypress",function(e) {
  if(e.keyCode === 111) {
  toetsklik3.classList.toggle("toetsklikken");
  }
});

/*klikanimatie 5*/
var toetsklik4 = document.querySelector(".G");

document.addEventListener("keypress",function(e) {
  if(e.keyCode === 103) {
  toetsklik4.classList.toggle("toetsklikken");
  }
});

/*klikanimatie 6*/
var toetsklik5 = document.querySelector(".R");

document.addEventListener("keypress",function(e) {
  if(e.keyCode === 114) {
  toetsklik5.classList.toggle("toetsklikken");
  }
});

/*klikanimatie 7*/
var toetsklik6 = document.querySelector(".A");

document.addEventListener("keypress",function(e) {
  if(e.keyCode === 97) {
  toetsklik6.classList.toggle("toetsklikken");
  }
});

/*klikanimatie 8*/
var toetsklik7 = document.querySelector(".P2");

document.addEventListener("keypress",function(e) {
  if(e.keyCode === 112) {
  toetsklik7.classList.toggle("toetsklikken");
  }
});

/*klikanimatie 9*/
var toetsklik8 = document.querySelector(".H");

document.addEventListener("keypress",function(e) {
  if(e.keyCode === 104) {
  toetsklik8.classList.toggle("toetsklikken");
  }
});

/*klikanimatie 10*/
var toetsklik9 = document.querySelector(".I");

document.addEventListener("keypress",function(e) {
  if(e.keyCode === 105) {
  toetsklik9.classList.toggle("toetsklikken");
  }
});

/*klikanimatie 11*/
/* Variabele = een storage waarin je elementen uit je html in kan opslaan, hij heet in dit geval 'toetsklik10' */
/* Je selecteert met document.querySelector elementen uit de html,
je kunt hier een class meegeven die een element heeft in html, of het html element zelf.
In dit geval wordt er een class meegegeven, namelijk .E die hoort bij een element span in html met de letter E. */
var toetsklik10 = document.querySelector(".E");

/* hier link je aan addEventListener aan de document (je html), en je geeft daar een functie aan mee.
Zodra er op keycode 101 wordt gedrukt, dus wanneer de ingedrukte keycode gelijk is aan (===) 101,
dan wordt er een class toegevoegd aan het variabele die voor de classList.toggle staat.
Dus het html element met de class .E krijgt de class '.toetsklikken' mee. Deze class staat in css en dat is een animatie.
hij is met een toggle gelinkt, dat betekent dat zodra de gebruiker 1x drukt op die toets, dat de class 'toetsklikken' wordt
toegevoegd, en zodra de gebruiker nog een keer drukt op diezelfde toets, wordt die class weer verwijderd.
door keypress wordt de functie geactiveerd.  */
document.addEventListener("keypress",function(e) {
  if(e.keyCode === 101) {
  toetsklik10.classList.toggle("toetsklikken");
  }
});


/*Mobiel en App*/
toetsklik.addEventListener("dblclick", function(){
  toetsklik.classList.toggle("toetsklikken")
});

toetsklik1.addEventListener("dblclick", function(){
  toetsklik1.classList.toggle("toetsklikken")
});

toesklik3.addEventListener("dblclick", function(){
  toetsklik2.classList.toggle("toetsklikken")
});

toetsklik3.addEventListener("dblclick", function(){
  toetsklik3.classList.toggle("toetsklikken")
});

toetsklik4.addEventListener("dblclick", function(){
  toetsklik4.classList.toggle("toetsklikken")
});

toetsklik5.addEventListener("dblclick", function(){
  toetsklik5.classList.toggle("toetsklikken")
});

toetsklik6.addEventListener("dblclick", function(){
  toetsklik6.classList.toggle("toetsklikken")
});

toetsklik7.addEventListener("dblclick", function(){
  toetsklik7.classList.toggle("toetsklikken")
});

toetsklik8.addEventListener("dblclick", function(){
  toetsklik8.classList.toggle("toetsklikken")
});

toetsklik9.addEventListener("dblclick", function(){
  toetsklik9.classList.toggle("toetsklikken")
});

toetsklik10.addEventListener("dblclick", function(){
  toetsklik10.classList.toggle("toetsklikken")
});

// 1. uitlezen wanneer er wordt geklikt op element naar keuze
// 2. kan ik iets "console.loggen" op deze klik ("hallo")
// 3. als ik er een actie aan kan koppelen, dan kan ik op de 'click'-interactie ook een "class" toekennen aan het element
// 4. heeft het element nu ik geklik heb, ineens de class gekregen?
// 5. uitschrijven wat het element moet doen nu het die class heeft gekregen.
