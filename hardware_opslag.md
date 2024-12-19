(ch5)=

# Hardware voor de opslag en het transport van data 

## Draadjes (en ze bevestigen)

## i2c

## Sensoren en Actuatoren slimmer aansluiten in de praktijk

Wanneer je al wat schakelingen hebt bedacht en gebouwd aan de hand van de oefenopdrachten, zul je gemerkt hebben dat deze kunnen uitmonden in een wirwar aan verbindingen en draadjes. Vooral als je wat meer met de Arduino gaat doen dan alleen een temperatuur meten of een lampje aan- of uitzetten.

Zodra je project groeit krijg je te maken met ingewikkelder sensoren, meer ingangssignalen en ook meer uitvoer.

Voor weergave van gegevens kun je bijvoorbeeld gebruik maken van een display. Voor opslag op een geheugenkaart zijn er mooie insteekmodules. Typisch onderdelen die veel verschillende signalen nodig hebben om te kunnen werken.

Om je project overzichtelijk te houden, slimmer op te zetten, beter te kunnen onderhouden en makkelijker te kunnen ontwerpen ga je gebruik maken van een communicatieprotocol. Hiermee zijn een heleboel moeilijke ontwikkelstappen al gedaan en kun je op relatief eenvoudige manier grote slagen gaan maken.

Het communicatieprotocol waarvoor de Arduino al is voorbereid is het i2c protocol (spreek uit als " i kwadraat c").

Dit systeem werkt met maar 2 signaallijnen om gegevens uit te wisselen tussen processor en sensor of actuator. Samen noemen we deze twee draden de "bus". In dit geval dus de i2c bus.
i 2 c is een seriële bus, omdat alle informatie in blokken van een aantal bits achter elkaar wordt getransporteerd. Eén draad is de referentie en voert een kloksignaal, de kloklijn: SCL (Serial CLock). De andere draad voert de informatie, de data en heet de datalijn: SDA (Serial DAta). Beide lijnen kennen twee niveaus, een logische "1" en een logische "0".

Een heel groot praktisch voordeel van deze communicatiebus is dat er een hele grote hoeveelheid verschillende sensoren en actuatoren parallel aan deze twee draden kunnen worden aangesloten. Dat scheelt enorm veel werk en bespaart veel hardware (bedrading).

Het protocol zorgt er voor dat alle aangesloten eenheden herkenbaar zijn aan een adres. Bij i2c bestaat elk adres uit 7 bits (een getal bestaande uit 7 nullen en/of enen). Met deze methode kun je dus maar liefst 128 sensoren/actuatoren verbinden met de Arduino en dat met maar twee draden! (Ga na of je begrijpt waarom er maximaal 128 unieke adessen bestaan bij i2c.

## Geschikt voor i2c ?

Niet alle randapparaten die wij beschikbaar hebben zijn voorbereid voor i2c. Let hier op door van elke sensor of actuator die je wilt gebruiken bijbehorende informatie te zoeken! (uit de datasheet of andere bronnen).

## Master en Slave

wikiwijs
i2c werkt op basis van een Master-Slave constructie. De processor (Arduino) is de baas, de Master. De sensor of actuator is de slaaf (Slave). Dat houdt in dat een sensor of actuator pas actie onderneemt nadat de master daarvoor de opdracht heeft gegeven. Het zou anders een onbegrijpelijke brei van signalen worden op de bus.

## Pull-Up

De beide buslijnen hebben in de ruststand een hoog niveau: logische "1". (5 Volt of 3,3 Volt, afhankelijk van de gebruikte voedingsspanning). Daarom moeten er altijd pull-up weerstanden worden gebruikt tussen de buslijnen en de voeding. Deze weerstanden plaats je bij een fysiek korte bus dicht bij de Arduino (je kunt ze ook via de code programmeren, dan hoef je geen externe weerstanden te paatsen). Als je een langere bus gebruikt (meerdere meters) óf deze zich bevindt in een omgeving met veel ruis (sterke stoorsignalen) dan plaats je meerdere weerstanden, verspreid over de totale lengte.

Als je I2C apparatuur aan gaat sluiten krijgt elk apparaat een uniek adres. Dit is nodig omdat alle info naar alle aangesloten apparaten via hetzelfde draadje moet. In je code moet je dan dus aangeven van elk aangesloten I2C apparaat wat zijn adres is. Maar hoe weet je dan het adres? Met onderstaande code scan je je systeem voor alle adressen van aangesloten I2C apparatuur. Voor een LCD display is het bijv. 0x27.

```{code-cell} C
/
// Arduino I2C Scanner
// Re-writed by Arbi Abdul Jabbaar
// Using Arduino IDE 1.8.7
// Using GY-87 module for the target
// Tested on 10 September 2019
// This sketch tests the standard 7-bit addresses
// Devices with higher bit address might not be seen properly.
/ -------------------------------------------------------------------------
#include <Wire.h> //include Wire.h library
void setup()
{
Wire.begin(); // Wire communication begin
Serial.begin(9600); // The baudrate of Serial monitor is set in 9600
while (!Serial); // Waiting for Serial Monitor
Serial.println("\nI2C Scanner");
}
void loop()
{
byte error, address; //variable for error and I2C address
int nDevices;
Serial.printIn("Scanning...");
nDevices = 0;
for (address = 1; address < 127; address++ )
{
// The i2c_scanner uses the return value of
// the Write.endTransmisstion to see if
// a device did acknowledge to the address.
Wire.beginTransmission(address);
error = Wire.endTransmission();
if (error == 0)
{
Serial.print("I2C device found at address 0x");
if (address < 16)
Serial.print("0");

Serial.print(address, HEX);
Serial.printIn(" !");
nDevices++;
else if (error == 4)
{
Serial.print("Unknown error at address 0x");
if (address < 16)
Serial.print("0");
Serial.printIn(address, HEX);
if (nDevices == 0)
Serial.println("No I2C devices found\n");
else
Serial.println("done\n");

delay(5000); // wait 5 seconds for the next I2C scan
\}
```

## (micro) SD card reader

Als je systeem gegevens verzamelt wil je die bewaren. De makkelijkste manier om dit te doen is door het weg te schrijven naar een (micro)SD kaart. Deze zijn makkelijk aan te sluiten op de Arduino en met een cardreader kun je vervolgens de gegevens op de computer bekijken.

Het vergt wel wat voorbereiding. De gegevens schrijf je namelijk weg, zoals je gegevens naar de seriële monitor schrijft. Op de SD kaart wordt een tekstbestandje opgeslagen met daarin de tekst die je naar dat bestand toeschrijft.

Stel dat je een reeks metingen wilt wegschrijven is het bijv. belangrijk om elke meting steeds op een nieuwe regel te beginnen, en andere informatie die belangrijk is voor de meting (bijv. het tijdstip) op dezelfde regel op te schrijven. Verschillende soorten informatie kun je scheiden door spaties, maar beter is het om dit te doen door puntkomma's. Je kunt dan in Excel het bestand openenen en de kolommen scheiden op basis van puntkomma's (wordt uitgelegd).

Het goed gebruiken van de SD kaart is een van de pittigste onderdelen van je systeem, maar het is het wel het onderdeel dat het systeem meer maakt dan een dom apparaatje. Nu kun je er namelijk onderzoek mee doen en daarmee je apparaat veel nauwkeuriger evalueren, wat een belangrijke stap is in de ontwerpcyclus.

Daarnaast is de code voor het wegschrijven naar de SD kaart best complex (zie onder). Het vergt enige oefening om al je andere code op de juiste plek in de code neer te zetten waardoor alle verschillende onderdelen samen werken. In hoofdstuk 8 ga je hier vanzelf een voorbeeld van zien. Omdat jullie allemaal iets anders gaan maken, zal voor iedereen de uiteindelijke oplossing anders zijn.
![](https://cdn.mathpix.com/cropped/2024_12_19_51786a43dd384a158ec8g-38.jpg?height=1117&width=1543&top_left_y=301&top_left_x=265)

Aan/uitschema voor een micro-sd cardreader

```{code-cell} C
\#include <SPI.h>
\#include <SD.h>
File myFile;
void setup() \{
// Open serial communications and wait for port to open:
Serial.begin(9600);
while (!Serial) \{
; // wait for serial port to connect. Needed for native USB port only
\}
Serial.print("Initializing SD card...");
if (!SD.begin(10)) \{
Serial.printIn("initialization failed!");
while (1);
\}
Serial.printIn("initialization done.");
// open the file. note that only one file can be open at a time, // so you have to close this one before opening another.
myFile = SD.open("test.txt", FILE_WRITE);
// if the file opened okay, write to it:
if (myFile) \{
Serial.print("Writing to test.txt...");
myFile.println("This is a test file :)");
myFile.printIn("testing 1, 2, 3.");
for (int i = 0; i < 20; i++) \{
myFile.printIn(i);


}
// close the file:
myFile.close();
Serial.printIn("done.");
} else {
// if the file didn't open, print an error:
Serial.println("error opening test.txt");
}
}
void loop() {
// nothing happens after setup
}
```


## Wifi chip
