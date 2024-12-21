---
exports: 
    - format: pdf
      template: curvenote
      output: exports/ch2.pdf  
downloads:
    - file: exports/ch2.pdf
    - file: ch2.md
---
# Introductie op de module Digitale Technologie

![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-14.jpg?height=1129&width=1500&top_left_y=355&top_left_x=215)

## Leerdoelen
**Kennis**
1. Kennismaken met basisbegrippen die in de digitale wereld gebruikt worden. De volgende basisbegrippen kun je uitleggen en gebruiken: sensor, analoog-digitaal conversie, interface, data, processor, dataopslag, datatransport, datacommunicatie, actuator, cloud, ic, programma, programmeren, algoritme, digitaal-analoog conversie.
2. Opbouw van een digitaal apparaat herkennen en beschrijven aan de hand een schematische weergave (het analyseschema digitale technologie).

**Vaardigheden**
3. Je kunt de functie van een digitaal apparaat uitleggen aan de hand van de basisfuncties waarnemen, data verwerken, beslissen, dataopslag en -transport, uitvoeren en terugkoppeling.
4. Je kunt de relatie tussen een fysieke grootheid en een numerieke (digitale) grootheid uitleggen en welke voor- en nadelen het heeft om informatie digitaal te verwerken.

In dit gedeelte maak je kennis met de basisbegrippen van digitale technologie en een manier om de onderdelen van een digitaal systeem te kunnen benoemen en herkennen: het analyseschema.

## Basisbegrippen

![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-15.jpg?height=1131&width=1506&top_left_y=671&top_left_x=266)

Figuur 2.1 Schema digitale technologie

Digitale technologie maakt gebruik van 'digitale' apparaten. Digitaal houdt in dat het apparaat signalen gebruikt die uit maar twee verschillende waarden (bits) bestaan: nul of een. Een rijtje bits vormt samen een klein blokje informatie, bijvoorbeeld een getal of een letter.

Alle apparatuur, die bij digitale technologie wordt gebruikt, heeft overeenkomstige onderdelen en functies. Figuur 2.1 geeft hiervan een schematisch overzicht. Sommige onderdelen komen in ieder digitaal apparaat voor. Wanneer onderdelen ontbreken, betekent het vaak dat een digitaal apparaat andere apparaten of de mens nodig heeft om te kunnen functioneren. Want: digitale apparaten/ digitale technologie bestaan omdat mensen daarmee werken. Altijd moet de verbinding tussen mens en machine gemaakt worden via interfaces (zoals schermen, knopjes en toetsenborden).

![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-15.jpg?height=152&width=1549&top_left_y=2437&top_left_x=256)

Figuur 2.2 Zintuig - hersenen - ledematen: waarnemen, verwerken en uitvoeren in ons lichaam.

Een digitaal systeem heeft veel overeenkomsten met onszelf. Wij hebben zintuigen om de omgeving waar te nemen, hersenen die informatie verwerken en beslissingen nemen voor ons handelen, en organen of ledematen die deze handelingen uitvoeren, zoals handen, benen of stembanden. Verandering van de omgeving nemen we weer waar met onze zintuigen, de feedback, om ons handelen weer te kunnen bijstellen.

![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-16.jpg?height=553&width=1098&top_left_y=266&top_left_x=770)

Figuur 2.3 Sensor (voor licht), processor (Arduino) en actuator (lichtschakelaar): waarnemen, verwerken en uitvoeren in een digitaal apparaat.


Met techniek zijn zintuigen, hersenen, organen en ledematen nagemaakt. Ze heten dan: sensoren, processoren en actuatoren. In plaats van zenuwvezels lopen er in een apparaat draadjes, die de signalen doorgeven.

## Algemene beschrijving van het schema

In het schema van een digitaal systeem (fig. 2.1) zijn vier belangrijke blokken te onderscheiden. Waarnemen - verwerken en beslissen - dataopslag en datatransport - uitvoeren. We leggen eerst uit wat er mee bedoeld wordt. In de vervolghoofdstukken gaan we elk van deze blokken verder uitwerken.

## 1. Waarnemen (hoofdstuk 3)

Figuur 2.4 Waarnemen
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-16.jpg?height=215&width=215&top_left_y=1914&top_left_x=104)

Figuur 2.5 Conversie

Als mens nemen we onze omgeving, de fysieke wereld, waar. Licht via onze ogen, aanraking met de huid, chemische stoffen in de lucht met onze neus, of bewegingen met ons evenwichtszintuig. Veel apparaten, die wij gebruiken, doen dat ook. Ze zijn uitgerust met sensoren. Een telefoon heeft bijvoorbeeld sensoren voor verplaatsing, licht (camera's), aanraking, warmte, geluid, magnetisme of radiogolven. Hiermee kunnen wij het apparaat bedienen, praten, foto's maken of onze positie bepalen. Door gegevens van sensoren op een slimme manier te combineren, kunnen veel dingen via een omweg gemeten worden, bijvoorbeeld het meten van verplaatsing door een camera te gebruiken.

Een sensor zorgt dat een fysische grootheid (bijvoorbeeld licht of temperatuur) naar een elektrisch signaal wordt omgezet. Het signaal uit de sensor is analoog (kan oneindig veel waarden aannemen) en wordt vertaald in een digitaal signaal (een reeks blokjes met een hoge óf een lage spanning). Die truc wordt uitgevoerd door een analoog-digitaal omzetter (AD converter, figuur 2.6). Het resultaat is een binair signaal (0 of 1).

![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-16.jpg?height=295&width=569&top_left_y=2054&top_left_x=1252)

Figuur 2.6 Analoog naar digitaal omzetting


| Mens | Functies | Machine | Functies |
| :--- | :--- | :--- | :--- |
| Zintuig <br> (uitwendig en <br> inwendig) | Waarnemen (licht, geluid, <br> temperatuur, aanraking, <br> chemische stoffen, beweging; <br> inwendig bijvoorbeeld <br> bloedsuiker, hormonen, <br> kooldioxide) | Sensor | Invoer: waarnemen <br> van de <br> buitenwereld (licht, <br> temperatuur, <br> aanraking, <br> chemische stoffen <br> enz.) |
| Zenuwcellen, <br> hersenen | Verwerken en beslissen | Processor | Berekenen en <br> informatie uitsturen |
| Geheugen | Netwerk van verbindingen <br> tussen zenuwcellen | Dataopslag | Opslag van bits in <br> geheugenchip of op <br> harde schijven |
| Spier en klier | Uitvoeren van bewegingen <br> (dus ook ademen, geluid <br> maken enz.) en afgeven <br> stoffen of hormonen (voor <br> regeling in lichaam) | Actuator | Bewegen, licht <br> geven, geluid |
| maken enz. |  |  |  |

Tabel 2.1 Mens en digitale machine vergeleken

## Vragen
```{exercise}
a. Deze module gaat over 'digitale technologie'. Er zijn hiervan al enkele voorbeelden langs gekomen. Welke toepassingen kun je nu nog meer bedenken?
b. Digitaal staat tegenover analoog. Wat is het verschil tussen beide?
c. Welke voordelen heeft digitale technologie ten opzichte van analoge technologie? Welke nadelen kun je noemen?
```

```{exercise} 
Geef voor elk van de genoemde signalen een manier / apparaat om deze analoog te meten en te registreren.
```

```{exercise} Analoog en digitaal

a. Analoog naar digitaal conversie en andersom is een belangrijke stap in de digitale wereld. Geef op basis van afbeelding 2.1 drie voorbeelden van analoog-digitaal conversie en drie voorbeelden van digitaal-analoog conversie.
b. Noem nog vier andere digitale apparaten, die alleen in combinatie met een digitaal systeem kunnen functioneren.
c. Kies één van de apparaten die je bij (b) genoemd hebt. Aan in welk systeem is het apparaat verbonden? Is het apparaat bedoeld voor invoer, uitvoer, opslag of verwerking van digitale gegevens?
```

```{exercise}  Electr(on)ische apparaten die jij gebruikt: digitaal of niet?

Als je naar school fietst op een regenachtige dag is de kans groot dat je de buienradar op je mobiel in de gaten houdt. Die app werkt alleen als satellieten en grondradars hun data doorgeven aan computers met rekenmodellen, die dit via een website en communicatie met jouw mobiel zichtbaar maken.
a. Welke apparaten (die gebruik maken van elektriciteit) gebruik jij elke dag? Noteer er tenminste zeven.
b. Sommige apparaten zijn digitaal, andere analoog, of zijn deze termen niet van toepassing. Schrijf achter elk van de namen van je apparaten of ze digitaal, analoog of geen van beide zijn.
c. Bepaalde digitale apparaten werken helemaal zelfstandig (hebben geen andere apparaten nodig), sommige hebben andere apparaten nodig om te werken. Geef twee voorbeelden van zelfstandige digitale apparaten, en twee voorbeelden van verbonden (samenwerkende) apparaten.
```

## 2. Verwerken en beslissen (hoofdstuk 4)

Digitale signalen lopen als stroompulsjes door metaaldraadjes, flitsen als radiogolf of licht

Figuur 2.7 Verwerken en beslissen
door de lucht en door glasvezel. Bij een digitaal signaal maakt het weinig uit hoe groot elk pulsje is: als er maar onderscheid te maken is tussen wel en geen puls (1 of 0 ). Dat voorkomt verlies van het signaal.

Het verwerken van de pulsen in een digitaal systeem gebeurt in heel kleine chips (enkele vierkante mm ). Deze microprocessors zitten vol elektronische schakelingen, geïntegreerde circuits (IC), die miljoenen kleine onderling verbonden onderdelen bevatten. Dat zijn o.a. transistoren (schakelaars), diodes (die elektronen in één richting doorlaten) en condensatoren (voor het tijdelijk opslaan van elektronen).

Een IC zet de spanning op uitgaande metaaldraadjes aan en uit op basis van binnenkomende signalen. Wat de IC precies doet, wordt bepaald door de bedrading én door de stand van de schakelaars. Door tevoren de schakelaars in een bepaalde stand te zetten met stroompulsjes, wordt een IC geprogrammeerd. Soms ligt dat programma vast: de processor is dan gemaakt om altijd hetzelfde te doen. Andere processoren zijn telkens opnieuw programmeerbaar. Alle schakelaars komen in de beginstand als de IC geen stroom meer krijgt (reset). De software kan de IC dan opnieuw programmeren. Die van je mobiel heeft telkens andere klusjes, dus vertelt de app (applicatie, het programma) wat er moet gebeuren. Wat de IC doet wordt bepaald door de regels (algoritmen, zie kader) in de software. Daardoor is een processor flexibel te gebruiken.

```{exercise}
Algoritmen (zie kader) kom je op veel meer plaatsen tegen dan alleen in software. Bedenk een paar.
```

## Algoritme

Het woord algoritme herinnert aan de Arabische wiskundige Al-guarismi, die ook de basis legde voor Al-gabbr (algebra). Hij beschreef het oplossen van een (reken)probleem in stappen, die samen een algoritme vormen, dat je kunt volgen om een probleem op te lossen.

Dat doe je in je dagelijks leven voortdurend. Als je een boterham met kaas wilt klaarmaken, volg je een aantal stappen. Welke je precies volgt is afhankelijk van de situatie.

Werk je met een groot stuk kaas of plakjes? Gebruik je een kaasschaaf of een mes? Als je de stappen precies noteert voor elke situatie, krijg je verschillende algoritmen. Verschillende algoritmen kunnen dus dezelfde uitkomst hebben.

## 3. Datatransport en dataopslag (hoofdstuk 5)

Figuur 2.8 Opslag en transport van data

Figuur 2.9 Dataopslag

Figuur 2.10 Uitvoeren
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-19.jpg?height=204&width=210&top_left_y=1891&top_left_x=89)

Figuur 2.11 Conversie

De enen en nullen in digitale signalen worden door de processor voortdurend verplaatst in zijn eigen werkgeheugen en als digitale data opgeslagen op harde schijven of geheugenchips. Hiermee kan data op een ander moment verder worden bewerkt of gebruikt, maar ook verplaatst en ergens anders opgeslagen worden. Opslag in de 'cloud' komt er op neer dat (een kopie van) die data op de schijven van een of meerdere digitale opslagplaatsen ergens ter wereld terecht komt.

Als je een foto met je mobiel maakt en deelt met vrienden, kopieert en verstuurt je mobiel de data. Dat gaat draadloos via 4G of 5G naar een telefoonmast, of via wifi naar een netwerk van koper en glasvezel, en komt via routers terecht bij de server van de app met opslagruimte in een datacenter. Google, Microsoft, Facebook, Zoom en de bedrijven achter al de apps, gebruiken enorme datacenters én supersnelle verbindingen met hun servers om al die digitale data te kunnen ontvangen, opslaan, bewerken én weer door te sturen. Heel dynamisch dus. De foto die je maakt, en die vlak daarna te zien is op de mobiel van je vriendin die naast je staat, heeft al binnen een seconde de wereld rondgereisd.

Het beschermen van computersystemen, cybersecurity, is een belangrijk thema bij transport, opslag en gebruik van digitale data. Het is belangrijk dat niet de hele wereld jouw foto's kan bekijken als je dat niet wilt. Ook verwijderen van data blijkt lastig, omdat in een paar seconden een aantal kopieën op allerlei servers staan, waar je geen controle meer over hebt.

```{exercise}
Maak een tekening met de stappen (tussenstations), die een foto aflegt als die van jouw mobiel vervoerd wordt naar de mobiel van een klasgenoot.
```

## 4. Uitvoeren (hoofdstuk 6)

Aan pulsjes, de bits, in een digitaal systeem heb je alleen maar iets, als je er iets mee kunt doen. Digitale data van een foto wil je graag op een schermpje kunnen bekijken. Een rijtje bits kan gebruikt worden om één pixel van een schermpje licht te laten geven. Er zijn miljoenen enen en nullen nodig om een afbeelding of tekst op een beeldscherm te laten zien. Maar je kunt ook geluid maken via een stroompje door de spoel in een luidspreker. Op die manier vormen een scherm, luidspreker of motortje de uitvoer van een digitaal systeem en worden daarom actuatoren genoemd. Een digitaal signaal wordt vaak direct gebruikt om een beeldpuntje aan of uit te schakelen. Om een luidspreker te laten werken, moet het digitale signaal eerst omgezet worden in een analoog signaal door een digitaal-analoog omzetter (DA-converter). Dit analoge stroompje kan de luidspreker laten werken om je muziek af te spelen.

![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-19.jpg?height=315&width=1029&top_left_y=1987&top_left_x=839)

Figuur 2.12 Digitale camera: sensor - processor - opslag - actuator (beeldscherm)

```{exercise} 
Welke actuatoren zijn er in jouw directe omgeving aanwezig?
```

## 5. Feedback (geen eigen hoofdstuk)

In het analyseschema staat het begrip feedback (terugkoppeling): je neemt met sensoren waar hoe een fysische grootheid in de omgeving verandert als een actuator actief is. Bij het nauwkeurig en correct uitvoeren van opdrachten, is het enorm belangrijk dat er controle is op de effecten. Als jij water in je glas giet, blijf je kijken wat je doet, om te voorkomen dat je er naast giet of het glas overstroomt. Net als jij je ogen gebruikt om waar te nemen welk effect je handelingen hebben (terugkoppelen), moet ook een digitaal systeem zijn sensoren gebruiken om te ontdekken wat het effect is van de opdrachten die de actuatoren uitvoeren. Die sensoren ontbreken vaak, omdat digitale systemen met en voor de mens werken. Daardoor doet de gebruiker zelf vaak de terugkoppeling, bijvoorbeeld het regelen van het geluidvolume als je muziek beluistert. Hoe automatischer en zelfstandiger een apparaat werkt, hoe belangrijker de rol van terugkoppeling is. Als heel nauwkeurig te voorspellen is wat een actuator doet (bijvoorbeeld: een beeldscherm), is het minder belangrijk (maar wel prettig) om allerlei sensoren te hebben. Je mobiel gebruikt een lichtsensor om te bepalen hoeveel omgevingslicht er is en welke kleur dat heeft. Het scherm is op die manier in fel daglicht en in het donker goed te gebruiken.

```{exercise} Voorbeelden van terugkoppeling

Geef nog een paar voorbeelden van terugkoppeling die je kent uit de biologie, natuurkunde of scheikunde. Beschrijf bij elk voorbeeld kort wat zou er kunnen gebeuren als die terugkoppeling ontbreekt.
```

```{exercise} Terugkoppeling bij temperatuurregeling

Met een systeem waarin een temperatuursensor, processor, temperatuurinstelling, en verwarmer aanwezig zijn kan de temperatuur in een ruimte op peil gehouden worden. Maak een schema waarin je duidelijk maakt hoe terugkoppeling een rol speelt bij het constant houden van de temperatuur.
```

## 6. Verbindingen (hoofdstuk 5)

Tussen de vakken in het analyseschema zijn verbindingen getekend. Hiermee wordt aangegeven dat informatie van een vak naar een ander vak wordt overgedragen. Van een onderdeel, zoals een sensor, loopt elektriciteit, via stekkertjes en draadjes of via pinnetjes op
de printplaat, naar de processor. De informatiestroom kan beide kanten op
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-20.jpg?height=110&width=102&top_left_y=1847&top_left_x=1548)
richting
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-20.jpg?height=61&width=195&top_left_y=1991&top_left_x=482)
. Tussen computers worden netwerkkabels of glasvezel gebruikt of draadloze overdacht via radiogolven. Een deel van die verbindingen hoort bij het vakje datatransport en -opslag.
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-21.jpg?height=332&width=1377&top_left_y=374&top_left_x=428)

Photo by Mika Baumeister on Unsplash https://www.vecteezy.com/free-photos Pixelpatroon, Wikipedia: https://en.wikipedia.org/wiki/Bayer_filter

## Voorbeeldschema: foto's met je mobiel.

Een mobiele telefoon heeft een camera waarmee je foto's en filmpjes maakt. De camera heeft daarvoor een sensor die via een lens licht opvangt. De sensor is verdeeld in kleine blokjes (pixels), die binnenkomend licht vertalen in een elektrisch stroompje. Naast elkaar zitten een pixel voor R (rood), G (groen) en B (blauw) licht, die samen één RGB beeldpunt vormen. De waarde voor R,G en $B$ is analoog, dat wil zeggen dat het alle mogelijke waarden kan aannemen.

In de camerasensor wordt het analoge signaal vertaald naar een reeks enen en nullen: een digitale waarde. Daarvoor gebruikt de sensor een analoog-digitaal omzetter. Het digitale signaal uit de sensor is een enorme tabel van miljoenen getallen, die voor ieder beeldpunt de RGB waarde weergeeft in (een rijtje van 8) bits. Een goede camera heeft al snel 5 tot 10 miljoen beeldpuntjes (megapixel). Voor één RGB beeld moeten minstens 3 (RGB) x 5 miljoen (pixels) x 8 bits verstuurd worden. Ruwe beelden uit de camera gaan digitaal naar de processor in de telefoon. Die processor verwerkt de informatie en berekent bijvoorbeeld hoe het beeld aangepast moet worden. Correctie voor tegenlicht (achtergrond veel te licht) of witbalans (gele foto in kunstlicht) doet de processor. Het fotobestand wordt kleiner gemaakt; als er honderd enen achter elkaar staan, kun je dat verkleinen tot "1, 100 keer". Dat heet datacompressie.

Als dat allemaal gebeurd is, gaat de afbeelding naar het schermpje op je mobiel. Een schermpje is een actuator: de digitale informatie van de foto gaat naar de beeldpuntjes op het scherm (ook R, G en B). Bekijk het scherm van je mobiel maar eens met een vergrootglas, dan zie je dat.

Tegelijk slaat de mobiel het op bij de foto's (op het camerageheugen). Automatische online opslag (de app foto's) of versturen naar een app (Instagram, Whatsapp of iets anders) betekent dat je mobiel de digitale informatie verstuurt via een draadloze verbinding (wifi, 4 of 5G) naar een server die het dataverkeer voor de app regelt. Je foto staat zo in enkele seconden op meerdere plaatsen in de wereld. Als je de foto via een app met een vriend(in) deelt, stuurt de server deze onmiddellijk door, en geeft de mobiel of computer een melding. Voor je het weet is het fotobestand bewerkt, opgeslagen, gedeeld en op meerdere schermen getoond.

Met deze informatie is het analyseschema (figuur 2.6) als voorbeeld ingevuld. Zo ontdek je hoe je andere digitale systemen kunt beschrijven.
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-22.jpg?height=1198&width=1588&top_left_y=315&top_left_x=228)

Figuur 2.13 Ingevuld analyseschema voor camera van mobiele telefoon

```{exercise} Analyse van een digitale koortsthermometer

In de toelichting over de camera van een mobiel, zijn de bouwstenen van de digitale technologie besproken aan de hand van een schema. Je kunt van een digitaal apparaat of systeem nu bekijken welk onderdeel welke functie heeft en hoe de verschillende stappen gedaan worden. Een digitale koortsthermometer is een voorbeeld, waarvan je aan de hand van de toelichting een lege versie van het analyseschema kunt invullen. Wat zit er in en welke functie heeft het? Wat ontbreekt?
```

## Wat ga je doen?

a. Haal een digitale koortsthermometer uit elkaar (of gebruik er een die al uit elkaar gehaald is) en bekijk welke onderdelen aanwezig zijn.
b. Verdeel de onderdelen over de vier basiscategorieën aan de hand van het analyseschema (leeg schema achterin de lesmodule of verkrijgbaar als los werkblad): waarnemen, verwerken en beslissen, datacommunicatie en -opslag, en uitvoer. Is er omzetting van analoog naar digitaal signaal en omgekeerd? Zo ja, waar?
c. Wat voor omgevingssignaal of -signalen registreert de koortsthermometer?
d. Welke sensor(en) heeft de koortsthermometer?
e. Welke actuator(en) zijn er aanwezig?

## Nabespreking koortsthermometer

Een digitale koortsthermometer heeft in het algemeen geen datacommunicatie met de buitenwereld. Een mens bedient het apparaatje en die gebruikt de getoonde gegevens.

De temperatuursensor geeft altijd een waarde aan. Als het meetsysteem aangezet wordt (schakelaar, ook een sensor) wordt de weerstand gelezen en door de AD converter omgezet in een digitaal signaal. De processor bepaalt of de waarde van de weerstand verandert (vergelijk metingen). Als de waarde gedurende 30 seconden niet meer verandert is dat de waarde die op het schermpje (uitvoer) moet komen. De processor geeft de opdracht om een piepje (uitvoer via luidsprekertje) te geven. De waarde die op het schermpje getoond wordt blijft in een geheugen achter. Indrukken van de schakelaar zorgt dat het apparaat uit gaat. Maar: dit moet vertaald worden in een opdracht aan de processor om te stoppen en het display uit te schakelen. Bij aanschakelen moet de processor alles weer aanschakelen en de laatst gemeten hoogste waarde op het scherm laten zien en na enkele seconden opnieuw beginnen met meten. Voor een koortsthermometer kan ook een minimale waarde ingesteld zijn om een meting te laten starten, bijvoorbeeld $30^{\circ}$ Celcius.

Samenwerken met andere apparaten is niet nodig. Het apparaat is ook niet afhankelijk van andere apparaten om zijn werk te doen, het is een zelfstandig, standalone, apparaat.

In het vervolg van de module kom je meerdere systemen tegen, die we aan de hand van dit schema gaan beschrijven.

```{exercise}  Oefen met andere apparatuur

Het schema is bedoeld om telkens andere apparaten of systemen te kunnen analyseren. In de volgende hoofdstukken staat telkens één onderdeel centraal. Aan de hand van voorbeelden leer je de bouwstenen van een digitaal systeem kennen, en kun je zelf aan de slag om de technologie in te zetten voor nieuwe toepassingen. Het schema is als werkblad beschikbaar.

Vul het schema in voor één van onderstaande, of kies zelf een apparaat.

- Bankpasje of OV chipkaart
- Bellen via mobiele telefoon
- Rekenmachine
```

Jaarlijks belanden miljoenen digitale apparaten op de afvalberg (e-waste). Ook op school of bij jou thuis zijn vast oude apparaten te vinden, die binnenkort worden afgevoerd. Ook zo'n apparaat kun je uit elkaar halen en daarmee de opdracht uitvoeren. Op dezelfde manier kun je andere systemen analyseren. Kies zo'n apparaatje uit en probeer het schema er voor in te vullen. Let op: wanneer er veel vakjes leeg blijven, bedenk dan welke (andere) apparaten er nodig zijn om de functie van ieder vakje te vullen.

Als het om e-waste gaat: wat gooi je allemaal weg en hoe kun je dat hergebruiken?

Digitale technologie is overal om ons heen. Er zijn diverse manieren ontwikkeld om ermee te experimenteren, zelf te bouwen en programmeren. In dit gedeelte maak je kennis met de meest gebruikte platforms, zodat je daar verderop in de module je eigen projecten mee kunt uitvoeren.

## Basis van de hardware ontdekken met Arduino, Micro:bit of Raspberry pi

Als je een goed beeld wilt krijgen hoe digitale systemen in elkaar zitten, helpt het om ze zelf in elkaar te zetten en te programmeren. Daar zijn inmiddels veel mooie materialen voor beschikbaar, zoals 'Single Board computers' als Arduino, Micro:bit en Raspberry Pi. Misschien heb je er al wat ervaring mee, want deze kleine apparaatjes worden steeds meer gebruikt op basis- en middelbare scholen.

```{exercise} 

Voor we dieper in gaan op minicomputers, is het handig om het analyseschema er weer bij te pakken, en te kijken wat er allemaal in een setje van deze minicomputers aanwezig is. Gebruik voor deze opdracht een setje Arduino, Micro:bit of Raspberry Pi, of een ander systeem dat je beschikbaar hebt.
a. Bekijk de componenten en deel ze in, volgens het analyseschema (leeg schema achterin de lesmodule of verkrijgbaar als los werkblad). Noteer de namen van de onderdelen in het schema en schrijf er bij wat de onderdelen doen.
b. Voor welke fysische grootheden (bijvoorbeeld licht of temperatuur) zijn er sensoren beschikbaar? Zijn er meerdere sensoren voor dezelfde fysische grootheid?
c. In welke onderdelen zitten analoog/digitaal en digitaal/analoog omzetters? Zijn er sensoren die zelf een digitaal signaal lijken te leveren? Wat zegt dat over de ADomzetter?
```

## Microcomputer en microcontroller

![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-24.jpg?height=458&width=903&top_left_y=1733&top_left_x=271)

Figuur 2.14 Arduino code

De Raspberry Pi is een microcomputer, een kleine computer waar je een scherm en een toetsenbord op kunt aansluiten, die een verbinding heeft met het internet, en die je kunt programmeren. Eigenlijk een gewone computer, maar dan veel kleiner en met een aantal aansluitingen waarmee je iets uit kunt lezen (een druktoets) of aan kunt sturen (een LED). De Arduino en de Micro:bit zijn microcontrollers: je kunt er een programma opzetten, waarmee je een sensor uitleest en bijvoorbeeld een LCD display aanstuurt. Je schrijft dat programma op een computer en 'upload' het op de microcontroller. Je kunt maar één programma tegelijk uitvoeren op deze microcontrollers, maar je kunt 'm wel steeds opnieuw programmeren.

```{exercise} 

Zoek uit hoeveel verschillende versies er zijn van deze microcontrollers en microcomputer.
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-25.jpg?height=541&width=1737&top_left_y=278&top_left_x=222)

Figuur 2.15 De bordjes van Arduino, Micro:bit (microbit.org) en Raspberry Pi (https://www.raspberrypi.com/software/).
```

```{exercise} 

Elk van deze drie kent zijn eigen programmeertaal (talen). Er bestaan overzichtjes op het internet. Geef het aantal programmeertalen van alle drie de types én het linkje naar een website, die deze informatie betrouwbaar en up-to-date weergeeft.
```

Alle drie gebruiken ze Open Source software. Dat betekent dat de computercode voor iedereen toegankelijk is. De programmeurs delen hun code met anderen en ze schrijven samen aan de software, vaak in hun vrije tijd. Die Open Source gedachte is overgenomen door de gebruikers. Als je iets gemaakt hebt worden de resultaten vaak gedeeld met anderen. Overal op het internet zijn voorbeelden te vinden van projecten, die je na kunt bouwen. Zo leer je van elkaars projecten.

```{exercise}  
Zoeken naar projecten en software Er is enorm veel te vinden over bouwen en programmeren van computers. Bekijk een paar van deze sites en noteer in een paar steekwoorden wat je daar kunt vinden.
```

Alleen Arduino gaat nog een stapje verder in de Open Source gedachte, omdat het Open Source Hardware is. Het bouwplan van de Arduino staat online en iedereen mag er een (na)maken. Als je wilt, kun je zelfs je eigen Arduino bouwen (https://www.arduino.cc/en/main/standalone of https://www.instructables.com/How-to-make-your-own-Arduino-board/).

Zo komt het dat je in China voor heel weinig geld een

## Programmeren

Een computer werkt met instructies (een programma, software) geschreven in een programmeertaal, zoals Arduino taal, C, Python, machinetaal, Visual Basic enzovoorts. Een programmeur schrijft zulke software.

Elke taal definieert <variabelen>, heeft **commando's**, <<herhaling>> en een duidelijke markering van \{begin\} en \{eind\} van een opdracht. In elk goed programma (code) staat uitleg (//comments//). De programmeur beschrijft wat het blokje code doet.

Een werkend programma is fijn. Maar de uitleg is nog fijner, omdat iemand anders jaren later het programma kan begrijpen en aanpassen.

Arduino kloon kunt kopen, terwijl de Micro:bit en Raspberry Pi alleen gemaakt worden door fabrikanten in de EU. Die laatste zijn vaak wat duurder, maar ook wat steviger en betrouwbaarder.

## Waarom zijn ze handig?

Waarom zijn microcontrollers en microcomputers zo populair? Voor het antwoord op die Vraag moeten we terug in de tijd. Vroeger, voor de microcontrollers, maakten elektronische apparaten gebruik van printplaten: plaatjes waarop de weerstanden, condensatoren en transistoren gesoldeerd zijn, onderling verbonden met een netwerk van geleidende koperbanen. Voor elke kleine verandering moet zo'n printje opnieuw gemaakt worden.

Kijk maar eens naar deze dimmer (fig. 2.16), met een printplaatje met elektronica, een potmeter, transistoren en condensatoren. Klein maar fijn, maar niet flexibel. Want stel dat ik mijn LED niet wil dimmen met een potmeter, maar met een drukschakelaar, die door lang en kort drukken de LED aan en uitzet én dimt? Dan heb je een heel ander printje nodig.
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-26.jpg?height=570&width=1317&top_left_y=840&top_left_x=275)

Figuur 2.16 Dimmen voor LEDs: een printje met variabele draaiweerstand (links) en digitaal met Arduino (rechts)

Een microcontroller werkt veel flexibeler, omdat je 'm kunt programmeren. Je sluit er een LED en een potmeter op aan en schrijft een computerprogramma om de potmeter uit te lezen. Die waarde gebruik je, na wat rekenwerk, om de helderheid van de LED aan te sturen. Maar vervang de potmeter door een drukknop en verander wat aan het computerprogramma, dan kun je de helderheid ook regelen met de tijd die de schakelaar is ingedrukt en hem met een korte klik aan en weer uit zetten.

## Leren

Om te leren werken met Arduino, Micro:bit en Raspberry Pi heb je eigenlijk geen lagere of middelbare school meer nodig. Op internet wemelt het van de uitleg, lessen en filmpjes. Op de websites van deze single board computers zijn ook lessen, uitleg en achtergrondinformatie beschikbaar. Als je vastloopt en het niet meer weet, zijn er internetforums waar andere gebruikers je kunnen helpen als je vragen hebt.

## Beroepen

In de wereld van de digitale technologie is veel te doen. De kans is groot dat je zelf, via een onverwachte route, in deze wereld terecht komt.

FutureNL heeft hier de serie DigiDoeners over gemaakt. De labels van schoolvakken laten zien dat het heel breed is.
https://www.lessonup.com/nl/channel/f uturenl/series/7b1fc5805d7f730780186 73d
https://www.lessonup.com/nl/channel/f uturenl/series/b8914c0f6056a12da919c 22a
```{exercise}  Wat is er allemaal te leren in die digitale wereld?

Hoe leer je programmeren? Bekijk: https://www.want.nl/leren-programmeren-10-stappen/ Hoe doen de professionals dat? lemand die software schrijft gaat eerst kijken wat er al is:
https://www.want.nl/deze-tweehonderd-websites-apps-en-boeken-moet-je-als-ontwerperkennen/.
Zoek op internet nog wat verder. Hoe pakt een professional het programmeren aan? Op welke manier verschilt zijn/haar aanpak van die van jou?
```

Het leuke is dat je al snel begint met het maken van projecten. Je maakt een kleine schakeling, schrijft wat code, en voila, daar heb je een digitale thermometer, een stoplicht of een robot. Er zijn heel erg veel websites waar je leuke projecten kunt vinden, die je kunt maken. Probeer er eens een paar te vinden en maak zo'n project.

Let wel op. Techniek is soms taai. Dingen werken niet, je snapt niet waarom en je zoekt je suf. Dan blijkt dat je ergens iets niet gezien hebt, dat er iets stuk was of dat je een fout(je!) hebt gemaakt met grote gevolgen. That's the life of an electronics nerd, sorry about that. Hou vol, blijf nadenken en redeneren, Vraag hulp (maar denk vooral eerst zelf na) aan een klasgenoot, een TOA of docent of op Internet. Uiteindelijk komt het bijna altijd goed.

Mocht je je nou afvragen waarom je deze tekst hebt gelezen, omdat alles toch online te vinden is?! We hebben hier een globaal overzicht gegeven en proberen uit te leggen, waarom dingen zijn zoals ze zijn. Wat hier staat vind je dan weer niet online, omdat dat vaak te gedetailleerd is of op een niveau, dat voor beginners te hoog gegrepen is. En natuurlijk, omdat dit het vak nlt is.

```{exercise} Welke informatie is er? (Klasopdracht)

Maak met je klas een overzicht van websites met tutorials, achtergrondinformatie en projecten. Voor beginners, maar als je wat verder bent, ook voor intermediate of advanced programmeurs. Zet dat overzicht op een plek waar iedereen bij kan.

Wat nu als jullie de zoveelste klas zijn, die dit doen? Je kunt dan laten zien welke website(s) jullie het meeste gebruikten. Welke zijn er nieuw (en misschien wel beter!)? Maak een nieuwe top 10 en vul aan met nieuwe binnenkomers.
```

```{exercise}  Wat gaat er fout en wat leer je daar van? (Klasopdracht)

Hou voor jezelf bij waar je tegenaan loopt als je een project doet. Wat ging er mis, wat was de oplossing? Zet ook die bij elkaar. Wat ging er het meeste mis? Hoe kan de klas, die na jullie komt, daarvan leren? Wat moeten ze daarvoor precies doen? Zo leer je van elkaars fouten, vooral als die vaak gemaakt worden...

Wat als jullie de zoveelste klas zijn die dit doen? Welke fouten maakten jullie het meeste? Stonden die er al bij? Waarom ging het dan toch mis? Kan het beter beschreven worden? Helpt een uitlegfilmpje? Ook jullie kunnen zorgen dat de volgende klas het sneller leert dan jullie, doordat je ze helpt om de lijst met veel gemaakte fouten aan te vullen en te verbeteren. Op welke manier deel je de benodigde informatie?
```

Je leert veel door dingen zelf te maken. We geven in het laatste deel van elk hoofdstuk maakopdrachten waar je (in overleg met docent en TOA) een keuze uit maakt.

```{exercise} Van start met je microcontroller
In de handleidingen bij de Arduino, Raspberry Pi of Micro:Bit zijn tientallen opdrachten te vinden waarmee je kunt starten. Als je nooit met zulke apparatuur gewerkt hebt, kun je beginnen om een LED te laten branden, een tekstje op een display te toveren of een motortje te laten draaien.

Afhankelijk van de tijd kun je een paar van deze opdrachten uitvoeren en je verdiepen in de manier waarop de programma's (code) van de microcomputer gemaakt zijn. Gebruik hiervoor de uitleg in de starthandleiding van je apparaat.
```
