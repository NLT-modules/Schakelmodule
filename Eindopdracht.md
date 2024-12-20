## 7 Eindopdracht: Digitaal device ontwerpen

## Leerdoelen

7.1 Je leert de ontwerpcyclus beheersen en toepassen om een werkend prototype te kunnen bouwen dat een probleem oplost.
7.2 Je krijgt inzicht hoe innovaties in de tijd veranderen
7.3 Je maakt kennis met opdrachtgevers en realistische opdrachten uit het bedrijfsleven

## Projecten

### 7.1 Digitale technologie in huis: weerstation voor het binnenklimaat.

In huis wil je een veilig en gezond binnenklimaat hebben. Fijne temperatuur, geen geurtjes, tocht of vocht, en de waarden voor $\mathrm{CO}_{2}$ en CO binnen de normen. Deze parameters zijn goed meetbaar met digitale sensoren. Met je kennis van digitale microcontrollers kun je een gecombineerd device bouwen en programmeren, dat deze waarden voor je in de gaten houdt. Maak gebruik van de standaardsensoren voor vocht, licht en temperatuur. Fijnstof (rook), CO en $\mathrm{CO}_{2}$ vragen extra sensoren. Zoek op internet wat er verkrijgbaar is of Vraag je docent/TOA naar de beschikbaarheid op school.

## Opdracht:

Maak met digitale elektronica een weerstation voor in huis.
Meet een combinatie van licht, temperatuur, vocht, fijnstof en tocht (tenminste drie van deze waarden). Programmeer het apparaat zo dat de afwijking ten opzichte van de comfortwaarde (optimale waarde) wordt bepaald.
a. Eerste stap: als er iets niet deugt, kan het device via LEDs signalen afgeven. Groen betekent: alle meetwaarden vallen binnen de grenzen (beneden-bovengrens). Geel betekent: één of meer waarden wijken gering af. Rood betekent: één of meer waarden wijken sterk af. Op een display moet blijken welke waarde afwijkt / afwijken en hoe sterk.
b. Een stapje verder: het kan zijn dat het apparaat jou informeert via een schermpje, geluiden of een bericht op je mobiel. Zorg dat je apparaat één van deze extra opties kan gebruiken.
c. Nog een stap verder: je kunt het device ook signalen laten versturen naar regelapparaten. Zorg dat je apparaat verwarming, verlichting of ventilatie kan in- of uitschakelen (alsof je een lamp aan- of uitschakelt). Laat je device ook een alarm geven wanneer er schadelijke concentraties stoffen in de lucht zijn.

## Aanwijzingen

## 1. Vochtmeting

Voor Arduino zijn diverse vochtsensoren beschikbaar. Een standaardsensor is bijvoorbeeld geschikt om in een bloempot te zetten en te meten of de plant water moet hebben. Met een kleine aanpassing kan hier een apparaat van gemaakt worden dat vocht in muren meet.

## 2. Fijnstofmeting

Bij de module Fijnstof zit een pakketje met fijnstofsensor (lasergestuurd) die gekoppeld is aan fijnstofmeting in de lucht. Met kleine aanpassingen zou dit geschikt zijn om fijnstof in
huis te meten.
3. Lichtmeting

Arduino heeft diverse lichtsensoren. Hiermee is redelijk eenvoudig de lichtsterkte te bepalen. Met geschikte sensor ook in Lux.
4. Temperatuurmeting (ook temperatuur/vochtigheid)

Arduino heeft sensoren voor temperatuur. Prima geschikt als thermometer voor een ruimte.
5. Tocht / convectie

Voor tocht zou een schoepenrad gebruikt kunnen worden (op een rotatiesensor). Rook is wat ingewikkelder.
6. Gehalte $\mathbf{C O 2}$ in de lucht /Gehalte schadelijke gassen in de lucht (gecombineerde sensor) Voor deze metingen zijn speciale sensoren beschikbaar.

### 7.2 Wetropolis: sensoren en actuatoren voor waterbeweging

Nederland heeft een ervaring van eeuwen met het leven met water. Toch is het nodig dat we onderzoek blijven doen hoe we moeten omgaan met het veranderende klimaat. Meer droogte, hevige regenval in korte tijd, stijging van de zeespiegel: het Vraagt aanpassingen. Wat we het beste kunnen doen, wordt onderzocht met modellen. In het Verenigd Koninkrijk zijn vaak problemen met wateroverlast. In Leeds zorgde de rivier Aire ervoor dat de stad in korte tijd blank stond. Wat er moest gebeuren om dat te voorkomen wist niemand. Onderzoekers hebben toen een model gebouwd van de rivier en de stad, om te onderzoeken wat de beste aanpak was. Dat model werd Wetropolis genoemd. In Nederland zijn we dit model verder gaan ontwikkelen om ook in het onderwijs te gebruiken. In het model stroomt water, kunnen overstromingen ontstaan en wordt gekeken hoe regenval en waterafvoer het waterpeil in het landschap verandert. Om het model realistisch te laten werken is het nodig om regenval te simuleren (dus: water op het model laten regenen), het waterpeil in een rivier, sloot of bodem te meten, stroomsnelheid te bepalen.

Ontwikkel op basis van je kennis over digitale sensoren en meetprincipes een systeem waarmee:
1 Het waterpeil in het model nauwkeurig en automatisch kan worden gemeten
2 De stroomsnelheid van water automatisch kan worden gemeten
3 De afvoersnelheid en afgevoerde hoeveelheid water door buisje (regenpijp, riool) kan worden gemeten in de tijd
4 De aangevoerde hoeveelheid rivierwater kan worden geregeld en gevarieerd
5 Regenval nagebootst kan worden.
Alle sensoren en actuatoren moeten uitgelezen worden en data moet op één plaats verzameld worden. Kijk voor informatie over technieken van sensoren en modelbouw op wetropolis.nl.
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-73.jpg?height=841&width=1106&top_left_y=1470&top_left_x=612)

Figuur 7.1 Originele Wetropolis model voor rivierwater in de stad

### 7.3 Digitale devices die een oplossing zijn bij opwarming in de stad

In de grote steden zal bij klimaatverandering de temperatur harder toenemen dan in het omliggende landelijk gebied. De NLT module "summer in the city" gaat hier helemaal over. Voor sommige van die gevolgen zou je een digitaal device kunnen maken dat de gevolgen hiervan vermindert.

Opdracht:
Ontwerp een apparaat dat ons leven fijner maakt als de steden flink gaan opwarmen.
Voorbeelden zijn:

- Vogelhuisjes met airco
- Drinkbakjes voor dieren die door een sensor water geven als het bakje leeg is en er een dier wil drinken
- Drinkbekers die meten hoeveel er gedronken wordt en een signaal geven als je te weinig drinkt
- Zweetdetectiesysteem in je kleding om je te waarschuwen als je teveel hebt gezweet en mogelijk gaat stinken
- Een systeem dat meet welke vuilnisbakken in het park te vol zitten en dus mogelijk erg gaan stinken. Vervolgens geeft het systeem een waarschuwing af zodat er gericht geleegd kan worden
- Een systeem dat de troebelheid in vijvers meet (met mogelijk in de zomer blauwalgrisico) en waarschuwt als het te troebel wordt (zie figuur 7.2).

Er zijn nog veel meer dingen te bedenken. Bovenstaande apparaten zijn ook al echt door leerlingen gebouwd, dus het kan echt.
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-74.jpg?height=912&width=1363&top_left_y=1534&top_left_x=229)

Figuur 7.2 Een device dat leerlingen gemaakt hebben om troebelheid in vijvers te meten

## Stappenplan

1. Bedenk een concreet probleem dat met technologie opgelost kan worden.
2. Stel de eisen op die je aan het apparaat stelt.
3. Breek het ontwerp op in stukken:

Welke zaken wil je meten met sensoren?
Wat voor effect moet je apparaat hebben?
Hoe moet de data opgeslagen worden?
Moet de data verzonden worden?
Door eerst elk probleem apart op te lossen kom je uiteindelijk sneller bij een totaaloplossing.
4. Test het ontwerp en pas het aan tot je tevreden bent

Wellicht kunnen jullie in de klas een wedstrijd doen wie het beste ontwerp bouwt voor een probleem. Op die manier wordt het ook belangrijk dat je je eigen ideeën geheim houdt.

### 7.4 De Q-strip: meten van transpiratievocht

### 7.4.1 Introductie

## Meten aan zweten

Het meten van vocht heeft veel zinvolle toepassingen. Eén daarvan is het meten van het vocht dat we zelf afgeven via onze huid: transpiratievocht. Nuttig om te kunnen afkoelen als we het warm hebben, lastig als we fietsen in een waterdicht regenpak of 's nachts in ons bed badend in het zweet wakker schrikken.

Het kan bijvoorbeeld voorkomen dat je ziek wordt, bijvoorbeeld door griep. Als je lichaamstemperatuur omhoog moet, probeer je zoveel mogelijk warmte vast te houden. Je gaat rillen en krijgt kippenvel. Je kruipt in bed. Als je het te warm hebt gaat je lichaam flink transpireren (zweten). Dat gebeurt ook als de koorts weer zakt of als je een paracetamol of aspirine hebt geslikt.

Tijdens de nacht produceren we vocht door transpiratie, soms tot wel een liter per nacht. Dat gaat niet heel gelijkmatig en is ook niet bij iedereen hetzelfde. Als het gelijkmatig en niet hinderlijk is, spreken we over nachtelijke transpiratie. Daarin zijn bij mensen zo'n zeven patronen te herkennen, waarbij de vorm naar een diersoort genoemd is die er op lijkt.

Als je er last van hebt en er bijvoorbeeld wakker van wordt, praten we over nachtzweten. Ook bij veel diersoorten blijkt
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-76.jpg?height=507&width=952&top_left_y=980&top_left_x=1003)

Figuur 7.3 Patronen voor nachtelijk zweten, gemeten met Q-strip
nachtelijke transpiratie in patronen voor te komen.

Nachtzweten is ook een symptoom van verschillende ziekten. Het komt voor bij sommige vormen van kanker (zoals leukemie). Overmatig zweten komt ook voor in de dagen voorafgaand aan een hartinfarct. Zweet is daarom een steeds populairdere informatiebron voor de medische wetenschap. Andere informatiebronnen zijn bijvoorbeeld bloed, urine, speeksel en tranen. Naar de laatste twee vormen wordt nog veel onderzoek gedaan.

Momenteel worden wereldwijd diverse instrumenten ontwikkeld om de samenstelling van zweet te kunnen meten. Inmiddels is bekend dat je diverse stoffen in het zweet terug kunt vinden: ionen als natrium, kalium, chloride en ammonium, alcohol, melkzuur, peptiden en eiwitten (Bron: https://en.wikipedia.org/wiki/Sweat diagnostics ). Deze stoffen noemen we biomarkers en vertellen ons veel over het functioneren van het lichaam. Als een waarde afwijkt van wat normaal is, kan dat betekenen dat iemand ziek is. Biomarkers zijn dus heel belangrijk bij het ontdekken en bestrijden van ziekten. In Nederland wordt veel onderzoek gedaan naar biomarkers.

Naast de samenstelling van het zweetvocht is ook van belang op welke momenten dat zweet wordt geproduceerd. Het gaat dan niet om nachtzweten, waarvan je wakker wordt, maar de normale onbewuste zweetpatronen. Die kunnen gemeten worden met de Q-strip. Dat is een eenvoudige sensor van papier en geleidend materiaal, die je op het matras kunt leggen. Een kleine computer meet de geleiding en daarmee de hoeveelheid en moment van zweetproductie.

## Onderzoek doen

Dat zweetproductie een informatiebron is weten we, maar wat die zweetproductie ons kan vertellen is nog niet duidelijk. Er is nog nauwelijks wetenschappelijk onderzoek naar gedaan, voornamelijk omdat meten aan zweten heel complex is. In het verleden werd dat gedaan door proefpersonen te laten slapen in kamers met een temperatur van 30 graden Celcius (pfff). Met de Q-strip
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-77.jpg?height=481&width=923&top_left_y=245&top_left_x=972)

Figuur 7.4 Meetresultaten Q-strip
wordt dat een heel stuk eenvoudiger, omdat die gevoelig is voor de normale zweetproductie bij de normale slaaptemperatuur.

De Q-strip is een eenvoudige sensor die door iedereen zelf te maken is, en geschikt is voor het zelf meten en data verwerken. Ook de meetcomputer is zelf in elkaar te zetten en te programmeren, en via het internet kunnen de data verzameld en geanalyseerd worden. Daarmee is de Q-strip een ideaal digitale technologie-project. Het onderzoek dat je hiermee doet kan een belangrijke bijdrage leveren aan het voorkomen en genezen van talrijke nare ziekten. Doe je mee?

In de opdracht is een aantal onderdelen te herkennen:

- Standaardopdracht: maken en meten
- Uitzoeken hoe de sensor optimaal gemaakt kan worden
- Meerdere sensoren gebruiken
- Wearables voor dataverzameling overdag
- Verzamelen en transport van data
- Analyse van meetdata om te ontdekken wat de transpiratiepatronen betekenen
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-77.jpg?height=797&width=643&top_left_y=932&top_left_x=1226)

Figuur 7.5 Plaatsing van een Q-strip sensor op matras

- Privacy en beveiliging van data


## Zelf maken van een Q-strip sensor

A Opdracht:
Maak en test een kleine Q-strip-sensor
Benodigdheden:

- Keukenrol (geribbeld, $1300 \times 40$ ribbon)
- Koolstofvezel 4K (200-400 TEX)
- Uierzalf (gebruik géén vaseline)
- Wateroplosbare (knutsel)lijm
- Schaar (scherp)
- Strijkijzer
- Papier

Smeer de koolstofdraden dun in met uierzalf. Dit zorgt ervoor dat de 7 micrometer dunne koolstofvezeltjes aan elkaar blijven kleven. Ook kun je zo een bundel koolstofvezel splitsen
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-78.jpg?height=455&width=612&top_left_y=523&top_left_x=1233)

Figuur 7.6 Een Q-strip sensor en meetdevice (Arduino en vochtsensor ingebouwd)
in dunnere bundels ( 800 TEX kan gesplitst worden in 4 draden van 200 TEX).
[NB: Een droge bundel koolstofvezel laat bijna onzichtbare dunne draadjes los. Ze kunnen kortsluiting geven in elektrische apparaten, maar ook in je Q-strip, waardoor die niet meer werkt. Het dragen van adembescherming wordt aangeraden. Als je met een botte schaar knipt ontstaan er ook losse vezeltjes].

Draai bundels in elkaar om een gelijkmatige draad te krijgen. De uierzalf helpt ook om goede geleiding tussen papier en koolstof te krijgen voor een goed werkende Q-strip.

De DIY Q-strip is een sensor die je maakt van een strook papieren tissue met 2 dunne koolstofdraden over de volledige lengte van de strip. De koolstofvezels moeten een afstand hebben tussen 22 en 24 mm . Het is de kunst om de koolstofdraden te stabiliseren, alsof ze deel uitmaken van het tissuepapier.

Het maken van de Q-strip sensor Vraagt enige oefening. Begin met één vel keukenpapier en knip daarvan een strook van 9 cm breed. Vouw de randen van de strook van 9 cm naar binnen, zodat een 3 cm breed lintje ontstaat.

Leg de koolstofdraden in de strip van keukenpapier (22 - 24 mm afstand). Zorg dat de draden van koolstofvezel aan een zijde enkele centimeters uit het papier steken. Breng lijm aan tussen de koolstofdraden. Vouw de strip dicht en druk stevig aan (de lijm trekt in het gevouwen papier). Leg een vel papier op de strip en strijk papier, lijm en vezel tot één geheel met een droog strijkijzer (warmste stand). Leg voor het strijken een vel papier op de strip en zorg voor een warmtebestendige ondergrond!.
[Een andere manier om de lijm nauwkeuriger aan te brengen is als volgt: Knip ook een strookje tissue van 2 cm breed. Breng daarop ruim lijm aan en verdeel de lijm over het hele oppervlak van het strookje. Leg vervolgens het strookje keukenpapier met lijm tussen de koolstofvezels, vouw de strip dicht en strijk vast.]

Gebruik de Q-strip testunit, of een vochtigheidssensor, met een display om te testen. Druk (of plak met een plakbandje) de uiteinden van de koolstofdraden op de metalen strips van de meetunit en lees de geleiding af. [De geleidingswaarden zitten in deze range: droog 0, vochtig 50-350 en nat 600-800].

Als de draden goed geïsoleerd zijn, kan er alleen stroom van de ene naar de andere draad komen als er vocht in de tissue terecht komt. De Q-striptranspiratiesensor is dan klaar voor gebruik.

De koolstofvezel kan met geïsoleerd metaaldraad verlengd worden (solderen
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-79.jpg?height=701&width=918&top_left_y=232&top_left_x=906)

Figuur 7.7 Een testdevice voor vochtsensor: de metalen strips maken contact met de Arduino-vochtsensor in het kastje en het display laat de geleidbaarheid zien. Het binnenwerk van deze device kun je zelf bouwen met de instructies.
is onmogelijk). Vlecht de draden koolstof en metaal in elkaar en zet ze vast met lijm of tape, een krimpkous of elektrisch geleidende verf. Bevestig de metaaldraad aan de vochtsensor van de Arduino.
[Tip: Je kunt ook werken met diverse andere materialen om (kleine) sensoren te maken, in combinatie met koolstofvezel. Denk aan filtreerpapier, gewoon plakband, voorgelijmd papierplakband, tissue, stofvrije tissue, papierpulp (te maken van tissue of toiletpapier).]

B Opdracht:
Maak een lange Q-strip
Gebruik dezelfde werkwijze, maar plak nu drie tot vier stroken ( 9 cm breed) aan elkaar tot een lint van 1 meter lengte. Maak koolstofvezels van 90 cm en verbind ze met geïsoleerde metaaldraad. De overgang koper-koolstof zit ongeveer op 10 cm van het einde van de strip. Het sensorgedeelte van de strip is dan zo breed als een matras.

Voor langdurig gebruik kan de Q-strip in een drager geschoven worden die voldoende stevigheid geeft om de Q-strip onder een laken te kunnen leggen en gedurende de nacht te gaan meten. Wij gebruiken de strip nu zonder extra drager.

De Q-strip zal niet super precies zijn, maar je kunt hele behoorlijke resultaten behalen als je een strip gedurende langere tijd (zeg 14 dagen) gebruikt en kun je iets zeggen over het nachtelijke ritme van de transpiratie van je lichaam.
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-79.jpg?height=409&width=549&top_left_y=1760&top_left_x=1273)

Figuur 7.8 Arduino met Groove shield, vochtsensor en display. Dit zit ingebouwd in de testdevice van figuur 7.3.5, en kun je zelf bouwen met de instructies.

### 7.4.2 Het Q-strip-meetsysteem bouwen

## Benodigdheden testdevice

1. Arduino UNO
2. Groves Base shield voor Arduino (v2) HAT
3. Grove OLED display 0.96 (IC2), $128 \times 64$ display
4. Groove Moisture Sensor (A1)
5. Voeding (5V) USB via lader of computer
6. Code: Q-strip.ino

## LoRaWAN gekoppeld meetdevice

1. Arduino TTN Uno (standaard Arduino met LoRaWAN Chipset)
2. Groves Base shield voor Arduino (v2) HAT
3. Groove Moisture Sensor (A1)

## Methode

1. Maak verbinding tussen Q-strip en pootjes van de vochtsensor (bv: klem, drukknoop, vleugelmoer en oogje)
2. Leg verbinding aan met het LORA netwerk (Internet of Things) en The Things Network.
3. Stel gateway in voor de Q-strip-database.

C Opdracht
Gebruik het Q-strip-device
De sensor voor het Q-strip-device zijn de lange koolstof-electroden. De weerstand tussen de electroden hangt af van de isolatie tussen de electroden. Als het tissuepapier tussen de electroden droog is, dan is de weerstand hoog. Hoe vochtiger, hoe beter de geleiding, dus hoe lager de weerstand. De electrodestrip wordt aangesloten op een vochtsensor van de Arduino. Normaal gesproken bestaat die sensor uit metalen electroden die, bijvoorbeeld, in de grond worden geprikt. Nu zijn de metalen electroden vervangen door de koolstofdraden in de sensorstrip. De verwerking van de electrodendata met de Arduino gebeurt op dezelfde manier.

Om een relatie te kunnen leggen tussen gemeten waarde en de hoeveelheid opgenomen vocht, is het nodig de Q-strip te kalibreren. Breng een hoeveelheid vocht (bv 1 mL ) op de strip aan, wacht tot het vocht verspreid is en noteer de geleiding. Breng telkens meer vocht aan tot de strip verzadigd is. Maak hiervan een kalibratiegrafiek.

Om metingen uit te voeren gedurende de nacht, installeer je de Q-strip onder het laken van je bed, ter hoogte van je borstkas. Bevestig het meetkastje en zorg dat deze elke 10 minuten een meting doet. Vaker of minder vaak kan uiteraard ook. De gegevens kun je opslaan op een geheugenkaartje (SD) of laat je doorsturen via het LoRa netwerk (LoRaWAN) naar The Things Network.

D Opdracht: Verwerken van meetdata

1. Ophalen van data uit de database met metingen
2. Opslaan van lokale data op een SD kaartje
3. Analyse van meetgegevens

### 7.4.3 Onderzoek en toepassing

## E Verdiepingsopdracht

Gebruik het Q-strip-systeem om onderzoek te doen naar transpiratie in de nacht. Denk daarbij aan de volgende zaken:

- Proefpersonen (hoeveel, welke leeftijd, verschil en overeenkomst)
- Data verzamelen en verwerken
- Bescherming van privacy
- Wat betekent een transpiratiepatroon?
- Hoe kan het Q-strip systeem handig ingezet worden?

F Verdiepingsonderzoek: De vorm en techniek van de vochtsensor

- Is het mogelijk de sensor in een continuproces te maken (vanaf de rol)
- Welke papiersoort is het meest geschikt om de sensor te produceren?
- Werken kleinere /anders gevormde vochtsensoren ook?
- Kan de sensor van stof (bijvoorbeeld katoen) gemaakt worden?
- Welke soort lijm is het meest geschikt voor het plakken van de sensor?
- Is de vochtsensor draagbaar te maken, om bijvoorbeeld in te bouwen in een shirt, onder de armen, buik, rug, voorhoofd?


## G Verdiepingsopdracht: Meten met de Q-strip

- Kan het meetsysteem in bed gebruikt worden om meer gegevens te verzamelen, bijvoorbeeld draaien, lichaamstem peratuur, luchtvochtigheid, omgevingstemperatuur, vochtdoorlatendheid van matras.
- Kan de meetdata van de sensor gekoppeld worden aan andere draagbare sensoren (bijv een meethorloge, meetring of -armband?)
- Hoe vaak moet de meetdata verzameld worden voor een goed beeld?
- Hoe snel reageert de sensor op de transpiratie / temperatuurverandering?
- Kan met de Q-strip méér gemeten worden dan alleen vochtigheid?

Informatiebron:
https://washingtoncitypaper.com/article/221338/straight-dope-do-you-really-sweat-one-liter-each-night/

### 7.5 Andere thema's voor de eindopdracht

De thema's waar je aan kunt werken zijn eindeloos. Enkele suggesties hiervoor zijn:

- Een digitaal gestuurde spuitenpomp (bij de module Lab on a chip)
- Meten met licht in een Lab on a chip (met een led, fotodiode en Arduino)
- Stuur een 3D-printer aan met Arduino
- Maak een zelfrijdend wagentje of robot, op basis van een microcontroller als Arduino, Micro:bit, Raspberry Pi of ander platform.
- Wellicht heb je zelf een idee waar je aan wilt werken. Vraag je docent wat er mogelijk is.
- Je kunt bij verschillende modules die je gedaan hebt (of misschien nog gaat doen) een ontwerp maken waar je digitale technologie voor gebruikt.

Niet alle opdrachten kunnen we in de module plaatsen. Daarom worden er ook na verschijnen van de module losse eindopdrachten beschikbaar gesteld.

## 8 Verder met digitale technologie

Sommige van onderstaande lesmodules nlt gaan in zijn geheel over een onderdeel van digitale technologie. Bij anderen wordt digitale technologie ingezet in een context. Ook kun je bij een groot deel van de nlt modules iets maken of onderzoeken waar digitale technologie bij gebruikt wordt. Vraag er gerust naar bij je docent of TOA.

## Fijnstof

Nederlanders overlijden gemiddeld 9 maanden vroeger door fijnstof. Hoe zit het met de luchtkwaliteit rondom je school? Is dit aanleiding tot een vervolgplan van deze burgerwetenschapaanpak? Samen op zoek naar oplossingen voor een betere luchtkwaliteit en een steentje bijdragen aan het Schone Lucht Akkoord. GLOBE Nederland en het RIVM ontwikkelden deze lesmodule om op middelbare scholen de fijnstofconcentratie te meten in hun omgeving. Doe mee met de fijnstofcampagne!
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-83.jpg?height=441&width=324&top_left_y=699&top_left_x=1500)

## Modelleren

![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-83.jpg?height=458&width=332&top_left_y=1230&top_left_x=237)

Modellen helpen de mens om voorspellingen te doen en bedreigingen beheersbaar te maken. In deze module ontdek je hoe situaties en processen met behulp van dynamische modellen beschreven kunnen worden. De contexten waar je aan werkt zijn de verspreiding van corona onder de bevolking, de waterhuishouding in Nederland, de groei van de wereldbevolking en/of het saneren van een vervuilde bodem.

## Bio-informatica

Het concept genexpressie (transcriptie, splicing, translatie) wordt vanuit programmeren in Python benaderd. Hierbij wordt het biologisch concept vertaald naar praktische programmeer opdrachten. Via bestaande tools worden beginselen van het lezen van DNA geoefend. In een individuele eindopdracht wordt naar een onbekend gen(product) en de genetische oorzaak van een afwijkend genproduct gezocht.
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-83.jpg?height=463&width=320&top_left_y=1833&top_left_x=1479)

## De toekomst van de landbouw

![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-84.jpg?height=512&width=361&top_left_y=304&top_left_x=231)

Nederland staat aan de vooravond van een grootschalige herinrichting van de land- en tuinbouw. Het moet slimmer, efficiënter, schoner, met minder energie, minder landoppervlak en vooral ook meer ecologisch. In deze lesmodule verdiep je je in technologische innovaties, die in de landbouw ingezet worden. Robots die planten automatisch herkennen en verwijderen, spuiten tegen insecten, bemesten en watergeven gebeurt op basis van BigData van sensoren van o.a. drones. Je bouwt een eigen visie op over het complexe systeem van schakels binnen de voedselproductie en -distributie. Vanuit die visie werk je toe naar een toekomstplan, waarin al deze aspecten een rol spelen. Zo draag je positief bij aan de toekomst.

## Cybersecurity

Cybersecurity gaat over het beveiligen van digitale informatie en digitale diensten die een bepaalde waarde hebben. Die waarde zorgt ervoor dat je de informatie of dienst wilt afschermen. Uiteindelijk gaan diensten over het lezen of wijzigen van digitale gegevens: de gegevens over je bankrekening, al je emails of de inhoud van je Facebook pagina. 'Cyber' in cybersecurity benadrukt extra dat het gaat om security in cyberspace, de virtuele wereld die bestaat uit computers en de netwerken tussen computers.
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-84.jpg?height=489&width=355&top_left_y=983&top_left_x=1473)

## Artificiële Intelligentie (AI)

Een lesmodule waarin de leerlingen een positief project doen: ze zetten Al in om de wereld iets beter
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-84.jpg?height=495&width=409&top_left_y=1580&top_left_x=235)
te maken. Na afloop van de module heeft de leerling geleerd dat AI een breed vakgebied is, dat gaat van het programmeren van algoritmes tot het doen van medisch onderzoek. Het is een samenspel van verschillende disciplines: spraakherkenning, machine learning, beeldherkenning en natural language processing. Kunstmatige intelligentie wordt gebruikt als je een verzekering wilt afsluiten, als je zit te 'netflixen', als je via social media contact houdt met je vrienden en op nog veel meer manieren.

## Leeg analyseschema

Ook als los werkblad beschikbaar in de moduledatabase (https://module-database.betavak-nlt.nl/).
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-85.jpg?height=1197&width=1580&top_left_y=458&top_left_x=227)

## Bijlagen verkrijgbaar in de moduledatabase

- Bijlage 1: Uitgebreide uitleg bij onderdeel C van H4
- Bijlage 2: Uitgebreide uitleg bij onderdeel C van H5
- Bijlage 3: Uitgebreide weergave van achtergronden en verdieping zoals

Fabricage van computerchips, printplaten
Hoe transistoren werken
Computergeheugen
Logische schakelingen
Sensoren, actuatoren
Neopixel
Verschillende microcontrollers

- Bijlage 4: Uitgebreide begrippenlijst
- Bijlage 5: URL lijst

Er is voor de leerlingen ook veel informatie te vinden op de leerlingenwebsite:
https://maken.wikiwijs.nl/171772/Schakelmodule_Digitale_Technologie__online_materiaal


```{exercise}
Zoek op over welke afstand een glasvezelkabel een signaal kan versturen zonder versterker. Zoek ook op welke techniek(en) men toepast om verschillende datastromen in één glasvezel te vervoeren.
```



[^1]:    6.4 Opdracht

    Thermisch papier wordt zwart als het warm wordt en is daardoor heel handig om simpel te kunnen afdrukken. Veel kassa's hebben een thermische printer. Op welke manier zou zo'n printer leesbare tekst kunnen afdrukken?

