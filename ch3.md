---
exports: 
    - format: pdf
      template: curvenote
      output: exports/ch3.pdf  
downloads:
    - file: exports/ch3.pdf
    - file: ch3.md
---

# Waarnemen en sensoren

```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-29.jpg?height=1200&width=1597&top_left_y=314&top_left_x=224
:width: 70%
:name: fig_

```

## Leerdoelen

**Kennis**

1. Je kunt uitleggen dat digitale systemen verschillende soorten informatie kunnen waarnemen
2. Je kunt uitleggen dat voor elk soort informatie verschillende sensoren beschikbaar zijn
3. Je hebt kennisgemaakt met enkele digitale sensoren (zoals de TMP36)
4. Je kunt uitleggen dat sensoren vrijwel altijd analoge informatie omzetten in digitale informatie
5. Je kunt uitleggen dat in het dagelijks leven sensoren een belangrijke rol spelen en kunt aangeven waar je verschillende sensoren tegenkomt

**Vaardigheden**

6. Je hebt ervaren dat het noodzakelijk is om sensoren te kalibreren om ze goed te kunnen gebruiken en je weet hoe je dit uitvoert
7. Je hebt ervaren dat de digitale informatie van sensoren in een digitaal systeem in verschillende typen variabelen opgeslagen kan worden
8. Je kunt uitleggen hoe informatie in het werkgeheugen van een digitaal systeem is opgeslagen en dat dit in verschillende programmeertalen verrassend veel overeenkomsten vertoont.

## De omgeving waarnemen

Een digitaal apparaat moet de omgeving kunnen waarnemen. Dat is nodig wanneer een mens het apparaat wil gebruiken. Bij een computer zijn daar het toetsenbord, de camera en muis voor bedoeld. Een druktoets is een sensor, die aanraking waarneemt en die deze informatie doorgeeft aan de processor. Toch kan bij een apparaat zowel invoer- als uitvoerinterface met de mens ontbreken. In dat geval vormt het apparaat een stukje van het geheel, dat met andere apparaten samenwerkt. Je kunt een draadloos toetsenbord en een draadloze muis zien als aparte, maar niet los van elkaar werkende, digitale apparaten. Immers: de muis is bedoeld om bewegingen en keuzes van de gebruiker aan de computer door te geven. In een computermuis zitten meerdere sensoren. Samen zorgen ze dat veranderingen in de fysieke omgeving (vingerbeweging, schuifbeweging) worden omgezet in een digitaal signaal dat via een draadje of via radiogolven aan een ontvanger (ook een sensor) in de computer wordt doorgegeven.

```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-30.jpg?height=295&width=312&top_left_y=595&top_left_x=1506
:width: 50%
:name: fig_

Interface: Invoer in het systeem
```

Elke sensor in de elektronica of digitale technologie zorgt uiteindelijk dat een verandering van een fysische grootheid (bijvoorbeeld licht, vochtigheid, temperatuur, beweging of wat dan ook) een meetbaar spanningsverschil oplevert.

**Temperatuursensor**

Temperatuur heeft invloed op bijvoorbeeld de dichtheid van stoffen. Het vloeibare metaal kwik zet uit als het warm wordt, net als alcohol. Doe de vloeistof in een buisje, zet er streepjes naast en je kunt de krimp en uitzetting gebruiken als maat voor de temperatuur: de thermometer. Elektrische stroom, die door metaal of ander geleidend materiaal gaat, ondervindt weerstand die varieert met de temperatuur. Dat principe wordt gebruikt om een temperatuursensor voor een elektronische thermometer te maken. De weerstand is te bepalen door een kleine spanning (bijvoorbeeld 1 V ) op de sensor te zetten. Als de temperatuur verandert, zal het spanningsverschil over de weerstand ook veranderen. Voor elektronische metingen wordt tegenwoordig vaak een NTC schakeling als sensor gebruikt.


```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-30.jpg?height=215&width=227&top_left_y=2068&top_left_x=229
:width: 30%
:name: fig_

Interface: uitvoer van het systeem
```

De eerste stap voor elektronisch meten is: een analoge fysische grootheid (temperatuur) door de (temperatuur)sensor laten vertalen in een analoge spanning (V). Analoog betekent: kan alle waarden aannemen. Bij het aflezen van de sensor noteren we de waarde als een getal (discreet). Een gemeten spanning tussen 0,2 en $0,27$V komt bijvoorbeeld overeen met een temperatuur van 30 graden Celsius. Deze waarde moet op het schermpje komen. Elke spanning tussen 0,20 en 0,27 V levert dezelfde waarde 30 op. Elke spanning tussen 0,17-0,20 V wordt 31, enzovoorts. Preciezer uitlezen betekent ook dat de temperatuur in kleinere stapjes kan worden weergegeven, bijvoorbeeld 30,7 graden C. We houden rekening met afleesfouten. De afgelezen 30 graden is een benadering, waarbij de werkelijke waarde tussen 29,5 en 30,5 graden kan liggen. Bij 30,7 ligt de werkelijke waarde tussen 30,65 en 30,75. Hoe groter de nauwkeurigheid van de thermometer, hoe dichter deze foutgrenzen bij elkaar liggen.

**Analoog-digitaal omzetting van signaal uit sensor**

Een tweede stap is nodig om van een discreet signaal een digitaal signaal te maken. Een spanning in de sensor (bijvoorbeeld 0,25 V) wordt door een schakeling, de analoog-digitaal omzetter (ADconverter), vertaald naar een reeks bits (bijvoorbeeld 11011110). Deze schakeling kan bij de sensor ingebouwd zijn, waardoor een sensor direct op een digitale ingang aangesloten kan worden. Veel sensoren geven alleen een variabele spanning (V) af. Dan moet een AD-convertor op de processor dit omzetten in een reeks bits (zie figuur 2.6). De chip van de Arduino heeft hier een analoge ingang voor en doet zelf de AD-conversie. Het is dus belangrijk om te weten wat voor soort signaal de sensor verstuurt om de juiste aansluiting te maken.

**Hoeveel data?**

```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-31.jpg?height=553&width=673&top_left_y=820&top_left_x=246
:width: 70%
:name: fig_


```

Figuur 3.4 Sampling: aantal metingen/s moet passen bij de verandering van het signaal

Bij het aflezen van de sensor is naast de gewenste nauwkeurigheid ook van belang hoe vaak je dat doet en waar de meetresultaten voor nodig zijn. Nauwkeurigheid wordt ook bepaald door de snelheid waarmee de fysische grootheid verandert. Een langzaam veranderende grootheid, zoals lichaamstemperatuur, meet je af en toe (alleen als je ziek bent) en dan ook maar een paar keer per dag. Ook de buitentemperatuur zal in één seconde niet sterk
veranderen. Je kunt ermee volstaan om bijvoorbeeld eens per uur af te lezen. We noemen dat bemonsteren of een sample nemen. Hoe sneller er verandering is, hoe groter de 'samplefrequentie' moet zijn. De vuistregel is: als een grootheid verandert, moet je twee keer zo vaak een sample nemen als de snelste verandering. Als dat 100x per seconde ( 100 Hz ) is, moet je 200x per seconde (200 Hz) samplen. Vaker samplen betekent ook dat er meer data ontstaan.

```{exercise}

a. Welke fysische grootheden veranderen wel heel snel?

b. Leg uit waarom de samplefrequentie minstens tweemaal zo hoog moet zijn als de hoogst voorkomende frequentie?
```

```{exercise}

Welke kenmerken heeft een signaal waarvan Arduino de AD-conversie kan doen? Denk daarbij aan de variatie en grootte van het signaal.
```

## Kalibreren en ijken

Als je met een metalen draadje of een schakeling van transistors en diodes een temperatuursensor gemaakt hebt, wil je weten welke temperatuur er bij welke spanning hoort. Het bepalen van het verband tussen de temperatuur en de spanning (en omzetting daarvan naar een digitale waarde), noemen we het kalibreren van een temperatuursensor. Dat gebeurt bijvoorbeeld met smeltend ijs (dat is 0 graden C) en kokend water (geeft de waarde 100 graden C ) of door te vergelijken met een geijkte standaardthermometer. Als je dit bij een serie temperaturen in een grafiek zet, ontstaat een ijklijn, waarin de relatie tussen de gemeten grootheid en de waarde van het signaal staat. Voor andere grootheden als licht of vochtigheid moet een vergelijkbare methode gebruikt worden.

```{exercise}
Bedenk hoe je dat kalibreren kunt aanpakken voor een lichtsensor.
```

```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-32.jpg?height=406&width=725&top_left_y=231&top_left_x=1099
:width: 70%
:name: fig_

Signaal (Volt) van sensoren: een met alle waarden in een rechte lijn (lineair) en een  niet-lineaire sensor, gemeten bij een reeks temperaturen.
```

```{exercise}

Met het programma Phyphox (gratis te downloaden en installeren op je device) kun je nagaan welke sensoren er in je mobiel of ander device aanwezig zijn én je kunt ze gebruiken om te meten. Maak (volgens onderstaand voorbeeld) een lijstje van de sensoren die je in je mobiel aantreft. Noteer ook welke fysische grootheid je er mee kunt meten. Welke functie denk je dat elk van deze sensoren hebben? Bedenk ook één soort meting die je op deze manier met je device kunt doen.

Voorbeelden van digitale sensoren

| Fysieke grootheid | Sensor | Toepassing |
| :--- | :--- | :--- |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

```

**Beschrijving van diverse sensoren in digitale platforms**

Op de [leerlingensite van de module](https://maken.wikiwijs.nl/171772/Schakelmodule%20Digitale%20Technologie%20online%20materiaal) is een overzicht opgenomen van sensoren en de manier waarop ze gebruikt kunnen worden. Raadpleeg die informatie bij de maakopdrachten in deel C.

## Betekenis van sensoren in een context: het sporthorloge

**Sensoren voor hartslag, snelheid, positie**

Je gebruikt steeds meer apparaten die met internet verbonden zijn: muziek luisteren via Spotify, de verwarming aanzetten met een app, video's kijken op je telefoon via Youtube, de lamp aan en uit zetten via wifi of Bluetooth, of betalen via je telefoon. We noemen dit ook wel het Internet of Things ( IoT ). In huis gebeurt dat vaak al via wifi. Dit is een van de redenen dat 5G wordt aangelegd, zodat alle apparaten heel snel met elkaar kunnen communiceren via een mobiele internet verbinding.

In deze opdracht ga je voor een situatie uitzoeken hoe het werkt: een sporthorloge en een app die de metingen kan vastleggen. Je denkt na over vragen als: via welke stappen wordt de informatie verzonden? Waar is beveiliging van gegevens van belang? Waar wordt de informatie opgeslagen? Welke gegevens zijn nodig om de taak uit te voeren? Etc.

**Strava app**

We gaan kijken naar een app waarmee je sportprestaties kunt vastleggen. Strava is wereldwijd een van de grootste sportapps, maar er zijn diverse andere die je ook kunt gebruiken. Jullie gaan aan de slag met een sporthorloge. Misschien heb jij zelf of iemand anders in je omgeving een sporthorloge. Een sporthorloge geeft een compleet beeld van digitale technologie, omdat het meet, communiceert, data verwerkt en inzichtelijk maakt. Verder speelt beveiliging van je gegevens een rol.

Sporthorloges zijn in alle soorten en maten verkrijgbaar, met prijzen variërend van 35 tot 900 euro.

Als je geen sporthorloge hebt dan is het installeren van Strava op je telefoon ook genoeg. Naast Strava zijn er ook andere apps. Als je al een andere sportapp gebruikt dan kun je die ook gebruiken voor de opdrachten. Vermeld dat dan wel.

```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-33.jpg?height=338&width=520&top_left_y=1599&top_left_x=1302
:width: 70%
:name: fig_

Een sporthorloge Bron: Coolblue
https:///Www.androidplanet.n//nieuws/smartwatchstraling/(afbeelding, wordt 3.8)
```

Je onderzoekt een sporthorloge in combinatie met het gebruik van Strava. Hoewel er allerlei verschillende platforms zijn waarop je de gegevens van een sporthorloge kunt verzamelen, is in deze opdracht gekozen voor Strava, omdat dit het meest gebruikte platform is. Maar overal waar je leest over Strava, kun je ook een de naam van een andere, soortgelijke app invullen. Voorbeelden zijn: Nike Run Club, RunKeeper, Endomondo etc. (zie {ref}`fig_strava` en {ref}`fig_strava2` ). Bespreek met je docent wat je/jullie gaan gebruiken in de klas. Je hoeft niet perse een sporthorloge te hebben om deze apps te kunnen gebruiken. bij heel veel activiteiten heb je al genoeg aan een telefoon.

```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-34.jpg?height=834&width=1557&top_left_y=234&top_left_x=232
:width: 70%
:name: fig_strava

Screenshot van Endomondo van een fietsroute van Erik Dekker (tijdens de lock-down, in plaats van Italië) en overzichten van de data die de app verzamelt en presenteert.
```



```{exercise} Sport-apps.
Kies twee sport-apps uit (zie het rijtje in bovenstaande tekst). Zoek uit wat de overeenkomsten en verschillen zijn tussen deze apps.

Heb je zelf een sporthorloge? Gebruik dat als voorbeeld. Je kunt anders uitzoeken wat geldt voor bijvoorbeeld de Garmin Vivioactive 3 (of een opvolger hiervan).
```

```{exercise} Verschil telefoon en sporthorloge
Zoek uit en beschrijf wat de verschillen zijn tussen een telefoon en sporthorloge (Wat kunnen ze meten? Hoe nauwkeurig zijn ze? Wat is het gebruiksgemak?). Geef bij je opdracht aan welke telefoon en welk sporthorloge je met elkaar vergelijkt.
```

```{exercise} Wat kan een sporthorloge meten?
Welke andere onderdelen moet een sporthorloge bevatten om als sporthorloge te kunnen functioneren? Denk aan accu, bluetooth, geheugen, gps etc.. Welke varianten zijn er voor sporthorloges en waarin verschillen ze wat techniek betreft. Maak hiervan een overzichtelijke tabel. Vermeld ook over welk sporthorloge het gaat.
```

```{exercise} Vragen
Hoeveel gebruikers heeft Strava wereldwijd? Hoe vaak gebruiken zij Strava per week? Als er per activiteit van een gebruiker 1 mb aan data verstuurd moet worden, hoeveel data moet er dan gemiddeld per seconde verwerkt worden bij de Strava-servers?
```

```{exercise}  Sensoren in het sporthorloge
Kies een sporthorloge en beschrijf: Welke sensoren zitten er in en op? Heeft het horloge actuatoren, zo ja welke? Hoeveel geheugen heeft een sporthorloge? Wat is de capaciteit van de accu? Wat betekent de capaciteit van geheugen en accu voor het registreren van je activiteiten? Hoeveel activiteiten kun je opslaan en gedurende hoeveel tijd?
```

```{exercise} Strava gebruiken
Download Strava (* of een andere app naar keuze) op je telefoon en maak een account. Maak een opname van een sportactiviteit (bijvoorbeeld: hardlopen, naar school fietsen oid.) Je kunt het gemaakte account ook via een desktopcomputer of laptop bekijken. Kijk welke gegevens Strava* allemaal uit de je horloge of telefoon kan halen. Laat met een aantal screenshots zien wat je zo met Strava* kunt doen.
```

Activiteiten die je met het sporthorloge of je telefoon registreert, levert gegevens op. Dat zijn waarden die uit een reeks sensoren komen. Die gegevens uit je sporthorloge / de sportapp op je telefoon worden via je telefoon naar Strava gestuurd en daar worden de gegevens in jouw account geplaatst. De positiegegevens uit de gps van je device worden op een kaart getekend en de gegevens van andere sporters worden daarmee vergeleken. Vervolgens wordt die informatie weer naar je telefoon of computer gestuurd om het daar te kunnen bekijken en naar de mensen die je volgt gaat een berichtje van wat je hebt gedaan. Vervolgens reageert iemand en die opmerking gaat via internet naar Strava en weer naar jouw telefoon.

Als je een sportactiviteit doet met je telefoon of sporthorloge, kun je de gegevens van die activiteit via een app in kaarten en grafieken te zien krijgen. De volgende gegevens zijn o.a. te zien: de gemiddelde snelheid, hartslag, aantal stappen per minuut, hoogte, afstand en tijd van de activiteit.

```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-35.jpg?height=717&width=1754&top_left_y=1252&top_left_x=157
:width: 70%
:name: fig_strava2

Screenshots van de gegevens van een sportactiviteit in Strava: een rondje hardlopen.
```

```{exercise} Sensorgegevens
Hoe bepaalt je horloge/ telefoon deze gegevens? Welke sensoren zijn er nodig? Hoe wordt de informatie van de sensoren bewerkt om de gegevens te berekenen/creëren.
```

```{exercise} Verwerken van gegevens
Wat is er voor nodig om de plaatjes van afbeelding 3.8 te kunnen maken (route, tempo, hartslag, cadans)? Beschrijf in je antwoord per soort gegevens wat er gemeten wordt en hoe het bewerkt wordt om deze gegevens en grafieken te krijgen.
```

De verwerking van dergelijke meetgegevens is vaak een black box. Je weet ongeveer wat er ingaat en wat er uitkomt, maar wat er in de black box gebeurt is onduidelijk. Het onderstaande analyseschema is bedoeld om inzicht te krijgen wat er met de informatie gebeurt en welke processen een rol spelen.

We gaan kijken naar wat de invoer is, wat er op de plaats van de streepjes gebeurt en welke processen spelen in de black box.

```{exercise} Invullen van het analyseschema voor een sporthorloge
Noteer in het analyseschema (leeg schema achterin de lesmodule of verkrijgbaar als los werkblad) zoveel mogelijk processen tussen het sporthorloge, je telefoon en de Stravaserver. Hieronder een tabel met voorbeelden van processen die je in het analyseschema opneemt.

| Invoer/waarnemen | - | Verwerking | - | Uitvoeren |
| :--- | :--- | :--- | :---: | :--- |
| Een opname van <br> een sportactiviteit <br> starten. | Signaal naar <br> Strava om <br> vanaf nu mij <br> positie met gps <br> bij te houden. | Er is een bestand <br> gemaakt. Met <br> mijn naam, <br> datum en tijd <br> waarin positie en <br> tijd wordt <br> bijgehouden. | Positie wordt <br> geplot op een <br> kaart en de <br> snelheid en <br> gemiddelde <br> snelheid wordt <br> berekend. |  |

Noteer deze processen in de blauw omlijnde vakken in het analyseschema. Gebruik werkwoorden.
```

## Onderzoeken en maken

Met sensoren kun je allerlei onderzoek doen, zelf bouwen en gebruiken. Onderstaand een aantal suggesties. Kies er één uit:

1. Een windmeter maken is interessant en goed te doen, bijvoorbeeld zoals op https://www.microsoft.com/en-us/education/education-workshop/anemometer.aspx
2. Onderzoek de eigenschappen van één of meerdere sensoren uit het sporthorloge (wat kan de sensor meten, welke gevoeligheid en met welke nauwkeurigheid?)
3. Haal een digitale koortsthermometer uit elkaar en onderzoek de eigenschappen van de temperatuursensor. Andere kant: kun je de koortsthermometer laten werken met een andere, zelf gemaakte, sensor?
4. Meten van vochtigheid: geleidbaarheid. Gebruik hiervoor de standaard beschikbare vochtigheidssensoren bij Arduino. Kalibreer de sensor voor toepassing in een relevante situatie. Bijvoorbeeld: een tuinder laten weten op welk moment zijn planten water nodig hebben of een waarschuwing dat een ruimte geventileerd moet worden omdat de luchtvochtigheid te hoog is.
5. Windsnelheid: gebruik een rotatiesensor
6. Meten van waterstroming (rotatie, verwarming-temperatuurverschil).
7. Indirecte meting (proxy) van grootheden die niet rechtstreeks meetbaar zijn, bijvoorbeeld met camera's, weerkaatsing van geluid, versnellingssensoren.
8. Maak zelf een vochtigheidssensor met koperdraad, gips en een houtblokje. Meet de weerstand in het koperdraad. Breng water aan op het gips en maak een ijkreeks. Wat betekent de waarde die de sensor oplevert? Hoe kan de gemeten waarde gebruikt worden in de praktijk?
9. De nlt-module Sportprestaties beschrijft het maken van een draaihoek-sensor. Hiervoor wordt een potmeter (draaiweerstand) gebruikt, die aangesloten wordt op de computer via Coach. Op welke manier is deze sensor te gebruiken in combinatie met Arduino of een ander microcontroller platform?
10. Een eenvoudige versie van de papieren vochtsensor van de Q-strip kan zelf gemaakt en getest worden. Het eerste gedeelte van de opdracht $Q$-strip (hoofdstuk 7) beschrijft deze werkwijze. Onderzoek de relatie tussen hoeveelheid vocht in de sensor en de waarde die met de Arduino gemeten wordt. Maak daarvan een ijkreeks.
11. Apple heeft een beker ontworpen die bijhoudt hoeveel je drinkt. Handig voor mensen die zó in beslag genomen worden door de computer dat ze alles om zich heen vergeten. Welke sensoren zouden er in zo'n beker aanwezig zijn en hoe werken ze? Pas je kennis toe in het ontwerp van een klein blokje dat je op een willekeurig drinkflesje kunt plakken en registreert wanneer en hoeveel er uit gedronken wordt.

