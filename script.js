var ffklikke = document.querySelector(".T");

ffklikke.addEventListener('click', function() {
  ffklikke.classList.toggle("klikklik")
})

var ffklikke1 = document.querySelector(".Y");

ffklikke1.addEventListener('click', function() {
  ffklikke1.classList.toggle("klikklik1")
})

var ffklikke2 = document.querySelector(".P1");

ffklikke2.addEventListener('click', function() {
  ffklikke2.classList.toggle("klikklik2")
})

var ffklikke3 = document.querySelector(".O");

ffklikke3.addEventListener('click', function() {
  ffklikke3.classList.toggle("klikklik3")
})

var ffklikke4 = document.querySelector(".G");

ffklikke4.addEventListener('click', function() {
  ffklikke4.classList.toggle("klikklik4")
})

var ffklikke5 = document.querySelector(".R");

ffklikke5.addEventListener('click', function() {
  ffklikke5.classList.toggle("klikklik5")
})

var ffklikke6 = document.querySelector(".A");

ffklikke6.addEventListener('click', function() {
  ffklikke6.classList.toggle("klikklik6")
})

var ffklikke7 = document.querySelector(".P2");

ffklikke7.addEventListener('click', function() {
  ffklikke7.classList.toggle("klikklik7")
})

var ffklikke8 = document.querySelector(".P2");

ffklikke8.addEventListener('click', function() {
  ffklikke8.classList.toggle("klikklik8")
})

var ffklikke9 = document.querySelector(".H");

ffklikke9.addEventListener('click', function() {
  ffklikke9.classList.toggle("klikklik9")
})

var ffklikke10 = document.querySelector(".I");

ffklikke10.addEventListener('click', function() {
  ffklikke10.classList.toggle("klikklik10")
})

var ffklikke11 = document.querySelector(".E");

ffklikke11.addEventListener('click', function() {
  ffklikke11.classList.toggle("klikklik11")
})

var toetsklik = document.querySelector(".T");

document.addEventListener("keypress",function(e) {
  if(e.keyCode === 116) {
  toetsklik.classList.toggle("toetsklikken");
  }
});

var toetsklik1 = document.querySelector(".Y");

document.addEventListener("keypress",function(e) {
  if(e.keyCode === 121) {
  toetsklik1.classList.toggle("toetsklikken");
  }
});

// 1. uitlezen wanneer er wordt geklikt op element naar keuze
// 2. kan ik iets "console.loggen" op deze klik ("hallo")
// 3. als ik er een actie aan kan koppelen, dan kan ik op de 'click'-interactie ook een "class" toekennen aan het element
// 4. heeft het element nu ik geklik heb, ineens de class gekregen?
// 5. uitschrijven wat het element moet doen nu het die class heeft gekregen.
