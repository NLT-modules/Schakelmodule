
## Hardware voor de input van een digitaal systeem

## LDR sensor

Een lichtgevoelige weerstand of LDR (light-dependent resistor) is een elektrische component waarvan de weerstand beïnvloed wordt door de hoeveelheid licht die erop valt. De weerstandswaarde van een LDR wordt kleiner, naarmate de LDR sterker wordt belicht. Dat betekent dat als je een LDR aansluit op je analoge poort én de poort programmeert met Pull-Up naar Vcc, je de waarde van de spanning zult zien afnemen als er meer licht op de LDR schijnt. Wil je dat de spanning stijgt bij grotere lichtsterkte, dan heb je een Pull-Down weerstand naar GND nodig. Die heeft de Arduino niet aan boord dus die plaats je als fysieke weerstand extern.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-12.jpg?height=1201&width=1682&top_left_y=1065&top_left_x=205)

## Omgekeerd evenredige spanning met lichtsterkte

De LDR sluit je aan door een draad van de GND aan het ene uiteinde te verbinden (hier zwart) en het andere uiteinde met een willekeurige analoge poort te verbinden (hier rood). Poort programmeren mèt Pull-Up.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-13.jpg?height=820&width=864&top_left_y=178&top_left_x=593)

## Evenredige spanning met lichtsterkte

De LDR sluit je aan door een draad van de Vcc aan het ene uiteinde te verbinden (hier rood) en het andere uiteinde met een willekeurige analoge poort te verbinden (hier groen). Ook plaats je een fysieke weerstand tussen de analoge poort en de GND.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-13.jpg?height=957&width=872&top_left_y=1372&top_left_x=592)

## Momentdrukknop

Een drukknop is een veelgebruikte input. Je drukt op een knop en er gebeurt iets. De drukknop is gebaseerd op dat er als de knop ingedrukt is er een stroom doorheen kan lopen die minder weerstand ondervindt dat de route direct terug naar de min draad. In de schakeltekening zie je dat als de knop niet
is ingedrukt, de stroom niet door de knop kan en dan via de weerstand met de zwarte draad naar de min gaat. Als de knop wel is ingedrukt gaat het door de groene draad (via een weerstand, anders verbrandt de LED) naar de LED, die dan dus aan gaat.

Je moet in de code aangeven in welke poort het signaal van de drukknop binnenkomt (in de schakeling is dat digitale poort 2). Hieronder zie je ook een voorbeeldcode passend bij de schakeltekening.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-14.jpg?height=1739&width=1717&top_left_y=536&top_left_x=175)

Een schakeling waarmee een drukknop een LED bedient
// Pin 2 has an pushbutton connected on most Arduino boards.
// give it a name:
int pushButton = 2;
int led = 7;
// the setup routine runs once when you press reset:
void setup() \{
//initialize serial communication at 9600 buts per second
Serial.begin(9600);
//make the pushButton's pin an input:
pinMode(pushButton,INPUT);
pinMode(led, OUTPUT);
\}
// the loop routine runs over and over again forever:
void loop() \{
//read the input pin
int buttonState = digitalRead(pushButton);
Serial.printIn(buttonState);
delay(1);
//read the output pin
if(buttonState > 0 ) \{
digitalWrite(led,HIGH);
delay(1000);
digitalWrite(led,LOW);
delay(1000);
\} else
\{\}
\}

## Magneetcontact

Een magneetcontact (ook wel magneetschakelaar of reedswitch genoemd) is een schakelaar die gevoelig is voor magnetisch veld. De schakelaar kent twee posities; hij is Open of Dicht, oftewel Hoogohmig of Laagohmig (zoals je misschien weet is Ohm de eenheid voor weerstand bij elektriciteit). Dat betekent dat er een open dan wel gesloten circuit is. De werking is niet anders dan de momentdrukknop. het contact is gesloten zolang het magneetveld aanwezig is.

Het magnetisch veld breng je aan in de vorm van een magneet. In onderstaande afbeelding zie je de werking van het magneetveld. Het contact zal zich sluiten door de aantrekkingskracht.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-15.jpg?height=509&width=918&top_left_y=1910&top_left_x=569)
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-16.jpg?height=93&width=538&top_left_y=202&top_left_x=762)

Magneetcontact in naakte vorm.

Waar je bij de drukknop nog een tweede route voor de elektriciteit moet bieden, hoeft dat bij het magneetcontact niet. De ene kant kan aangesloten op de GND, en de andere op een digitale poort. Het nummer van die poort is dan in je Arduinocode de locatie voor de input.

## Thermometer (LM35)

De LM35 is vergelijkbaar met de TMP36 temperatursensor. Je ziet hieronder een afbeelding van de drie aansluitingen die de sensor heeft: voedingsspanning, ground én het sensorsignaal.

Er zijn sensoren die voorzien zijn van een lange aansluitkabel.
Rood gemerkte draad = +5Volt.
Zwart gemerkte draad = GND.
Draad zonder markering (of andere kleur) = Signaal.
In de datasheet vind je de verhouding van het signaal t.o.v. de temperatur. Bekijk ook de link naar een voorbeeldschakeling, waar je ook de code kunt zien. Er is een TMP36 sensor aangesloten en 3 LED's. Als je op simulatie starten klikt, kun je door op de sensor te klikken de temperatuur verhogen en zien dat de LED's bij hogere temperatuur één voor één aan gaan.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-16.jpg?height=275&width=404&top_left_y=1524&top_left_x=179)

Tinkercad TMP36
https://www.tinkercad.com/things/94VFdq4ienj-copy-of-tmp36-temperatur e-sensor-with-arduino/editel?tenant=circuits

De code die je kunt gebruiken:

```
int baselineTemp = 0;
int celsius = 0;
int fahrenheit = 0;
void setup()
{
pinMode(A0, INPUT);
Serial.begin(9600);
pinMode(2, OUTPUT);
pinMode(3, OUTPUT);
pinMode(4, OUTPUT);
}
void loop()
{
baselineTemp = 40;
```

```
celsius = map(((analogRead(A0) - 20) * 3.04), 0, 1023, -40, 125);
fahrenheit = ((celsius * 9) / 5 + 32);
Serial.print(celsius);
Serial.print(" C, ");
Serial.print(fahrenheit);
Serial.printIn(" F");
if (celsius < baselineTemp) {
digitalWrite(2, LOW);
digitalWrite(3, LOW);
digitalWrite(4, LOW);
}
if (celsius >= baselineTemp && celsius < baselineTemp + 10) {
digitalWrite(2, HIGH);
digitalWrite(3, LOW);
digitalWrite(4, LOW);
}
if (celsius >= baselineTemp + 10 && celsius < baselineTemp + 20) {
digitalWrite(2, HIGH);
digitalWrite(3, HIGH);
digitalWrite(4, LOW);
}
if (celsius >= baselineTemp + 20 && celsius < baselineTemp + 30) {
digitalWrite(2, HIGH);
digitalWrite(3, HIGH);
digitalWrite(4, HIGH);
}
if (celsius >= baselineTemp + 30) {
digitalWrite(2, HIGH);
digitalWrite(3, HIGH);
digitalWrite(4, HIGH);
}
delay(1);
}
```

![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-18.jpg?height=1585&width=1200&top_left_y=179&top_left_x=405)

LM35 onderaanzicht
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-18.jpg?height=275&width=276&top_left_y=1961&top_left_x=179)

4 LM35 Datasheet
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-19.jpg?height=1711&width=1286&top_left_y=178&top_left_x=385)

## Potentiometer

De potentiometer is een weerstand waarvan je de waarde kunt variëren. Wanneer je aan de as draait verandert de positie van een loper op de weerstandsbaan (vaak carbon). Met de draaiknop kun je de spanning aan de loper regelen. De werking hiervan en het aansluiten ervan wordt in de onderstaande video uitgelegd.

Aan de potmeter die wij gebruiken is een extra weerstandje toegevoegd om te voorkomen dat de potmeter verbrand bij verkeerd aansluiten (er zou dan kortsluiting kunnen ontstaan.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-20.jpg?height=276&width=287&top_left_y=179&top_left_x=173)
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-20.jpg?height=347&width=841&top_left_y=569&top_left_x=613)

## Aansluitingen

De groene draad is verbonden met de loper (via extra weerstandje van 2 kOhm ). De rode is verbonden met de uiterste kant met de klok mee (maximum). De zwarte draad zit aan de nulpositie, de uiterste kant tegen de klok in (minimum).

Onze potmeter heeft een waarde van 10kOhm met de loper van 2kOhm.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-20.jpg?height=381&width=859&top_left_y=1463&top_left_x=590)

Aansluiting van de de potentiometer met willekeurige kleuren draad(!)

## Microfoon

Een microfooon is een sensor (of opnemer) die gevoelig is voor geluidsgolven.
Wij maken gebruik van een module met het MAX9814 circuit met de volgende mogelijkheden:

* vast instellen van versterking
* automatische versterking met instelbare attack / release
* nauwkeurige opname in het frequentiegebied tussen 20 Hz en 20 kHz

Bekijk de datasheet van de MAX9814 voor een schat aan informatie over de mogelijkheden.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-21.jpg?height=849&width=1196&top_left_y=175&top_left_x=178)

■
https://maken.wikiwijs.n|/userfiles/4/44fb5180baa209c6ad024ef2108610 8b1fb911c1.pdf

Hieronder zie je een aansluitschema voor de microfoon. Een microfoon is eigenlijk een vrij simpele analoge input, en dat zie je ook aan de code. Er wordt een analoge input uitgelezen en die wordt in deze code geplot op de seriële plotter (bij hulpmiddelen, let op: de y-as wordt steeds automatisch geschaald). Let op: wat je hier ziet is de spanning die de microfoon afgeeft aan de Arduino, de golven die je ziet verschijnen zijn niet de geluidsgolven maar een elektronische representatie daarvan.

Als je echt de microfoon als input wilt gebruiken zul je nog een flinke bewerking met de gegevens moeten uitvoeren. Dat kan vrij complex zijn, en je moet wat weten over geluid. We zullen hier t.z.t. meer informatie over opnemen.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-21.jpg?height=966&width=1668&top_left_y=1619&top_left_x=197)

Een aans/uitschema voor de microfoon die wij gebruiken

## Klok

De Arduino beschikt over een ingebouwde klok die is aan te roepen met het commando millis(). Deze klok is handig om incidenteel een korte periode te meten, een wachttijd in te stellen of een teller op te hogen.

Wil je nauwkeurig een tijdseenheid kunnen toepassen en wil je daarin flexibeler zijn dan is het verstandig om een externe klok te gebruiken, een Real Time Clock.

Met zo'n klok beschik te over de werkelijke tijd en vaak ook de datum en zelfs een meerjarenkalender. Je leest hem uit op het moment dat je de gegevens nodig hebt zodat je je in de programmacode met belangrijker zaken kunt bezighouden. Met een ingebouwde batterij (knoopcel o.i.d.) zorg je ervoor dat de klok blijft werken als de Arduino is uitgeschakeld.

Wij werken met de DS1307 chip en communiceren met de module via het i2c protocol.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-22.jpg?height=389&width=384&top_left_y=1002&top_left_x=839)

## Ultrasone sensor

Met de ultrasone sensor kun je de afstand tot een object meten. Het is een apparaat dat erg eenvoudig in gebruik is. Op de onderstaande site kun je voor het type HC-SR04 lezen hoe je hem moet aansluiten en gebruiken. Dit is het type dat wij op school hebben. Er zijn ook andere typen. Je ziet ook een filmpje hieronder met de ultrasone sensor in gebruik en een foto van hoe het er in de praktijk uit ziet.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-22.jpg?height=272&width=399&top_left_y=1960&top_left_x=181)

Ultrasone sensor
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-22.jpg?height=269&width=390&top_left_y=2327&top_left_x=184)

Tutorial voor de ultrasone sensor https://create.arduino.cc/projecthub/abdularbi17/ultrasonic-sensor-hc-sr0 4-with-arduino-tutorial-327ff6
wikiwijs
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-23.jpg?height=1029&width=1372&top_left_y=179&top_left_x=342)

Een voorbeeld van hoe een aangesloten ultrasone sensor eruit ziet

```
int trigPin = 9; // TRIG pin Serial.begin (9600); void loop() {
digitalWrite(trigPin, HIGH); duration_us = pulseIn(echoPin, HIGH); delay(500);
```


## Vochtsensor

De vochtsensor is een sensor die gebaseerd is op de geleiding van stroom door (normaal) water. Als er meer water is, gaat die geleiding makkelijker, is het droog gaat de geleiding moeilijker.

## Lichtsluis

Een lichtsluis is een hulpmiddel om aanwezigheid van objecten te kunnen detecteren. Een voorbeeld van een hele grote lichtsluis vind je bij een liftdeur. In de deuropening zit aan de ene zijde een lichtbron (al dan niet met sensor) en aan de andere zijde een reflector of een lichtsensor. Zodra een persoon zich tussen lichtbron en sensor bevindt zal de deur niet sluiten. Het licht is meestal onzichtbaar (infrarood).

In het aansluitvoorbeeld zie je hoe je een lichtsluis kunt toepassen i.c.m. een Arduino.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-24.jpg?height=443&width=1466&top_left_y=207&top_left_x=261)
