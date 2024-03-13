> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Red Pers 
## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Sinds juni 2023 is de website gelanceerd (misschien iets te vroeg) waarbij de website is opgezet met Wordpress en Elementor. Hierbij zitten een aantal bugs en is Red Pers geinteresseerd om afstand te doen van Elementor (een plugin van Wordpress). Red pers is een toegankelijk en inclusief opleidingsplatform dat is bedoeld om jonge, aspirerende journalisten. Bij dit platform kunnen deze jonge journalisten. Het bedrijf bestaat uit circa 50 mensen, die per half jaar doorstroomt om zo meer informatie op te doen over journalistiek. Dit bedrijf is vooral bedoelt om verschillende mensen die geïnteresseerd zijn in journalistiek een plekje tunnen geven in dit platform. Waarbij zij verschillende opdrachten en workshops zijn om hierover meer informatie op te doen.

![image](https://github.com/SamaraFellaDina/server-side-rendering-server-side-website/assets/144009778/f992c424-dd0e-45d5-b0f9-1df0482fa274)


### User Stories
De volgende User Stories zijn hiervoor gegeven:

* Als lezer wil ik het laatste artikel uitgelicht zien, zodat ik in een oogopslag kan weten of ik het al heb gelezen.
* Als lezer wil ik via mijn mobiel, tablet, en website gebruik kunnen maken van de website, zodat ik overal en ten alle tijden goed kan lezen. (Dit punt en dat over de verschillende browsers zijn eigenlijk meer * technische eisen.)
* Als lezer wil ik een overzicht hebben van de laatste artikelen in de verschillende katernen (categorieën), zodat ik weet wat Red Pers allemaal publiceert.
* Als potentieel werkgever wil ik direct kunnen zien wie een artikel geschreven heeft, zodat ik goede auteurs kan herkennen.
* Als potentieel werkgever wil ik een overzicht van de artikelen van een auteur kunnen zien, zodat ik het volledige werk van een auteur kan beoordelen.
* Idem ditto met de twee hierboven voor eindredacteuren (maar die functionaliteit is nog niet ingebouwd in de website, dus dat staat nog niet goed in de metadata).
* Als lezer wil ik makkelijk kunnen doneren, zodat Red Pers prachtige artikelen kan blijven publiceren. (🙂)
* Als lezer wil ik herinnerd worden aan de nieuwsbrief, zodat ik niet vergeet om me daarvoor aan te melden.

## Gebruik
<!--Bij Gebruik staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Het project maakt gebruik van de volgende dingen:
* Er wordt code geschreven via VS code
* Er wordt gebruik gemaakt van de [Wordpress API](https://redpers.nl/wp-json/wp/v2)



## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
* Maakt gebruik van een [Wordpress API](https://redpers.nl/wp-json/wp/v2)
* Maakt gebruik van server-side
* Maakt gebruik van [Cyclic](https://www.cyclic.sh/) hosting
* Maakt gebruik van een [project board](https://github.com/users/SamaraFellaDina/projects/8)
* Gebruik gemaakt van `node.js`, en `express`
  * Er zit ook een `helper` in die onder andere een `fetchJson` command gebruikt. 
  
## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
Ik maak gebruik van verschillende files. 
* Ik werk veel in de `/view` bestanden. Waarin de vormgeving (ookwel de frontend uiting) kan vinden. 
  * De pagina's, denk aan de `home.ejs` en `article.ejs`.
  * De `/partials` waarin je onder andere de `head.ejs` en `foot.ejs` kan vinden.
* Ik werk aan de `server.js` waarin de server wordt opgebouwd
  *  Hierin worden de routes gemaakt
  *  De port geselecteerd
  *  De express files geimporteerd
  *  Alle `Json`'s opgehaald


## Bronnen
[Red Pers JSON](https://redpers.nl/wp-json/wp/v2)
[Red Pers Website](https://redpers.nl/)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
