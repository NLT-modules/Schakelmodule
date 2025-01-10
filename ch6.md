# Uitvoer: de actuator


```{figure}
:width: 70%
:name: fig_

(https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-64.jpg?height=1171&width=1554&top_left_y=314&top_left_x=237)
```

## Leerdoelen

**Kennis**

1. Je kunt uitleggen dat digitale systemen invloed kunnen hebben op hun omgeving door middel van actuatoren

2. Je kunt uitleggen dat actuatoren zoals lampjes, speakers, motoren, RF zenders, servomotoren in veel verschillende digitale systemen voorkomen en dat je die (relatief) eenvoudig zelf kunt bouwen

**Vaardigheden**

3. Je hebt ervaren dat je in je programmeercode in je digitale systeem soms bepaalde bibliotheken moet gebruiken om actuatoren te kunnen gebruiken

4. Je hebt ervaren dat je voor het aansturen en monteren van actuatoren online veel informatie kunt vinden op websites als stackoverflow en reddit.

5. Je hebt kennisgemaakt met het aansturen van actuatoren en dat dit gevolgen heeft voor het stroomverbruik van je digitale systeem en dat ontwerpkeuzes dus invloed hebben op de duurzaamheid van je systeem

6. Je hebt ontdekt hoe goed jouw actuatoren functioneren en hun omgeving beïnvloeden en kunt beoordelen of jouw digitale systeem voldoet aan de ontwerpeisen die je hebt gesteld.

## Invloed op de omgeving uitoefenen

Aan digitale apparaten hebben we weinig als ze niets in buitenwereld kunnen veranderen. Daar horen jij en ik ook bij. Daarom heeft een digitaal apparaat onderdelen die kunnen bewegen, geluid maken of licht geven: de actuatoren. Soms zijn dat onderdeeltjes die al verwerkt zijn op een chip of printplaatje, zoals een lichtgevende diode (LED) die aangaat als de chip stroom krijgt, zodat we daaraan kunnen zien of het apparaat 'aan' staat of dat er data ontvangen of weggestuurd wordt.

Een digitaal systeem zonder actuatoren kan uiteindelijk niet communiceren of dingen doen. Pixels op een scherm aan- of uitschakelen is een manier van communiceren. Een triltoon van je mobiel is eigenlijk een klein motortje dat even aangaat. Zo zijn er allerlei dingen bedacht om licht, geluid of beweging te maken. Uiteindelijk gebeurt dat bijna altijd door elektrische spanning aan of uit te schakelen. Wat we als mensen met onze handen doen, laten we nu door machines uitvoeren.

Digitale actuatoren zijn verwerkt in de machine en worden door de processor(en) aangestuurd. Ze gebruiken informatie uit databestanden en input uit sensoren. Daarmee kunnen ze hun klus doen. Naast de actuatoren heeft een systeem ook veel sensoren die waarnemen wat het systeem zèlf doet en veranderingen in de fysische grootheden waarnemen in de omgeving van het systeem. Hierdoor kan het systeem terugkoppeling ontvangen en zichzelf bijsturen. Hoe ingewikkelder de omgeving en hoe minder voorspelbaar, hoe belangrijker het is om die terugkoppeling te gebruiken.

Maar bewegingen en verplaatsingen, zoals zelfrijdende auto's of robotarmen, vragen veel meer controle en waarneming, omdat de buitenwereld een stuk minder voorspelbaar is én omdat het apparaat zelf beweegt. Terugkoppeling is het gebruik van informatie over het effect om de handeling te kunnen bijsturen. Zelfsturende (autonome) systemen zijn heel ingewikkeld, omdat ze vol sensoren zitten om de terugkoppeling naar de actuatoren te kunnen uitvoeren.

```{exercise} Terugkoppeling

Teken een eenvoudig schema voor een zelfrijdende auto of een autonome robot. Benoem enkele sensoren, processoren en actuatoren en geef aan op welke manier terugkoppeling (feedback) in dit systeem noodzakelijk is

Voorbeelden van actuatoren die in digitale systemen bruikbaar zijn

| Fysieke verandering | Actuator | Toepassing |
| :--- | :--- | :--- |
| Draaibeweging | Stappenmotor |  |
| Lengteverplaatsing | Linaire motor |  |
| Licht geven | Diode | LCD, OLED: beeldpunt laat licht <br> door of produceert licht |
| Beeldscherm | Lineaire motor of Piezo (zet uit <br> als er elektrische spanning op <br> komt) |  |
| Klep bedienen | Luidspreker: spoel en magneet <br> Piezo-element |  |
| Geluid laten horen |  |  |
```

## Licht geven of selectief doorlaten

Met actuatoren die licht geven (LED) of blokkeren (vloeibare kristallen) als beeldelement (pixel) of kleurstof die zich verplaatst bouwen we de enorme variatie aan beeldschermen die we nu kennen. Als digitale data gebruikt wordt om beelden te maken wordt iedere pixel apart aangestuurd. Kleuren worden gemaakt door aparte pixels die rood, groen of blauw licht uitzenden. Er is digitale data nodig voor kleur en helderheid van de pixel én om te vertellen welke pixel die waarde moet krijgen (adres).

```{exercise} 
Kijk eens met een sterk vergrootglas naar het beeldscherm van je telefoon of computer. Hoe ziet dat er uit op een plek die 'wit' is? Wat zie je bij een plek die 'geel' is?
```

Een beeldscherm kan een matrix zijn van LED's (die zelf licht uitzenden), zoals in een OLED (Organische LED) scherm. Vloeibare kristallen (die licht doorlaten als ze spanning krijgen) vormen samen met een witte achtergrondverlichting een LCD (Liquid Cristal Display). TFT (Dunne Film Transistor) is een variant van LCD die transistoren heeft om de individuele pixels te kunnen schakelen. De verfijnde mogelijkheden om deze beeldschermen dun en flexibel te maken zorgt voor de ongekend grote beeldschermen met miljoenen pixels en kleuren en hoge snelheid.

Een digitale projector (beamer) heeft kleine, doorschijnende LCD beeldschermpjes voor de drie primaire kleuren rood, groen en blauw, met een heldere lamp erachter. Dit is steeds vaker een heldere LED, vandaar LED beamer. Ook de bioscoop gebruikt tegenwoordig digitale projectoren.

![]
```{figure}
:width: 70%
:name: fig_
(https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-66.jpg?height=255&width=256&top_left_y=929&top_left_x=1551)

```

Figuur 6.1 Uitvoeren: de actuator


```{exercise}
Zoek eens uit hoe een digitale projector in elkaar zit.
```

Digitale data wordt gebruikt om LCD pixels te schakelen. Voor zowel LCD als LED pixels wordt de helderheid bepaald door de tijdsduur die de pixel doorschijnend is of aan staat. Dit gebeurt door Pulse Width Modulation. Als een lichtbron vaker dan 24 keer per seconde aan-uit gaat nemen onze ogen geen flikkering meer waar. Vandaar dat beeldschermen een verversingsfrequentie van 50 Hz of meer hebben. Toch waarderen onze ogen die flikkering niet altijd, vooral bij het lezen van beeldschermen. Onze ogen bewegen snel en trillen zelf ook. Het flikkeren van het beeldscherm kan ervoor zorgen dat de ogen precies in beweging zijn als het scherm wordt ververst en daardoor even het focuspunt kwijt zijn. Dat kan verklaren waardoor lezen van beeldschermen minder prettig is. Bovendien stralen beeldschermen (veel) licht uit, wat ook vermoeit.

Er zijn schermen die niet constant ververst worden, namelijk E-ink of electronisch papier. De zwarte korrels in de inkt verplaatsen zich als er spanning aan één kant wordt gezet. Als de spanning weg valt blijft de inkt op z'n plek, tot de spanning aan de andere kant van de pixel staat. Met de grootte en tijdsduur van de spanning kan de zwartheid van de pixel worden bepaald. Hiermee ontstaat een stabiele matrix van grijswaarden. Er is geen spanning nodig om het beeld te bewaren. Zo'n scherm verbruikt nauwelijks stroom, maar is ook heel traag en dus niet zo geschikt voor een computer, maar prima voor een E-reader. Met omgevingslicht is het scherm te lezen als papier, wat onze ogen zeer waarderen. Met een beetje achtergrondlicht zijn zulke schermen ook bruikbaar in het donker.

De digitale data moet vertellen of een pixel aan staat, in welke kleur en welke helderheid. Om dit mogelijk te maken moet ook bekend zijn waar de pixel zit. Goede beeldschermen hebben veel pixels, veel kleuren, snel schakelende pixels en een groot verschil tussen donker en licht (contrast).
Daarvoor is veel data nodig. Vooral bewegend beeld Vraagt veel bandbreedte, om schermen te
kunnen aansturen. Door de snellere processoren, glasvezel en betere datacompressie lukt het beeld van hoge kwaliteit te transporteren én te tonen.

### Verplaatsen: motoren

```{figure}
:width: 70%
:name: fig_

(https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-67.jpg?height=253&width=250&top_left_y=476&top_left_x=246)

Digitaal - Analoog conversie
```

Een elektromotor zet stroom om in een draaibeweging. Het is prettig als je die draaiing onder controle kunt houden. Daar zijn grofweg twee manieren voor. De ene manier is dat er aan de motor een sensor komt te zitten, die vertelt in welke stand de motor staat of hoeveel omwentelingen de motor heeft gedaan.

De andere manier is het gebruik van een stappenmotor. Een stroompuls zorgt dat de motor één stapje verplaatst, bijvoorbeeld 2 graden (van de 360). Met het aantal stroompulsjes is te bepalen hoever de motor draait. Het digitale signaal wordt zo rechtstreeks vertaald in een kleine verplaatsing. Met tandwieltjes en een aandrijfriem of een schroefdraad kan een draaiende beweging ook omgezet worden in een lineaire beweging. Je vindt dit bijvoorbeeld in printers (zowel 3D als inktjet). Ook de motortjes in een harde schijf zijn actuatoren die aangestuurd moet worden.

### Geluid maken

Een korte spanning kan ook weer gebruikt worden om een elektromagneet te activeren. Als je dit snel doet, kan daarmee een snelle trilling (en dus geluid) ontstaan. Een trage trilling kan gebruikt worden als trilfunctie in je mobiel. Voor kwalitatief goed geluid moet het digitale signaal netjes worden omgerekend naar een continu variërende spanning met veel meer vermogen. Daarvoor dient de digitaal-analoog convertor in een (digitale) audioversterker of de aansturing van een lijnuitgang of hoofdtelefoon-uitgang.

### Elektromagnetische straling maken

De digitale pulsen kunnen ook gebruikt worden in een radiozender. Een spoel zendt radiogolven uit als er elektrische pulsen binnenkomen. De radiogolven van precies vastgelegde golflengte kunnen als Wifi of Bluetooth signaal opgevangen worden door antennes (ook sensoren).

### Printen

Inkt of poeder (in de basiskleuren CMYK: cyaan (blauwig), magenta (rozerood), yellow (geel) en black (zwart)) vormen de basis van de vierkleurendruk, inkjetprinters en laserprinters. Motoren verplaatsen het papier en de inktkop. Laserbundels zorgen voor een electrische lading op een metalen rol, waardoor kleurstofpoeder (toner) vastgehouden en daarna op papier gedrukt kan worden. Na verhitten zit de toner vast op het papier. Inktjetprinters werken met vloeibare inkt die uit microdunne kanaaltjes gespoten wordt. Bij een inktjetprinter bepaalt Piezo-materiaal (dat uitzet als er spanning op staat) of de inkt uit het kanaaltje kan. Een digitaal bestand vertelt wanneer, waar en hoeveel inktdruppeltjes van elke kleur boven het papier afgeschoten moet worden.

```{exercise}
Thermisch papier wordt zwart als het warm wordt en is daardoor heel handig om simpel te
kunnen afdrukken. Veel kassa’s hebben een thermische printer. Op welke manier zou zo’n
printer leesbare tekst kunnen afdrukken?
```

```{exercise}
Onderzoek welke data een inkjet- of laserprinter nodig heeft om een afdruk te kunnen maken en hoe een printer dat voor elkaar krijgt. Welke actuatoren zitten er in de printer en hoe worden die aangestuurd? Heeft een printer ook sensoren, processoren, dataopslag en transport? Gebruik het analyseschema (leeg schema achterin de lesmodule of verkrijgbaar als los werkblad) om je bevindingen overzichtelijk te maken. Welke verschillen kun je noemen tussen de inkjetprinter, laserprinter en thermische printer?
```

```{exercise} Andere digitale maakapparaten

Een 3D printer, plotter, CNC frees, digitale snijmachine of een lasersnijder werken technisch niet heel veel anders dan een inkjetprinter. Het belangrijkste verschil is het werktuig: een spuitmond voor vloeibaar materiaal (3D printer), een pen, een ronddraaiende beitel, een mesje of een krachtige laserbundel die papier, metaal, hout of kunststof kan bewerken. Vind een aantal voorbeelden op het internet. Voor welke toepassingen wordt het apparaat gebruikt? Maak hiervan een overzichtelijke tabel.
Kies één van deze apparaten uit en zoek verder uit hoe deze (technisch) werkt. Onderzoek ook op welke manier zulke apparaten aangestuurd worden (hoe de data er uit ziet als ze hun werk doen). Kijk of er één of meer van deze apparaten op school aanwezig zijn en Vraag om uitleg daarover. Een Fablab of Makerspace heeft zulk digitaal maakgereedschap zeker in huis.
```

### Andere computers als actuator: datasystemen

Wanneer digitale apparaten data aan elkaar doorgeven, kunnen uitgebreide systemen worden gebouwd waarin gegevens van talloze sensoren gebruikt worden om data te verzamelen. Deze data worden gebruikt om op allerlei plekken informatie te laten zien. Een apparaat kan dan één stukje van het totale proces uitvoeren. Het ene apparaat doet bijvoorbeeld de omzetting van een temperatuur naar een digitaal signaal. Een ander apparaat verzamelt de gegevens van de meetapparatuur en kan de gegevens opslaan in een database. Een computer heeft dan zelf geen beeldscherm of printer nodig en kan toch invloed hebben op de buitenwereld.

Computers kunnen de gegevens uit de database lezen, en via programma's (algoritmen) nuttige informatie uit de database berekenen. Een klimaatwetenschapper kan dit gebruiken om temperatuurstijging uit lange termijn weergegevens te berekenen. De uitvoer van de gegevens gebeurt dan pas als de data in een lijst of als grafiek op een beeldscherm getoond worden. De bits in de data zijn dan al talloze keren tussen processor en opslag uitgewisseld.

### Voor de makers

Ook voor actuatoren moet code gebruikt worden om ze goed aan te sturen. Dit soort informatie wordt gedeeld via online platformen. Als je Arduino-actuatoren gebruikt, zijn ze te vinden via Arduino.cc of Tinkercad of het platform dat bij je device hoort (micro:bit, Raspberry Pi of M-bot).

De professional kijkt op
https://stackoverflow.com of https://www.reddit.com. Als je digitale ontwerpen (zoals 3D tekeningen) maakt, kun je die bijvoorbeeld op github.com delen. Er is véél meer dan we hier kunnen noemen. Via de leerlingensite is ook e.e.a. te vinden.

```{exercise} verdieping
Op welke manier worden digitale motoren aangestuurd? 3D-Printbestanden, snijfiles, robotprogramma's, stuurprogramma's voor printer. Basisstructuur van een file, wat voor soort codering?
```


## Mechatronica in bedrijf

Mechatronica is het gebied waar mechanica (werktuigen) en electronica (digitale technologie) elkaar ontmoeten. Slimme machines, robots, scanners: overal worden actuatoren gebruikt. Mechatronica is een uitgebreid terrein, want een digitaal systeem zonder actuatoren is uiteindelijk onbruikbaar. In Nederland wordt veel onderzocht en gemaakt voor of met de digitale technologie.

```{exercise} Kennismaken met bedrijven
Over diverse bedrijven zijn lesbrieven gemaakt om je een beeld te geven wat ze (met digitale technologie) doen. Deze kun je vinden op: http://www.brainport.nl/lesmateriaal. Kies één van de hieronder genoemde vier bedrijven en werk een gedeelte van de bijbehorende lesbrief uit (afhankelijk van je beginkennis). Je kunt uiteraard méér of andere kiezen. Overleg de keuzes met je docent.

1. ASML: hun chipmachines zijn de werkpaarden waarmee fabrikanten alle chips maken die in alle digitale apparatuur wordt toegepast. Het EUV licht wordt gemaakt met tindruppeltjes en een zware laser. Hoe gaat dat in zijn werk?
2. Vanderlande: wereldwijd worden in luchthavens en sorteercentra de lopende banden van Vanderlande gebruikt. Hoe in die systemen de digitale technologie een rol speelt ontdek je in de lesbrief.
3. DAF: DAF werkt aan zelfrijdende vrachtwagens. Kunstmatige intelligentie moet helpen om de vrachtwagen de juiste koers te laten rijden. Maar hoe gaat dat in zijn werk?
4. Philips: Bij Philips wordt medische apparatuur gemaakt, waaronder MRI scanners. Het herkennen van beelden uit deze scanners is een vak apart waar kunstmatige intelligentie welkom is. Hoe gaat dat in zijn werk?
```


```{exercise} Actuatoren in context?
Er zijn talloze andere, aansprekende voorbeelden van de rol van actuatoren bij digitale technologie. Ze zijn de moeite waard om verder uit te zoeken. Kies één van onderstaande onderwerpen om je verder in te verdiepen. Maak over het thema een stuk van maximaal twee pagina's (inclusief illustraties), dat je zou kunnen toevoegen aan deze module.

- Robotica (Boston Dynamics, zelfrijdende auto, drone, ...)
- Robotarm (voor operaties, inbrengen hersenimplantaat, lassen of montage)
- Het knuffelrobotje voor dementerenden
- Beeldschermen die zich aanpassen aan de lichtomstandigheden en de gebruiker
- Robotbeestje om gedrag op video vast te leggen (Pinguinrobot met camera) Planetearth.
- Rat met actuator in brein - aardbevingsgebieden doorzoeken
- Microscopen en 3D beeldvorming
```



```{note}
Maakopdrachten op verschillende niveau's. Met een serie maakopdrachten kan telkens een nieuw aspect van digitaal maken ontdekt worden. Zoals: ledje laten branden (1. sensoren), code aanpassen (2. data verwerken), draadloos aansturen (3. Datatransport), actuator laten werken (4. actuatoren). In hoofdstuk 7 zit een verdiepende opdracht met deze kennis.
```


## Maakopdracht met Micro:bit, Arduino of Raspberry Pi.

```{exercise}
In bijlage 3 in de moduledatabase wordt de NeoPixel beschreven. Ga daarmee aan de slag, en experimenteer met de mogelijkheden die zulke LEDs bieden.
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-70.jpg?height=189&width=1444&top_left_y=819&top_left_x=363)

Programmeer vervolgens de Arduino (of een ander device), zodat een serie NeoPixels gebruikt kunnen worden als mooie richtingaanwijzer voor een moderne auto (ledjes die van links naar rechts oranje oplichten). De richtingaanwijzers aan de achterzijde zijn daarna uit, aan de voorzijde geven ze na gebruik continu wit licht geven als dagrijverlichting. Maak voor beide situaties een programma.
```

```{exercise} Keuzeopdracht

Er zijn talloze actuatoren en meer dan genoeg interessante systemen om te onderzoeken of te bouwen. Hieronder een aantal voorbeelden. Op de leerlingensite staan wat tips om mee te beginnen. Vraag je docent / TOA welke materialen er op school beschikbaar zijn:

Beeldscherm
CNC machine
Lasersnijder
Plotter / snijplotter
3D printer
Voedselprinter
Inkjet
Poederstraal printer
Thermische printer
Holografische projector
Beamer
Robotproject Leaphy
Karretje
Motoren

Zelfrijdende auto
Robotarm
Kleppen
Schakelaars (bijvoorbeeld een
schakelaar om voor 220 V apparaten
met Arduino te bedienen)
Beweging en licht
Temperatuur verandering
(verwarmer)
Menger
Drukvat, compressor (aansturen zware machines)
Stembediening voor je lampen, gordijnen, koffiemachine.
```
