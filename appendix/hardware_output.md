(ch4)=
# Hardware voor de output van een digitaal systeem

## LED

Een LED is een diode die licht kan uitzenden. De afkorting staat voor Light Emitting Diode. Een diode is een elektronische component, een zogenaamde halfgeleider.
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-25.jpg?height=506&width=820&top_left_y=809&top_left_x=635)

De LED wordt geleidend en gaat licht uitzenden zodra er een stroom in de juiste richting gaat lopen: de LED heeft een positieve en een negatieve aansluiting. Als de LED verkeerd om wordt gemonteerd loopt er geen stroom, de LED staat dan in sperstand.
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-25.jpg?height=298&width=829&top_left_y=1641&top_left_x=622)

## Schematisch Symbool van de LED

## Waar moet je op letten bij gebruik van een LED?

* Een LED is kwetsbaar, overschrijd de maximum stroom niet! Gebruik daarom ALTIJD een voorschakelweerstand in serie met de LED. Deze zal de stroom begrenzen op de gewenste waarde en de grootte van de benodigde weerstand is afhankelijk van aangeboden spanning. Hte maakt niet uit of je de weerstand in de pluslijn of in de minlijn plaatst.


## Als vuistregel mag je de volgende waarden hanteren:

* Aangeboden spanning 5 Volt d.c. --> voorschakelweerstand 150 Ohm.
* Aangeboden spanning 12 Volt d.c. --> voorschakelweerstand 560 Ohm.

Soms krijg je een LED waarbij al een weerstand in serie is gemonteerd, zie de foto voor een voorbeeld hiervan.

weerstand met waarde 560 Ohm 

## LED RGB

## Neopixel LEDstrip

Neopixel LEDs zijn fantastisch. Het zijn LEDjes die alle kleuren en intensiteit kunnen aannemen en je kunt heel makkelijk een heleboel LEDs aansturen met een paar draadjes en wat slimme code.

Om Neopixels te gebruiken moet je een library installeren op je laptop. In die library zitten een heleboel commandos die speciaal zijn gemaakt voor de Neopixel LEDs. Hoe je de library installeert zie je op onderstaande website.
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-26.jpg?height=273&width=276&top_left_y=1274&top_left_x=179)

Arduino tutorial neopixel
https://create.arduino.cc/projecthub/robocircuits/neopixel-tutorial-1ccfb9

Op de bovenstaande site vind je ook het schema hoe je de Neopixel aansluit en hoe je met je code de verschillende 'adresseerbare' LEDs aan of uit zet en welke kleur en intensiteit ze moeten aannemen.

Met adresseerbaar bedoelen we dat je met de code verschillende LEDs kunt aansturen:
pixels.setPixelColor(i, pixels.Color(0, 150, 0));
Met bovenstaande code wordt nr i aangezet met een kleur die beschreven wordt met het pixels.Color commando. De 0,150,0 staat voor de intensiteit van de kleuren Rood Groen en Blauw (RGB). Dit zal dus een LED een milde groene kleur laten aannemen. De intensiteit kan van 0 tot 255 lopen.

Dus met:
`pixels.setPixeIColor(8, pixels.Color(255, 0, 0));`
zetten we LED nr 8 op de strip aan met een felrode kleur.
Hieronder zie je een voorbeeld van een code waarmee je een Neopixel bestuurt. Dit betreft een Neopixel van 10 LED's, maar ook voor een Neopixel van 100 LED's kun je deze code gebruiken (alleen het getal 10 vervangen door 100).

```{code-cell} C
#include <Adafruit_NeoPixel.h>
#ifdef _AVR
#include <avr/power.h>
#endif
#define Neopixel 7

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, Neopixel, NEO_GRB + NEO_KHZ800);
int delayval = 50;

void setup() {
    pixels.begin();
}
void loop() {
    for(int i=0;i<NUMPIXELS;i++){
        pixels.setPixelColor(i, pixels.Color(0,150,0));
        pixels.show();
        delay(delayval);
    }
    for(int i=0;i<NUMPIXELS;i++){
        pixels.setPixelColor(i, pixels.Color(0,0,0));
        pixels.show();
        delay(1);
    }
}
```

![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-27.jpg?height=278&width=284&top_left_y=1374&top_left_x=172)

## Neopixel voorbeeld

## LCD display

De processor (Arduino) in jullie ontwerp gaat acties uitvoeren aan de hand van signalen of gegevens die je laat invoeren (input). Is het op enig moment nodig om visueel informatie aan de buitenwereld kenbaar te maken dan kan dat met een eenvoudig lichtsignaal. Maar soms is de hoeveelheid informatie zo groot dat er meer nodig is. De uitkomst is dan een beeldscherm. Jullie kunnen daarvoor een LCD gebruiken. LCD staat voor Liquid Crystal Display. Dat is een stapeltje glasplaatjes waartussen vloeibare kristallen kunnen bewegen. De richting waarin de kristallen zich richten verandert door een kleine lading aan te brengen. Daardoor ontstaat een polariserend filter dat licht blokkeert. Een goed voorbeeld is je rekenmachine of een kwartshorloge; je ziet op dat schermpje cijfers verschijnen in zwart/wit.

## Praktisch

De LCD die jullie kunnen gebruiken bevat 4 regels (20x04) waarop karakters kunnen worden getoond. Schrijven gebeurt via je programmacode en het is nodig dat je telkens aangeeft op welke regel en welke positie je begint met schrijven. Omdat een standaard LCD wordt aangestuurd met een behoorlijk aantal signalen is er een i2c circuit toegevoegd die dat voor zijn rekening neemt. Daardoor zijn er voor het opbouwen van het display slechts vier draden nodig: Voedingsspanning, Ground, SCL kloklijn en SDA datalijn.

Hieronder vind je een code die werkt. Het blijkt in de praktijk wel tricky te zijn om zo'n display werkend te krijgen, er staan namelijk een hoop voorbeelden op het web waar fouten in zitten. Daarnaast heb je
twee libraries nodig. Een library is een collectie van programmeercommando's die samen helpen om bepaalde taken uit te voeren. De libraries die je hier nodig hebt zijn wire.h en LiquidCrystal_I2c.h.

Wire.h is standaard geïnstalleerd, maar die andere niet. Via de link hieronder vind je een zip bestand. In de Arduino omgeving kun je zo'n bibliotheek inladen vanuit een zip bestand (zie screenshot hieronder).
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-28.jpg?height=395&width=829&top_left_y=516&top_left_x=611)

Een "kale" display met veel aansluitingen.
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-28.jpg?height=284&width=284&top_left_y=1057&top_left_x=172)
link naar liquidcrystal_i2c (datum link: 7-2-2022)
https://downloads.arduino.cc/libraries/github.com/marcoschwartz/LiquidCr ystal I2C-1.1.2.zip
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-28.jpg?height=493&width=1203&top_left_y=1444&top_left_x=432)

Toevoegen van een zip-bibliotheek (library)
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-29.jpg?height=755&width=1351&top_left_y=199&top_left_x=358)

Display voorzien van i2c interface: aansluitvoorbeeld.

## Een werkende code

Onderstaande code start de display, en laat de tekst 'hello world' zien. Daarna start er een teller die vrij rap oploopt (het geprinte 'nummer' wordt in elke loop met 1 opgehoogd).

```{code-cell} C
int nummer = 0;
#include "Wire.h" // For I2C
#include "LiquidCrystal_I2C.h" // Added library*
//Set the pins on the I2C chip used for LCD connections
LiquidCrystal_I2C Icd(0x27, 20, 4); // 0x27 is the default I2C bus address
void setup()
{
// Set off LCD module
Icd.begin (20, 4); // 20 x 4 LCD module
// Turn on the blacklight and print a message.
//lcd.setBacklight(3,POSITIVE); // BL, BL_POL
Icd.setBacklight(HIGH);
Icd.setCursor(0, 3);
Icd.print("Hello, world!");
}
void loop()
{
nummer = nummer+1;
Icd.setCursor(2,2);
Icd.print(nummer);
}
```

Let op: bij mijn laptop blijk ik de LCD display te moeten aansluiten op de 3,3V aansluiting ipv de 5V. Ook kan er een probleem ontstaan als je een verouderde versie van Arduino op je laptop hebt staan.

## Relais

## Relais

Een relais is een schakelaar om actuators te kunnen inschakelen en uitschakelen.

Je gebruikt een relais wanneer de Arduino zelf niet genoeg vermogen kan leveren voor de actuator.
Ook kun je een relais gebruiken om een circuit galvanisch gescheiden van de Arduino te kunnen schakelen, bijvoorbeeld wanneer een element op netspanning werkt, of op een andere spanning dan 5 Volt.
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-30.jpg?height=901&width=1221&top_left_y=503&top_left_x=406)

## Aansluiten

Een relaismodule is beschikbaar met één relais of met meerdere relais.
De module wordt bediend met een digitaal stuursignaal vanaf een uitgangspin van de Arduino (HOOG / LAAG --> 5V / 0V).

Omdat het relais bekrachtigd moet worden moet je via een extra draad 5 Volt voeding aanbieden. Dat kan via de 5 V pin van de Arduino. let wel op dat deze pen begrensd is in maximale stroomcapaciteit. Gebruik je dus meerdere relais of gelijktijdig ook andere verbruikers op 5 Volt, dan kun je die beter rechtstreeks voeden uit een externe 5 Volt bron.

De relais schakelaar wordt magnetisch bekrachtigd en heeft in ons geval 3 aansluitpunten. Het is een wisselschakelaar. In onbekrachtigde toestand (in rust) is het moedercontact (middelste aansluitpunt) geschakeld aan contactpunt N.C. (Normally Closed). Zet je het relais "aan" dan schakelt het moedercontact over naar contactpunt N.O. (Normally Open). Op de printplaat zijn deze punten herkenbaar gemerkt.

## Pulse Width Modulation PWM

## Elektronische schakelaar in plaats van mechanisch Relais

In bepaalde situaties wil je een actuator (lamp / motor / klep o.i.d.) schakelen. Dat kan vaak met een relais (elektromagnetisch bekrachtigde schakelaar).

Maar er zijn toepassingen waarbij het niet met een relais kan.
Bijvoorbeeld het trapsgewijs schakelen naar een hoger vermogen lukt niet met een mechanische schakelaar, die staat of AAN óf UIT, ALLES of NIKS.

Een elektronische schakelaar kan veel sneller schakelen, bevat geen mechanische onderdelen en is dus heel geschikt om middels korte snelle pulsen te schakelen.

Dat geeft nieuwe mogelijkheden! Door met korte pulsen de schakelaar in- en uit te schakelen kan het gemiddelde vermogen geregeld worden. Zo'n pulserend regelsignaal heet pulsbreedtemodulatie, oftewel Pulse Width Modulation PWM.

Door bijvoorbeeld iedere seconde afwisselend aan- en uit te schakelen wordt er het halve vermogen toegevoerd, want $50 \%$ van de tijd is de schakelaar AAN en $50 \%$ van de tijd is deze UIT. Men zegt dan: de Duty cycle is $50 \%$.

Maar: iedere halve seconde is een erg lage frequentie. Dan zou een lamp bijvoorbeeld erg vervelend knipperen, wel handig als knipperlicht, niet handig als je de lamp juist zou willen dimmen.

Dus, een bruikbaar PWM signaal heeft een veel hogere frequentie, want dan krijg je een heel goed regelbaar signaal.
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-31.jpg?height=241&width=693&top_left_y=1122&top_left_x=176)

Hiernaast zie je een PWM signaal. Een digitale uitgang van de Arduino wordt op een vaste frequentie geschakeld tussen laag en hoog. De verhouding tussen de duur van laag en hoog bepaal je zelf. De duur van de puls (hoog) noem je de PulsBreedte (PulseWidth). In dit geval is de Dutycycle 33\%.

## PWM poorten

De Arduino Uno bezit een paar poorten die je kunt gebruiken om een PWM signaal te genereren. Deze poorten werken automatisch op commando en staan op een vaste frequentie.

Arduino Uno pin 3, 5, 6, 9, 10 en 11 kunnen als PWM uitgang gebruikt worden.
(Pin 5 en 6 werken met een 980 Hz frequentie. Poorten 3, 9, 10 en 11 werken met 490 Hz .)
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-31.jpg?height=646&width=864&top_left_y=2030&top_left_x=596)

Solid State Switch (Elektronische Schakelaar) om 2 motoren te regelen.

## Code voorbeeld Arduino UNO

Met het commando analogWrite(naam,waarde) geef je de opdracht om het signaal aan de uitgangspoort beschikbaar te maken. naam Is de naam die je aan de poort hebt gegeven. Let er op dat niet alle uitgangen van de Arduino geschikt zijn voor een PWM signaal.
waarde Is de gemiddelde waarde die je wilt dat het signaal heeft. Deze is instelbaar tussen 0\% (UIT) en 100\% (AAN).

formule: Duty cycle = (waarde / 255) [\%]

Duty cycle 0\% = 0

Duty cycle 50\% = 127

Duty cycle 100\% = 255

onderstaand een voorbeeldcode voor de combinatie Arduino / Chip L9110 / DC motor
Het IC L9110 heeft 2 ingangen waarmee je 2 uitgangen schakelt (de twee draden die naar de motor gaan).Het IC schakelt volgens een waarheidstabel:
inputA inputB outputA outputB motor
0000 uit

## 1010 rechtsom

## 0101 linksom

## 1111 uit
```{code-cell} C
// pwm analogWrite op pin D05 490Hz
// pwm analogWrite op pin D06 490Hz
const int LINKS = 5; // motor pwm signaal op pin D04
const int RECHTS = 6; // motor pwm signaal op pin D05
void setup()
\{
pinMode(LINKS, OUTPUT); // pinMode(RECHTS, OUTPUT); //
\}
void loop()
\{
analogWrite(LINKS,0);
analogWrite(RECHTS,0);
delay(500); // wacht xx ms
analogWrite(RECHTS,125);
delay(2000); // wacht xx ms
analogWrite(RECHTS,200);
delay(2000); // wacht xx ms
analogWrite(RECHTS,255);
delay(2000); // wacht xx ms
analogWrite(LINKS,0);
analogWrite(RECHTS,0);
delay(500); // wacht xx ms
```

## Ventilator

## DC motor (lineaire motor)

## DC motor

Een standaard DC motor (gelijkstroom elektromotor) wordt toegepast in allerlei soorten aandrijvingen. Denk aan een accuboormachine of een polijstmachientje bij de pedicure bijvoorbeeld.

De motor schakel je niet rechtstreeks vanuit de poort van de Arduino maar je gebruikt tussen Arduino en motor een relais of een solid-state-switch. Hiermee schakel je dan een externe voeding aan- of uit.
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-33.jpg?height=281&width=407&top_left_y=1136&top_left_x=179)

Voorbeeldschakeling met Arduino, Relais en Lamp. https://maken.wikiwijs.nl/152360/NLT__Digitale_Techniek_TCC\#!page-7105 936

## Linksom of Rechtsom?

De dc-motor draait altijd in één richting, afhankelijk van de polariteit (+ pool en - pool) van de aangeboden voedingsspanning. Draai je de polariteit om, dan gaat de motor in de andere richting draaien.

Door het toepassen van twee relais wordt het mogelijk om de draairichting van de motor te kiezen.
Zie onderstaande voorbeeldschakeling. Naast de twee relais heb je uiteraard ook een externe voeding nodig én je gebruikt een extra uitgang van de Arduino.

## Hoe werkt het?

In rust staan beide relais in de ruststand. De motor is dan met beide aansluitingen verbonden met de pool van de voeding.

Er gebeurt dan dus niks.
De truck zit hem in het afzonderlijk aansturen van één van de relais. Dan krijgt de motor energie toegevoerd, via het ene relais zal de motor met de klok mee draaien, met het andere relais tegen de klok in!
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-34.jpg?height=721&width=1535&top_left_y=182&top_left_x=266)

## Stappenmotor

## Pomp

## Buzzer

De buzzer is een soort luidspreker. Deze kan een geluid produceren. Vaak een pieptoon of een zoemtoon, die ontstaat doordat een membraan gaat trillen onder invloed van een spanning of stroom.

De buzzer die hier als voorbeeld is afgebeeld kan direct worden aangestuurd door een digitale uitgang van de Arduino, 5 Volt gelijkspanning, dus let op de positieve en negatieve (GND) aansluiting.
![]
```{figure}
:width: 70%
:name: fig_


```(https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-34.jpg?height=370&width=866&top_left_y=1848&top_left_x=592)

Miniatuurbuzzer

## Elektromagneet
