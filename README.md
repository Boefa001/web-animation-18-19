# web-animation-18-19
🎓 Web Animation · 2018-2019 · Curriculum and Syllabus 

**Grid**
Voor het vak Web Animatie heb ik een poster moeten kiezen die ik online heb geanimeerd. Ik ben begonnen met het coderen van
de elementen die zich binnen mijn poster bevinden. Nadat ik dit had gedaan, kwam ik erachter dat er zonder grid-layout niet 
voor kon zorgen dat mijn elementen zich op de juiste plek positioneerde in mijn poster. Hierom heb ik deze dan ook aangemaakt. 
Ik heb een grid-container gemaakt van 10 rijen, bij 10 kolommen met een gap van 5px, gebasseerd op het orgineel. Binnen deze
container heb ik de elementen toegevoegd door gebruik te maken van de rijen en kolommen binnen mijn container. Deze zorgde ervoor
dat ik mijn elementen goed kon positioneren. 

**Animatie 1**

Voor de eerste animatie zorg ik ervoor dat mijn elementen bij het 'refreshen' van de pagina infaden. Dit doe ik doormiddag van de
volgende code. 

```
.T span {
    animation: fade 3s ease;
}

Zodra de animatie begint wordt de opacity hoger en fade deze uiteindelijk weer weg.

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

**Animatie 2**

Bij de tweede animatie maak ik gebruik van een hover. Deze pas ik alleen toe op de letters die kunnen spiegelen, omdat anders de
letter niet van as veranderd. Ik heb voor dit effect gekozen omdat bepaalde letters binnen mijn posters ook gespiegeld zijn. De
code die ik hiervoor heb gebruikt heb ik van de website: http://a-shops-ranking.com/questions/1244/kun-je-css-gebruiken-om-tekst-te-spiegelen-omkeren.
De code die ik hiervoor heb gebruikt is: 
* De transitie heb ik 1s gegeven, zodat de letter geleidelijk draait en deze een transitie heeft. 

```
.P1:hover {
  transition-duration: 1s;  
-moz-transform: scale(-1, 1);
-webkit-transform: scale(-1, 1);
-o-transform: scale(-1, 1);
-ms-transform: scale(-1, 1);
transform: scale(-1, 1);
}
```

**Animatie 3**

Bij de derde animatie heb ik gekozen een klik te gebruiken. Gedurende deze klik veranderd de kleur van mijn div. De kleuren heb
ik van de website: https://mycolor.space/gradient. Binnen de code heb ik een variabele aangemaakt en daarin de class .T (span)
opgeslagen. Hierna heb ik er een event aan toegevoegd (klikken) en ervoor gezorgd dat deze een toggle heeft, dus dat je deze 
ook weer kunt stoppen gedurende de animatie. Ik geef een class mee aan die variabele, namelijk 'klikklik', die ik in mijn CSS 
bewerk. In deze CSS zorg ik er ook weer voor dat mijn animatie een transitie heeft zodat deze goed overloopt. 

```
var ffklikke = document.querySelector(".T");

ffklikke.addEventListener('click', function() {
  ffklikke.classList.toggle("klikklik")
})

.klikklik {
  opacity: 1;
  background-image: linear-gradient(to bottom, #9be15d, #aee34f, #c1e53f, #d6e62d, #ebe616);
  animation: faden 1s ease-in;
}

@keyframes faden {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

**Animatie 4**
Bij mijn vierde animatie heb ik een keypress animatie toegevoegd. Gedurende deze animatie laat ik de gehele div 1 rondje draaien. 
Bij deze animatie maak ik opnieuw een variabel aan die een class opslaat. Hier heb ik ook weer een event aan toegevoegd, keypress 
en hier ook weer een toggle aan toegevoegd. Hierna geef ik mijn class de variabele 'toetsklikken', die ik binnen mijn CSS opnieuw
bewerk. Binnen mijn CSS zorg is ervoor dat mijn animatie opnieuw een transitie heeft (ease-in). 

```
var toetsklik = document.querySelector(".T");

document.addEventListener("keypress",function(e) {
  if(e.keyCode === 116) {
  toetsklik.classList.toggle("toetsklikken");
  }
});

.toetsklikken {
  animation: rotations 1.5s ease-in;
}

@keyframes rotations {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
}
```

