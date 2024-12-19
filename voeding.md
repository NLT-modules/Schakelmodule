(ch6)=
# Voeding voor een digitaal systeem 

Arduino, sensoren en actuatoren voeden

## USB stekker (5v)

## Digitale systemen instructies geven (programmeren)

## Programmeren

Een Arduinocode noemen we een sketch. Deze sketch wordt omgezet naar computertaal in enen en nullen (de binaire code, zie hierboven). Wij hoeven ons niet druk te maken over de binaire code, maar moeten wel weten hoe we zo'n sketch schrijven.

Een sketch maakt gebruik van objecten. Wat zijn objecten? Een object is iets dat je in een code gedefinieerd hebt en dat een geheugenplaats inneemt. Als je bijvoorbeeld in je code iets wilt doen met een LED (aanzetten of uitzetten) moet je wel tegen die Arduino vertellen dat er zoiets als een LED is. Dat slaat de Arduino dan op in zijn geheugen zodat hij op een later moment weet wat jii bedoelt met het woordje LED. Het woordje LED snapt de Arduino niet, dus je moet hem vertellen dat het woordje LED iets te maken heeft met de poort waar de LED op aangesloten is, en dat dit een OUTPUT is. Er komt namelijk licht uit. Hier komt de structuur van een sketch om de hoek kijken.

De structuur van een code ziet er globaal zo uit:

1. < ruimte voor definiëren van objecten >
2. < ruimte voor het duidelijk maken wat de objecten zijn, dit wordt eenmalig uitgevoerd >
3. < ruimte waar verteld wordt wat er met de objecten moet gebeuren, dit wordt steeds opnieuw uitgevoerd >

Het eerste gedeelte heeft geen naam, het $2^{\mathrm{e}}$ gedeelte noemen we de void setup, het $3^{\mathrm{e}}$ gedeelte noemen we void loop. We gaan dit verduidelijken met behulp van onderstaande figuur

```
const int LMMP = 8;
const int KNOP = 2;
void setup()
{
    pinMode(LMMP, OUTPUT);
    pinMode(KNOP, INPUT);
}
void loop()
{
    int KnopStatus = digitalRead(KNOP);
    if(KnopStatus==1) {
        digitalWrite(LMMP, HIGH);
        } else {
        digitalWrite(LAMP, LOW);
        }
    delay(100);
}
```

Voorbeeld van een code

## Deel 1 - Objecten definiëren

Je ziet in regel 1 en 2 dat er wordt verteld dat de LAMP gelijk is aan 8 en de KNOP gelijk is aan 2 . Aan het begin van de regel staat het woordje const, dat betekent dat de waarde van dit object niet kan veranderen tijdens het programma. Stel dat je een plekje in het geheugen wilt inruimen voor iets dat wel kan veranderen, bijvoorbeeld een object waarin de waarde van een thermometer steeds opnieuw opslaat, dan moet er natuurlijk geen const voor staan. We komen later terug op het woordje int.

## Deel 2 - Void setup

In het tweede gedeelte zie je het commando pinMode. Dat is een commando waarmee je de Arduino vertelt wat voor soort apparaat is aangesloten op de pin (er zitten genummerde pins op de Arduino). Je ziet dat het object LAMP een OUTPUT is, dat is logisch: er komt licht uit. Je ziet ook dat KNOP een INPUT is. Dat is ook logisch: een knop verwerkt een invloed van buitenaf (jij drukt wel of niet op de knop). Er zijn nog veel meer commando's die in void setup gebruikt kunnen worden, maar die volgen later. Je ziet ook dat er na het commando void setup een openingsaccolade staat \{ en aan het einde van void setup een sluitingsaccolade \}. Dat betekent dat alles wat tussen die accolades staat bij void setup hoort.
Commando's waarbij accolades gebruikt worden (zoals bij void setup, maar ook bij if en ifelse) hebben geen ; aan het einde van de zin, alle andere zinnen wel. Als je die ; niet plaats denkt de computer dat je zin nog niet af is en krijg je in de volgende regel een foutmelding. Eerste tip bij foutmeldingen is dus even te checken of je overal ; hebt staan waar dat hoort.

## Deel 3 - Void loop

In regel 12 wordt een object gedefinieerd met de naam KnopStatus. Je kunt ook in dit gedeelte van de code objecten definieren, dat gebeurt dan steeds opnieuw omdat de void loop steeds opnieuw wordt uitgevoerd. Stel dat je in regel 3 (in het eerste gedeelte) KnopStatus al zou definiëren zou deze regel hetzelfde zijn, maar dan zonder int ervoor (dus: KnopStatus = analogRead(KNOP); ). In deze regel wordt met het commando analogRead de waarde uitgelezen van de KNOP. Het systeem checkt dus of de knop ingedrukt wordt of niet. Als dat zo is, geeft analogRead een 1, anders een 0 . Die 1 of 0 wordt met deze regel opgeslagen in het object KnopStatus en dat gebeurt dus steeds opnieuw. Omdat dit een hele kort void loop is, gaat het heel snel en wordt er dus eigenlijk continu gekeken of de knop wordt ingedrukt.

In regel 12 staat een if commando. Dat commando kijkt of de waarde tussen de haakjes erachter waar is of niet. In dit geval checkt hij of de waarde van KnopStatus gelijk is aan 1 .

Als je goed kijkt zie je dat hier == staat. == betekent het dat de computer moet kijken of hetgene links en rechts van het =--teken gelijk zijn. = betekent dat je een waarde toekent aan een object. = gebruiken binnen de haakjes van if levert dus een foutmelding op.

Als datgene wat tussen de staat haakjes waar is, wordt dat wat tussen de accolades staat van if uitgevoerd. Net als bij void setup en void loop eindigt een if niet met ; maar staan er accolades. Dit kan bij complexere code ingewikkeld worden omdat je dan een if binnen een if binnen een if kunt krijgen en dat je erg goed moet bijhouden hoe het zit met de accolades. Een tip hierbij is om de accolades die bij elkaar horen op dezelfde afstand van de kantlijn te plaatsen. Je ziet bijvoorbeeld dat de accolade op regel 11 even dicht bij de kantlijn staat als de accolade in regel 19. Die van regel 19 sluit dus die van regel 11 af. Vaak wordt de openingsaccolade direct achter de if of else geplaatst. De openingsaccolade van regel 13 hoort bij de sluitingsaccolade van regel 15 en de openingsaccolade van regel 15 hoort bij de sluitingsaccolade van regel 17.

Tussen de accolades van if staat het commando digitalWrite(LAMP, HIGH); Dat betekent dat er een signaal naar de lamp wordt gestuurd en wel een 1, dat zorgt er dus voor dat de lamp aangaat. De lamp blijft dan aanstaan tot dat er een 0 naar de lamp wordt gestuurd. Vergelijk het met een koelkast. Je stuurt nu een pak melk de koelkast in. Dat pak blijft in de koelkast totdat je het er actief uit haalt. Doe je niets, blijft het pak melk in de koelkast (en wordt het op een gegeven moment slecht, maar dat hoor niet bij deze module.

In regel 15 staat het woordje else. Dat zorgt ervoor dat er ook iets gebeurt als de waarde tussen de haakjes bij if niet waar is. In dit geval stuurt hij dan een 0 naar de lamp en gaat de lamp uit.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-43.jpg?height=901&width=1713&top_left_y=1337&top_left_x=174)

## Deze schakeling hoort bij de bovenstaande code

## Verwerkingsopdracht

Hierboven wordt aan de hand van een voorbeeld een stuk code uitgelegd. Ook wordt er een schakeling getoond die bij deze code hoort. De opdracht is het volgende: zorg dat je de schakeling aanpast zodat er nog een led wordt toegevoegd en nog een knop die deze led aan op uitzet. Je moet dus én de schakeling aanpassen én de code. Doe dit in je werkdocument in Tinkercad.

Gegevens die verzameld zijn moeten vaak opgeslagen worden om later te kunnen gebruiken. Ook zullen ze soms getransporteerd moeten worden via een netwerk. Het internet is zo'n netwerk en steeds meer apparaten staan in verbinding met het internet (zogenaamde "Internet of things" (IOT)). Daar hoort ook beveiliging bij. Dit hoofdstuk gaat over hoe gegevens opgeslagen worden en hoe systemen met elkaar communiceren.

Tijdens dit hoofdstuk leer je het volgende

- Dat er vuistregels zijn voor het ordenen van gegevens binnen bestanden het ordenen van bestanden en dat het gebruiken van die vuistregels je tijd bespaart en de kans op fouten vermindert.
- Dat metadata de informatie bevat over wat er in bestanden te vinden is en hoe deze geordend zijn.
- Dat databases georganiseerd zijn op basis van de metadata en dat dat het zoeken in databases, en het samenvoegen of splitsen van databases mogelijk maakt
- Dat gegevens fysiek opgeslagen worden op harde schijven (in het klein) of in datacenters (in het groot) en hoe deze opslag functioneert
- Dat gegevens op verschillende manieren beveiligd kunnen worden door wachtwoorden en encryptie, en dat de wiskunde hier een grote rol in speelt.
- Dat het kraken van codes aan de wieg heeft gestaan van de ontwikkeling van computers
- Wat de rol van Alan Turing was in het ontstaan van computers
- Dat het internet een combinatie is van ip-adressen en TCP/IP protocollen en hoe dit werkt
- Hoe een wifi-verbinding werkt en hoe je zelf een wifi-ontvanger en zender kunt bouwen met een Arduino en daarmee gegevens kunt doorsturen naar andere digitale systemen
- Dat je informatie van een apparaat ook naar een website kunt sturen zodat je op afstand mee kunt kijken met de sensoren die jouw digitale systeem bevat.

Als er door jouw systeem 'besloten' wordt dat er iets in gang gezet moet worden (motor aan, koeling aan, ventilator uit etc.) moet dat natuurlijk wel gebeuren. Het is allemaal geen magie. In dit hoofdstuk gaan we in op hoe je je digitale systeem daadwerkelijk invloed kunt laten hebben op zijn omgeving.

Tijdens dit hoofdstuk leer je het volgende

- Dat digitale systemen invloed kunnen hebben op hun omgeving door middel van actuatoren
- Dat actuatoren zoals lampjes, speakers, motoren, RF zenders, servomotoren in veel verschillende digitale systemen voorkomen en dat je die (relatief) eenvoudig zelf kunt bouwen
- Dat je in je programmeercode in je digitale systeem soms bepaalde bibliotheken moet gebruiken om actuatoren te kunnen gebruiken
- Dat je voor het aansturen en monteren van actuatoren online veel informatie kunt vinden op websites als stackoverflow en reddit.
- Dat het aansturen van actuatoren gevolgen heeft voor het stroomverbruik van je digitale systeem en dat ontwerpkeuzes dus invloed hebben op de duurzaamheid van je systeem
- Dat je door te kijken hoe goed jouw actuatoren functioneren en hun omgeving beïnvloeden kunt beoordelen of jouw digitale systeem voldoet aan de ontwerpeisen die je hebt gesteld.


## Een voorbeeld

Het bovenstaande kan allemaal erg onhaalbaar lijken. Daarom wordt hier een voorbeeld uitgewerkt. Ikzelf (de auteur: Rudy Jonker) ga tijdens de eerstvolgende ronde van deze module gelijktijdig met de leerlingen een ontwerp maken. Ik deel alle stappen hier op deze plek zodat je een beeld krijgt hoe zo'n ontwerp tot stand komt en welke problemen worden tegengekomen.

## Ronde 1

## Doelstelling ontwerp:

Ik wil een wake-up light maken. Dat wil zeggen een wekker waarbij als de ingestelde tijd is aangebroken er een lamp steeds feller en steeds witter gaat branden. Als het goed is wordt de persoon die slaapt dan ook wakker daardoor. Ik wil kunnen meten of dit ook zo is.

Pakket van eisen

- Er moet een tijd lopen op een klok
- Er moet een alarmtijd ingesteld kunnen worden
- Er moet een lamp aan kunnen gaan met een variabele felheid en kleur
- De persoon die wakker wordt moet ergens op kunnen drukken om aan te geven dat hij/zij wakker is.
- Dit moet door het systeem opgeslagen worden op een SD-kaart, zodat ik de prestaties van de lamp kan onderzoeken.


## Deeluitwerkingen

Ik begin met de klok die moet lopen. Ik wil de uren en minuten laten zien, en een uur moet ook echt een uur duren, anders is de klok niet lang 'houdbaar'. Ik start met de code en check deze in de seriele monitor van arduino. Daardoor hoef ik me nog even niet druk te maken over de display.

## Ontwerp:

```
long int mins = 0;
long int hrs = 0;
long int seconds = 0;
void setup() {
// put your setup code here, to run once:
Serial.begin(9600);
}
void loop() {
delay(1000); //hier verstrijkt 1000ms, dat is dus 1 seconde
//long int t1 = millis(); //deze regel staat nu even uit
seconds = seconds +1;
if(seconds==60){
seconds = 0; // als het aantal seconde 60 wordt, reset hem naar 0 en doe de minuten +1
mins = mins+1;
}
if(mins==60){
mins = 0; // als het aantal minuten 60 wordt, reset hem naar 0 en doe de uren +1
hrs = hrs+1;
if(hrs==24){
```

hrs=0; //als het aantal uren 24 wordt, reset hem naar 0
\}
//long int t2 = millis(); //deze regel staat nu even uit
//long int calctime= t2-t1; //deze regel kan ik aanzetten als ik wil weten wat de tijd is die verstrijkt tussen deze regel en de regel onderaan de code. Stel dat dat te lang is, dan moet ik de delay aanpassen
Serial.print (hrs);
Serial.print(" ");
Serial.print(mins);
Serial.print(" ");
Serial.print(seconds);
Serial.print(" ");
//Serial.println(calctime);
\}
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-46.jpg?height=275&width=278&top_left_y=816&top_left_x=181)

De klok in werking

## Evaluatie

De klok doet het. Ik wilde eerst iets doen met het vastleggen van een tijd, en dan als die tijd een minuut geleden was, de minuten +1 doen, maar dat bleek veel te veel geklooi op te leveren. Daarom heb ik gekozen voor een delay. Mocht de code later nou zo ingewikkeld worden dat het uitvoeren van de code lang duurt (waardoor de tijd van 1 seconde op de klok dus 1000ms PLUS de verwerkingstijd van de code zou duren) heb ik twee regels ingebouwd waarmee ik kan meten hoe lang de code duurt. Als het dan nodig is kan ik de delay verkleinen om voor de verwerkingstijd van de code te corrigeren. Op naar de display en de knopjes!

## Wall of Fame

Omdat deze module door veel scholen gebruikt wordt en daar allemaal leerlingen coole ontwerpen maken zijn er ongetwijfeld prachtige ontwerpen om hier te presenteren. Wil je jouw (beste) ontwerp op deze site? Stuur dan een stukje tekst met wat foto's of evt. een linkje naar een youtubefilmpje. Zorg dat het doel van je ontwerp duidelijk is en voor welke oplossingen je gekozen hebt.

## Over dit lesmateriaal

## Colofon

Auteurs Digitaal Redacteur; Rudy Jonker; H. Dirks
Team
Laatst gewijzigd
Licentie

Schakelmodule Digitale Technologie 24 februari 2023 om 13:06
De Internationale Creative Commons 4.0 licentie waarbij de gebruiker het werk mag kopiëren, verspreiden en doorgeven en afgeleide werken mag maken onder de voorwaarden: Naamsvermelding en Gelijk Delen, zie http://creativecommons.org/licenses/by-sa/4.0/.
Meer informatie over de CC Naamsvermelding-GelijkDelen 4.0 Internationale licentie licentie.

## Aanvullende informatie over dit lesmateriaal

Van dit lesmateriaal is de volgende aanvullende informatie beschikbaar:
Eindgebruiker leerling/student
Studiebelasting 4 uur en 0 minuten

## Bronnen

Slimme regenton
https://slimmeregenton.nl/
1 Introductie digitale technologie. Daan Geijs vertelt over zijn studiekeuze en opleiding https://youtu.be/H94a2UCkYXY

2 Wat is kunstmatige intelligentie? Daan Geijs vertelt wat er met digitale technologie mogelijk is. https://youtu.be/p9vdykaXKg4

3 Kunstmatige intelligentie in het ziekenhuis. Daan Geijs vertelt over zijn onderzoek aan het herkennen van tumoren met de computer.
https://youtu.be/VqiOqBVe_08
4 Daan Geijs over het werk dat hij in de toekomst kan gaan doen
https://youtu.be/3t5nQqr28II
Tinkercad TMP36
https://www.tinkercad.com/things/94VFdq4ienj-copy-of-tmp36-temperature-sensor-witharduino/editel?tenant=circuits

Potentiometer
https://youtu.be/H3hSQgZxNe0
Ultrasone sensor
https://youtu.be/eYJg_Yp-Fys
Tutorial voor de ultrasone sensor
https://create.arduino.cc/projecthub/abdularbi17/ultrasonic-sensor-hc-sr04-with-arduino-tutorial-327ff6

Arduino tutorial neopixel
https://create.arduino.cc/projecthub/robocircuits/neopixel-tutorial-1ccfb9
Neopixel voorbeeld
https://youtu.be/ANoG6DoSFHA
link naar liquidcrystal_i2c (datum link: 7-2-2022)
https://downloads.arduino.cc/libraries/github.com/marcoschwartz/LiquidCrystal I2C-1.1.2.zip

Voorbeeldschakeling met Arduino, Relais en Lamp.
https://maken.wikiwijs.nl/152360/NLT_Digitale_Techniek_TCC\#! page-7105936
De klok in werking
https://youtu.be/nmrz2QJYan4

