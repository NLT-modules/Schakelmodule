---
exports: 
    - format: pdf
      template: curvenote
      output: exports/ch5.pdf  
downloads:
    - file: exports/ch5.pdf
---
## Data opslag en transport

![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-51.jpg?height=1195&width=1580&top_left_y=339&top_left_x=227)

## Leerdoelen

Kennis
5.1 Je kunt uitleggen dat er vuistregels zijn voor het ordenen van gegevens binnen bestanden, het ordenen van bestanden en dat het gebruiken van die vuistregels je tijd bespaart en de kans op fouten vermindert.
5.2 Je kunt uitleggen dat metadata de informatie bevat over wat er in bestanden te vinden is en hoe deze geordend zijn.
5.3 Je kunt uitleggen dat gegevens fysiek opgeslagen worden op harde schijven (in het klein) of in datacenters (in het groot) en hoe deze opslag functioneert
5.4 Je kunt uitleggen dat gegevens op verschillende manieren beveiligd kunnen worden door wachtwoorden en encryptie en dat de wiskunde hier een grote rol in speelt.
5.5 Je kunt uitleggen dat het internet een combinatie is van ip-adressen en TCP/IP protocollen en hoe dit werkt

## Vaardigheden

5.6 Je hebt gewerkt met een apparaat dat informatie naar een website kan sturen zodat je op afstand mee kunt kijken met de sensoren die jouw digitale systeem bevat.

### 5.1 De 'cloud'

Met alleen maar een mobiele telefoon heb je eindeloos veel informatie beschikbaar. Het versturen en ophalen van data gaat snel, draadloos en onzichtbaar via de 'cloud'. Je deelt bestanden zonder dat je er iets extra's voor hoeft te doen. De naam 'cloud' suggereert dat het ergens in de lucht gebeurt, maar niets is minder waar. Overal in de wereld staan grote en kleine gebouwen zonder ramen, vol met computers en harde schijven: datacenters. Digitale data is heel geschikt om snel en zonder verlies te transporteren. Dat gebeurt met draadloze wifi en $4 \mathrm{G} / 5 \mathrm{G}$ signalen en kabels van je mobiel naar datacenters en weer terug. Goede beveiliging is ook vereist. Achter dataopslag en datatransport zit een heleboel techniek die we in dit hoofdstuk beter gaan bekijken.

## Digitale signalen

Digitale technologie gebruikt de binaire code die twee (= bi) waarden kan aannemen: 0 of 1. Dat is in een elektrische schakeling hoge ( 5 V ) of lage ( 0 V ) spanning, met licht door helder of zwak of zwarte en witte lijnen of vlakjes. Informatie wordt gecodeerd in reeksen nullen en enen.

### 5.1 Vraag ```{exercise}

``` <br> Zoek enkele voorbeelden van digitale codes die op spullen, sites of drukwerk te vinden zijn. Welke soorten codes kun je terugvinden?

Met een rijtje van 2 binaire waarden kun je 4 combinaties maken: 00, 01, 10 en 11. Dat is $2^{2}$. Een rijtjes van 8 bits (een byte) wordt veel gebruikt. Dit geeft $2^{8}$ combinaties, ofwel 256. Met langere reeksen kunnen meer verschillende waarden worden gecodeerd. De TMP-36 temperatuursensor stuurt een analoog signaal naar de Arduino, dat omgezet
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-52.jpg?height=284&width=763&top_left_y=1494&top_left_x=992)

Figuur 5.2 Een byte is uit een rijtje van 8 bits. Deze 24 bits zijn in 3 byte verdeeld. 8 bits geeft 256 combinaties.
wordt in discrete (stapgewijze) decimale waarden 0 tot 1024. (Ga eens na hoeveel bits er voor elke waarde nodig zijn).

Omzetting van analoog naar digitaal geeft wel wat verlies (immers: bij een reeks verschillende temperaturen geeft de sensor hetzelfde getal). Wanneer er eenmaal een discreet digitaal getal is kan dat goed behouden worden. Immers, een spanning van 3,4 of 5 volt is nog steeds 'hoog' en dus 1. Het maakt ook niet meer uit of dit nu via elektrische spanning, radiogolven of lichtpulsen verstuurd wordt. Data kan zo zonder verlies over lange afstanden worden vervoerd.

## Nauwkeurigheid

Precies meten van de temperatuur, bijvoorbeeld met twee cijfers achter de komma, betekent dat je digitale sensor voldoende stapjes moet kunnen weergeven. Een 8-bit temperatuursensor kan niet meer dan 256 verschillende waarden weergeven. Voor een bereik van 0 en $100^{\circ} \mathrm{C}$ zijn er iets meer dan 2 waarden per graad beschikbaar. Dat is onvoldoende. Je moet dan bijvoorbeeld een 16-bit sensor gebruiken, die 65.536 waarden kan onderscheiden. Hoe meer bits, hoe nauwkeuriger er te
digitaliseren is. Maar ook: hoe meer rekenkracht de processor moeten hebben om een signaal te verwerken. Het verzamelen van data betekent dat je bedenkt: hoe nauwkeurig en hoe vaak wil ik meten?

5.2 Vraag ```{exercise}

```<br>Hoeveel data produceert een 16-bit sensor in één dag? Geef je antwoord in Mb.

## Data bewerken, opslaan en transporteren

![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-53.jpg?height=244&width=258&top_left_y=666&top_left_x=179)

Figuur 5.3 Opslag en uitvoer van digitaal signaal
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-53.jpg?height=281&width=278&top_left_y=1093&top_left_x=158)

Figuur 5.4 Verwerking van digitale gegevens in de processor

Het elke seconde uitlezen van de 8-bit sensor levert 1 byte data per seconde, 300 byte in 5 minuten en 86 kilobyte per dag. Dat zijn relatief bescheiden hoeveelheden. Een 5 Megapixel camerasensor levert plaatjes van vele megabytes ( $\mathrm{Mb}, 10^{6}$ ) waar datatransport en opslag in de orde van gigabyte $\left(\mathrm{Gb}, 10^{9}\right.$ ) of terabyte ( Tb , $10^{12}$ ) voor nodig is. Wanneer sensoren aan staan, produceren ze data. Hoe vaak je die data ophaalt en verwerkt bepaal je in de software (hoe nauwkeurig en hoe vaak meet je?). Bij het programmeren daarvan moet je na denken over de hoeveelheid data die nodig is en dus de datastroom die ontstaat. Hoe meer data verplaatst moet worden, hoe groter de bandbreedte moet zijn om dat snel voor elkaar te krijgen. De bandbreedte wordt meestal uitgedrukt in bits per second (bps). Ook compressie van data is belangrijk. Je vervangt een reeks dezelfde waarden door een (veel kortere) reeks. Daarin staat één keer de oorspronkelijke waarde, hoe vaak die herhaald is en waar het begin en einde zijn. Dat gebeurt met een compressiealgoritme. Sommige algoritmes gooien daarmee ook informatie weg. Bij foto's ken je dat als .jpg, bij video als .mp4 en bij geluid als .mp3. Andere algoritmes zorgen dat de oorspronkelijke informatie te herstellen is: 'lossless' compressie. Hier is veel meer over te leren in andere modules (zie hoofdstuk 8).

## Geheugen

Digitale systemen gebruiken geheugenchips en opslagmedia (harddisk, optische schijven, solid state disks of flash geheugenkaarten) om bits weg te schrijven. Een geheugen in de computer werkt met transistoren (schakelaars) of condensatoren. Een aantal transistoren kunnen samen zo verbonden worden dat bij de uitgang van de schakeling spanning blijft staan (1) of juist niet (0). Deze flip-flop schakeling vormt dan een geheugencel. Met een paar miljard van deze schakelingen bouw je een geheugenchip. Dit kan ook met condensatoren. Als je daar elektronen in opsluit, blijft de spanning hoog (1). Een lege condensator heeft dan de waarde (0). Elektronen lopen langzaam uit de condensator, zodat de geheugenchip telkens moet controleren (actief, dynamisch) of de spanning hoog genoeg is (en voegt zo nodig lading toe). Het geheugen is wel supersnel, waardoor dit gebruikt wordt als werkgeheugen (Dynamic RAM).

### 5.3 Opdracht

a. Test eens uit wat de bandbreedte (bandwidth) is van de internetverbinding van een mobiel en een laptop (via Wifi én met een bekabelde Ethernet aansluiting). Ga daarvoor met de mobiel of laptop naar de website speedtest.net.
b. Vergelijk de bandbreedtes met elkaar. Verklaar het (eventuele) verschil dat je ziet.

In de computerwereld draait alles om data, datatransport en dataopslag. Aan alleen maar een reeks enen en nullen heb je niet zoveel. De processor moet weten waar de reeks enen en nullen vandaan komt, wat er mee moet gebeuren en waar die na bewerking naartoe moet. Daarom is het belangrijk dat bekend is waar die data over gaat. We noemen dit metadata. Vergelijk het met de informatie:
'ja'. Daar heb je weinig aan als je de Vraag ```{exercise}

``` en de context niet kent. Het antwoord wordt anders als je de Vraag ```{exercise}

``` weet: wil je suiker in je thee? Een database bevat tabellen met data én metadata. Daar kun je in zoeken, data uit lezen, bijschrijven en wissen.

Een bestand (file) heeft allerlei informatie dat vertelt waar het bestand over gaat en hoe het in elkaar zit. Vaak zijn files zo groot dat ze in blokjes moeten worden opgeslagen en bewerkt. De processor heeft van elk blokje een adres en zet dat in het geheugen. Blokjes worden van het ene naar het andere deel van het geheugen verplatst of in de processor bewerkt en weer opgeslagen. De harde schijf gebruikt ook adressen om bij te houden waar ieder datablokje is opgeslagen. Op een harde schijf hoeven de blokjes van één file niet achter elkaar te staan. De schijf zet ze neer waar ruimte is. De schijf moet dus precies bijhouden welke datablokjes samen het digitale bestand vormen dat je hebt opgeslagen.

De computer schrijft en leest de hele tijd van werkgeheugen naar massageheugen (harde schijf of ssd) of stuurt en ontvangt de blokjes data over de netwerkverbinding en het internet. Bij het heen en weer sturen over het netwerk moet er nóg meer informatie toegevoegd worden om het datablokje op de juiste plek te krijgen. Voor die taken heeft de computer een netwerkkaart of wifi-controller. Je mobiel gebruikt daar een wifi, bluetooth of $4 / 5 \mathrm{G}$ controller voor. Die is in staat de data heen en weer te sturen naar het netwerkknooppunt (router, switch) en vandaar naar het internet.

Voor het heen-en-weer sturen van datapakketjes moeten computers verbinding met elkaar hebben, met koperdraad, glasvezel of draadloos.

```
5.4 Vraag ```{exercise}

```
Hoeveel opslag heeft jouw mobiel? Maak onderscheid tussen werkgeheugen (RAM) en het
opslag (ssd) geheugen. Hoe zit dat met je computer?
```


### 5.2 Verbindingen

## Metaaldraad

Elektriciteit loopt via metaal en dat is dus ook de manier om elektrische digitale signalen te vervoeren. De snelheid waarmee dat gebeurt is pakweg $0,1 \mathrm{x}$ de lichtsnelheid. Een elektrisch signaal verzwakt over grotere afstanden, waardoor er versterkers nodig zijn. De standaard voor digitale elektrische signalen is de UTP-kabel, die bijvoorbeeld ook gebruikt wordt om in huis router en computer te koppelen.

```
5.5 Vraag ```{exercise}

```
Hoe werkt die UTP kabel? Waarom heeft die meerdere draden?
```


## Sneller: glasvezel

Het sneller en over langere afstanden transporteren van digitale informatie gaat tegenwoordig via glasvezel. Hoewel met een iets lagere snelheid dan lichtsnelheid in vacuüm, is het transport wel sneller dan in metaal. Er is bovendien minder verzwakking van het signaal over langere afstand.

[^0]Voor de glasvezel worden lasers gebruikt (die een digitaal signaal omzetten in lichtpulsen) en fotodiodes (die het digitale lichtsignaal weer in stroom omzetten). De lasers kunnen heel klein zijn, en zelfs als onderdeel van een computerchip worden gebouwd. Daardoor lukt het ook om tussen computers de glasvezel voor communicatie in te zetten. Een stap verder is de ontwikkeling van een optische computer waar alle bewerkingen met licht gebeuren.
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-55.jpg?height=772&width=1558&top_left_y=522&top_left_x=229)

Figuur 5.5 Kwaliteit van datatransport met licht in glasvezels
Meer bronnen over glasvezel:
https://www.deingenieur.nl/artikel/nederlandse-bedrijven-pionieren-met-chips-op-licht https://www.deingenieur.nl/artikel/fotonica-sector-kriigt-duw-in-rug
https://www.deingenieur.nl/artikel/doorbraak-silicium-zendt-licht-uit
https://nl.wikipedia.org/wiki/Glasvezel
https://en.wikipedia.org/wiki/Laser diode

## Nog sneller? Draadloos.

Wifi, bluetooth, mobiele data (3, 4 en $5 G$ ) of satellietcommunicatie werken met radiogolven die zich met lichtsnelheid verplaatsen. De omzetting van een digitaal signaal naar een radiogolf en terug kost tijd en rekenwerk, waardoor weer snelheid verloren gaat. Er zijn zendmasten en schotelantennes nodig, die weer met (glasvezel) kabels aan datacenters gekoppeld zijn.

### 5.7 Opdracht

Er is veel te vinden over draadloze communicatie. Als je in een groepje werkt: kies per groepslid één van de technieken uit en verzamel daar informatie over. Maak daarvan een overzichtelijke tekening / kleine poster om uit te leggen hoe de techniek werkt. Geef informatie over snelheid, bandbreedte (hoeveel data per seconde) en afstand die overbrugd wordt. Hoe groot zijn zender en ontvanger van het signaal? Worden er gevaren of schadelijke effecten genoemd?

### 5.3 Adresseren

Elke computer in een netwerk heeft een eigen adres: een toegewezen IP ( $v 4$ of v6) en een MAC (uniek apparaatnummer). Een datapakketje krijgt adressen mee: waar komt het vandaan (afzender IP) en waar moet het naartoe (ontvanger IP). Het internetprotocol (TCP/IP) beschrijft hoe pakketjes
over het netwerk vervoerd moeten worden. Andere protocollen (als http://) sturen de datapakketjes in de computer zelf naar de juiste plek (bijvoorbeeld de webbrowser).

Het eerste knooppunt leest het IP adres en bepaalt naar welk volgend punt het verstuurd wordt. Het eerste stukje van het adres ("niet mijn netwerk") is al voldoende om het door te sturen. Een netwerk in huis heeft vaak een IP-adres dat begint met 192. Dat betekent dat de router het pakketje niet naar buiten stuurt, maar in het eigen netwerk zoekt. Je internetrouter thuis heeft voor ieder apparaat een eigen laatste getal in de IP-reeks: bijvoorbeeld 192.168.2.0 voor de router en 192.168.2.12 voor jouw computer. De router die in huis staat, heeft een IP-adres voor binnen (LAN) én een voor buiten (WLAN). Als je een website bezoekt, gaat je browser data van een webserver ophalen. Je tikt een adres in, bijvoorbeeld https://www.verenigingnlt.nl. Met dat adres kun je nog niet de juiste server bereiken. Daarom gaat het pakketje eerst naar een DNS-server (dynamische naamserver), die van de website-naam een IP-adres maakt. Nu kan het verzoek (ophalen van de webpagina) bij de juiste webserver worden bezorgd. De webserver stuurt vervolgens pakketjes terug naar jouw computer. Op die route liggen allerlei tussenstations (knooppunten, hubs) die supersnel het IP-adres lezen en het pakketje doorsturen. Dat pakketjesverkeer gaat zo snel, dat je niet merkt dat de computers waar ze vandaan komen aan de andere kant van de wereld kunnen staan. Voor dat dataverkeer zijn overal ter wereld knooppunten en datacenters ingericht.

## Internet knooppunten

Het Internet Knooppunt Amsterdam, op de campus van de Universiteit van Amsterdam, was in de beginjaren van het Internet één van de zeven wereldwijde knooppunten (hubs). Nog steeds is het een van de grootste hubs in de wereld, mede doordat de belangrijkste telecommunicatiekabel tussen Europa en de VS bij Amsterdam uitkomt.
De basis van het vrij toegankelijke internet is het nauwkeurig zonder selectie doorgeven van de datapakketjes die verzonden worden. Veel landen respecteren die vrijheid niet en blokkeren (delen) van internetdiensten, sociale media of zoekmachines. Het komt er op neer dat de knooppunten in die landen selectief het verkeer van een deel van de IP-adressen niet doorlaten. Er zijn technieken als VPN om veilige verbindingen op te zetten, waarbij een apparaat voor de buitenwereld een ander IPadres toegekend krijgt. Een thuiscomputer kan op die manier een IP-adres krijgen alsof die bij een bedrijfsnetwerk hoort. Toegang tot andere apparatuur binnen het netwerk, zoals een printer of opslagservice, kan op die manier ook geregeld worden.

### 5.8 Opdracht <br> Vraag ```{exercise}

``` aan je docent, TOA of ICT-beheerder of je op school kunt kijken waar de netwerkrouters en servers staan en hoe de dataopslag geregeld is.

### 5.4 Datacenters

Voor alles wat je online met je mobiel doet zijn andere computers nodig. Ze worden 'servers' genoemd, omdat ze bedoeld zijn om jou van dienst te zijn: ze slaan jouw informatie op en sturen je de informatie die je wilt. Alle servers met opslagruimte van online diensten staan in honderden datacenters over de hele wereld.

### 5.9 Opdracht <br> Voor welke apps moet je online zijn? Welke data stuur je dan van je mobiel naar een datacenter en terug?

## Rondkijken in een datacenter

Direct naast het rekencentrum van de Universiteit van Amsterdam staat een groot datacenter van Equinix, met vele verdiepingen waar servers van allerlei bedrijven opgesteld zijn. Kijk hier voor een virtuele rondleiding door dat datacenter: https://equinix-
cdn.s3.amazonaws.com/virtual-
tours/Amsterdam AM4/index.htm.
Snelheid is alles in deze digitale wereld. Voor een webwinkel is het belangrijk dat bestellen en betalen zonder vertraging verloopt. In een datacenter kan een webwinkel zijn servers vlakbij die van een bank plaatsen. Uitwisselen van data tussen de servers gaat dan met zo min mogelijk vertraging. Grotere afstand betekent ook: schakelkastjes (hubs, switches) of andere servers en dus vertraging. Voor de bezoeker van de site betekent het een snelle afhandeling van opdrachten. Het is dus aantrekkelijk voor een bedrijf om haar servers ergens te plaatsen waar zoveel mogelijk connectiviteit is. In Nederland vind je deze connectiviteitsknooppunten in Amsterdam, maar ook in Rotterdam, Eindhoven en

## Digitale haven

Nederland is wereldwijd een belangrijke plek voor de digitale wereld. Een centrale verbinding in het Internet is de zeekabel tussen Europa en de Verenigde Staten. Die komt in Amsterdam binnen, onderin het rekencentrum van de universiteit van Amsterdam. Daar is de Amsterdam Internet Exchange, AMS-IX gevormd, één van de allereerste en belangrijkste knooppunten van het Internet. Vanaf Nederland wordt veel data getransporteerd naar plekken elders in Europa of de wereld. Om deze reden wordt het daarom ook wel een digitale haven of digitale mainport genoemd

Groningen.

### 5.10 Vraag ```{exercise}

```

Noem een paar voorbeelden van webwinkels. Denk even terug aan je laatste online bestelling. Welke stappen (denk je) dat er zitten tussen de bestelknop en jouw digitale betaling zit (het moment dat het geld van je rekening af is)?

Veiligheid is ook alles in de digitale wereld. In een datacenter zijn de volgende zaken goed geregeld: constante voeding (stroom voor de servers en schijven, noodstroom als de netstroom uitvalt), koeling (een constante temperatuur rond de 20 graden), snelle verbindingen (glasvezels en korte afstanden tot andere servers) en een streng beveiligd gebouw (mensen kunnen er niet zomaar bij). Een datacenter biedt deze veilige voorziening en bedrijven kunnen daar hun computers neerzetten,
door ruimte in het datacenter te huren. Datacenters die ruimte verhuren aan klanten voor het plaatsen van servers, worden ook wel colocatie datacenters genoemd. Weten hoe een datacenter werkt? Zie https://www.dutchdatacenters.nl/datacenters/hoe-werkt-een-datacenter/

Sommige techbedrijven hebben zoveel servers dat ze eigen datacenters bouwen, denk aan Google en Microsoft. Dit soort datacenters worden hyperscale datacenters genoemd. Wanneer een programma op een computer in een datacenter draait en de data daar ook staan, dan hoef je op je eigen computer alleen maar wat instructies naar de computer van het datacenter te sturen. Je eigen computer hoeft dan niets op te slaan of te bewerken. Je kunt op die manier je telefoon gebruiken om allerlei plaatjes te bewerken, omdat het echte rekenwerk in het datacenter gebeurt. Dit werken in de 'cloud' gebeurt niet in de wolken, maar gewoon in een gebouw zonder ramen, ergens op een industrieterrein, een datacenter dus.

## Elektriciteit

Datacenters gebruiken veel stroom. Zoveel zelfs dat ze windmolenparken in de buurt hebben om groene stroom te leveren. Tegelijkertijd zien we dat het energieverbruik van datacenters al tien jaar stabiel is, terwijl het internetverkeer en de werkbelasting voor de datacenters enorm gestegen zijn. Dit is voor een belangrijk deel te danken aan het samenvoegen van kleine inefficiënte serverruimtes die bedrijven zelf ingericht hadden, tot professionele, grote en efficiëntere datacenters die we nu kennen. Ook het gebruik van meer Cloud-applicaties heeft bijgedragen aan het gelijk blijven van het stroomverbruik. Het restproduct van stroomverbruik in een datacenter is restwarmte. Naast besparing op
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-58.jpg?height=647&width=812&top_left_y=930&top_left_x=1005)

Figuur 5.6 Energieverbruik van datacenters, in vergelijking met dataverwerking en internetverkeer.
stroomverbruik (bijvoorbeeld door harde schijven te vervangen door solid state drives) wordt ook gekeken of de restwarmte nuttig gebruikt kan worden.

### 5.11 Opdracht

Duurzaam maken van digitale technologie heeft veel te maken met het verbruik (en de gebruikte bronnen) van energie en grondstoffen en kringlopen.
a. Welke manieren kun jij bedenken om digitale technologie zelf duurzamer te maken? Je kunt kijken naar het verminderen van negatieve effecten, zoals hoog stroomverbruik, digitaal afval en opraken van grondstoffen. Hierbij kun je uitgaan van een voorbeeld, zoals een datacenter, je (school)computer, telefoon, minicomputers als Arduino en allerlei printers of digitaal gereedschap. Ook kun je je richten op de samenhang in het hele systeem.
b. Op welke manier draagt het gebruik van digitale technologie zelf bij aan duurzame ontwikkeling? Denk bijvoorbeeld aan online samenwerken, slim plannen van routes of apparaten die zichzelf kunnen uitschakelen als ze niet gebruikt worden.

### 5.5 Datacenters en 'Cloud'

De standaardopslag in datacenters is vaak de 3,5 inch harde schijf, waarvan er tienduizenden samengepakt zitten in rekken, die samen aangestuurd worden door server-computers. De processor kan wat meer verwerken dan in je computer thuis, maar de opbouw is hetzelfde. In plaats van één harde schijf heeft een server er tientallen. Ook thuis wordt data vaak apart van de computer opgeslagen op een zogenaamde NAS (Network Attached Storage), een kastje met een minicomputer, harde schijven en een netwerkaansluiting. Met wat handige software kan zo'n kastje ingericht worden om films, documenten en foto's op te slaan. Misschien wel het belangrijkste: door een serie harde schijven samen te voegen kan een array worden gemaakt, waarmee verlies van gegevens voorkomen wordt (in geval een harde schijf kapot gaat). Een systeem als RAID is een handige manier om met minder opslagruimte tóch van alle data een kopie te hebben.

### 5.12 Opdracht <br> Zoek uit wat RAID is en hoe het werkt. Welke vormen van gegevensbescherming kom je nog meer tegen?

Data redundancy, ofwel voorkomen van dataverlies als er iets stuk gaat, is belangrijk voor veiligheid van data. Minstens zo belangrijk is het voorkomen van diefstal, brand, stroomuitval en andere zaken waardoor data onbereikbaar wordt. Veel bedrijven zijn volledig afhankelijk van goed werkende servers die constant beschikbaar zijn. Een hokje met computers in een bedrijfspand is niet handig en het risico van uitval of dataverlies door calamiteiten is te groot. Vandaar dat bedrijven hun computers en schijven het liefst in een veilige en optimale omgeving zetten: datacenters.

### 5.6 Beveiliging

Het sturen van kleine datapakketjes van en naar aparte computers is probleemloos als iedere computer op het internet netjes doet wat de bedoeling is. Helaas is de wereld niet zo eerlijk. Pakketjes worden onderschept en gelezen, je krijgt pakketjes aangeboden die schadelijk zijn en ga zo maar door. Via internet kan informatie uit een computer gelezen en gewijzigd worden.

We zijn zó afhankelijk van goed werkende computers, die onderling veilig data kunnen uitwisselen, dat beveiliging misschien wel het meest belangrijke onderwerp in de IT-wereld is. Hoe zorg je voor veilige computers?

### 5.13 Vraag ```{exercise}

``` <br> Je gebruikt op je computer en telefoon verschillende vormen van beveiliging. Welke? Noem er tenminste drie.

## Poorten

Zoals een gebouw meerdere deuren heeft, geldt dat ook voor een router. Routers en computers beschikken over poorten. Daardoor kunnen datapakketjes intern precies afgeleverd worden. Pakketjes voor de webserver gaan via een standaard poort (bijvoorbeeld 72), dat hoeft niet in het pakketje beschreven te zijn. Maar als een server niet alle pakketjes wil hebben of heel nauwkeurig alleen van één computer de pakketjes wil doorgeven, wordt gewerkt met lijstjes afzenders en poortnummers. lets als 19.02.202.10:5002 is een IP adres en een poortnummer. Je moet dus vertellen waar je pakketje terecht moet komen. Dat is een van de vormen om internetverkeer te beveiligen. Je kent zelf wel de gebruikersnaam-wachtwoord toegang. Een poort maakt het iets veiliger. Als je ook nog tevoren hebt afgesproken welke computers contact met elkaar mogen hebben (en de webserver kent jouw computer IP), wordt het nog wat meer beveiligd.

Wanneer je pakketjes, voordat ze verstuurd worden, door elkaar schudt (versleutelen, encryptie) en bij de ontvanger weer sorteert (met dezelfde sleutel), kun je informatie nog een stapje veiliger versturen. Het is belangrijk dat verzender en ontvanger hebben afgesproken welke sleutel ze gebruiken (maar uiteraard de sleutel niet in het pakketje verstoppen).

Voor de beveiliging wordt veel kennis van wiskunde gebruikt. Priemgetallen, reeksen willekeurige getallen, wachtwoordregels of datacorrectie zijn veelgebruikte methodes. Bijvoorbeeld: een controlegetal de som van alle getallen in de reeks moet even zijn. Als dat niet zo is, wordt de controlebit 1, anders 0 . Ook hier kun je je met vervolgmodules uitgebreid in verdiepen (zie hoofdstuk $8)$.

## Hacken en cyberaanvallen

Binnendringen van een computer of webserver betekent dat je door de beveiliging moet zien te komen. Daarvoor moet je een heleboel informatie hebben. Een gebruikersnaam, het wachtwoord, het juiste veiligheidscertificaat, juiste IP adres, encryptiesleutel: je kunt het heel moeilijk maken om binnen te komen. Een moeilijk te raden wachtwoord helpt. Bedenk dat hackers niet altijd zelf wachtwoorden gaan intypen. Ze hebben daarvoor een programma dat gebruik maakt van allerlei lijsten. Uit een woordenboek geplukt, willekeurig samengesteld of gejat uit een slecht beveiligde database of 'eerlijk' gekocht op een criminele marktplaats (dark web).

Maar: snelle computers kunnen ook zelf wachtwoorden samenstellen en uitproberen.
Wachtwoorden van meerdere karakters kunnen in heel korte tijd gemaakt en uitgeprobeerd worden. Hoe langer het wachtwoord, hoe langer de computer er over doet en hoe lastiger het wordt. Een slecht beveiligd achterdeurtje kan zo de toegang tot belangrijke informatie zijn. Apparaten die je met internet verbindt (slimme thermostaat, webcam, koelkast) zijn heel vaak voorzien van een simpel te raden of standaard wachtwoord. Hackers zoeken vaak naar dit soort apparaten om je netwerk binnen te komen. Immers: het apparaat heeft een IP-adres en is daarmee te vinden voor computers. Via zo'n apparaat kun je andere apparaten in het netwerk bereiken: je bent binnen via de achterdeur.

### 5.14 Opdracht: Sterke wachtwoorden <br> Wachtwoorden bestaan meestal uit de 256 verschillende ASCII tekens (letters, cijfers, leestekens).

a. Als een wachtwoord 5 tekens lang is, hoeveel verschillende wachtwoorden kun je dan vormen? Bereken dit ook voor een lengte van 10 tekens.
b. Stel: een vlotte hack-computer kan 1 wachtwoord per seconde maken en uitproberen. Hoe lang doet deze dan over het hacken van jouw mailbox?

Via de voordeur binnenkomen gebeurt ook vaker dan je zou willen. Een bericht met een bijlage of een link die je opent, kan een pakketje afleveren met gevaarlijke software: een virus of gijzelsoftware. De software kan in je telefoon of computer informatie zoeken en doorsturen (bijvoorbeeld inlog van je bankrekening) of alle bestanden blokkeren (en tegen betaling weer vrijgeven, ransomware).

### 5.15 Opdracht

Zoek op internet tenminste twee voorbeelden van hacken, falende beveiliging of dreiging van cyberterreur. Waar gaat het mis in die situatie, wanneer die beveiliging niet goed is?

## Routers en beveiliging

Routers en hubs zijn ook kleine computers met chips en software en met algoritmen die door mensen geprogrammeerd zijn. Het netjes doorsturen van pakketjes, zonder ongeVraag ```{exercise}

```d kopiëen elders heen te sturen, is iets wat je van een router verwacht. Maar het is niet ondenkbaar dat de chips waar de computer in de router mee gemaakt is, al van zichzelf schakelingen hebben die gemaakt zijn om pakketjes te kopiëren en ook naar een ander adres te sturen. De schakelingen in de chips zijn zo ingewikkeld, dat het niet eens hoeft op te vallen. Intussen doet de router andere dingen dan de bouwer van het apparaat bedoelt, alleen al doordat de chips die geplaatst zijn anders werken of méér doen, dan in de specificatie staat (wat ze volgens de beschrijving zouden moeten doen).

Je kunt dit zien als valsspelende postbodes die brieven onderweg kopiëren of verwisselen en pas daarna bezorgen. We moeten vertrouwen op wat de chipfabrikant levert. Als de apparaten ook niet door jezelf gemaakt worden, is het helemaal lastig om exact te controleren wat er allemaal in zit.

In de tech-industrie is het maken van chips en apparatuur op een paar plekken in de wereld gecentraliseerd. Het allergrootste deel van de spullen wordt in Azië in elkaar gezet, ondanks dat het om merken uit Amerika of Japan gaat. Een monopolie op de fabricage én de grondstoffen daarvoor maakt ons allemaal uiterst afhankelijk en daarmee ook de mogelijke spionage die ermee gepaard gaan.

Het nieuwe 5G netwerk Vraag ```{exercise}

```t om heel veel nieuwe apparatuur: 5G zenders en snelle netwerkapparatur om die enorme datastromen (in datapakketjes) goed te kunnen vervoeren. Allerlei bedrijven hebben daar apparatur voor ontwikkeld. Maar de bedrijven die eerder deze apparatur leverden, beschikken niet meer over de snelste technologie en kunnen de slag verliezen van nieuwe aanbieders uit Azië. Helaas is daarvan niet duidelijk of er in de apparatuur ook spionagetechnologie is ingebouwd. Vandaar dat bepaalde aanbieders geweerd worden uit de kern van onze data-infrastructuur.

### 5.16 Opdracht <br> Probeer te achterhalen welke verdenkingen tegen aanbieders van 5G-technologie er zijn en welke rol dat speelt in de besluitvorming in Nederland.

### 5.7 Keuzeopdrachten

## a. Kleine arduino's maken samen big data

Fijnstof, partikels in de lucht van 1 tot 500 nm , kunnen met een fijnstofsensor gemeten worden. Je moet denken aan roetdeeltjes uit auto's of vliegtuigen of deeltjes uit de rook van een fabriek. Hoewel stuifmeel (pollen) er niet bij hoort, is dat ook iets dat in de lucht zweeft en door ons ingeademd wordt. De vervolgmodule Fijnstof gaat hier in detail op in.

De Arduino die hiervoor gebruikt wordt, meet via de fijnstofsensor en geeft data draadloos door via het Internet of Things op het 2G netwerk. De hoeveelheid data van één sensor gaat nog wel, maar honderden over het hele land leveren een aardige massa data op. Om daar iets aan te hebben, moet je de data voorzien van gegevens over de locatie, tijdstip, structuur enzovoort en netjes ordenen in een database. Als die metadata in orde is, kun je de gegevens uit de database lezen en bijvoorbeeld combineren met gegevens van een digitale kaart. Je kunt dan een nieuw plaatje berekenen waarop de fijnstofwaarde in ons land op een bepaald moment te zien zijn. Als dat allemaal via een website te raadplegen is, moet de webserver deze data van verschillende bronnen ophalen en combineren. Kijk op www.rivm.nl/fijnstofmeting en globe.nl voor meer informatie.

## b. Je eigen Arduino meetproject.

Arduino is prima geschikt om metingen op te slaan en door te sturen. De thermometer die je in H4 gemaakt hebt, kun je voorzien van opslag (kaartje) of draadloze verbinding (wifi, bluetooth, LORAWAN). Zoek op sites van Arduino-spullen wat je hiervoor nodig hebt. Wellicht zijn die spullen ook op school beschikbaar. Vraag ```{exercise}

``` gerust aan je docent of TOA!

Voorzie je Arduino-thermometer van een manier om de gemeten data te kunnen opslaan of versturen. Zorg dat de Arduino stroom krijgt uit een batterij.

- Opslaan: voorzie je Arduino van een klok en een opslagmedium, zoals SD-kaartje
- Versturen: voorzie je Arduino van een klok en wifi of bluetooth

Zoek de juiste drivers en herschrijf de sketch voor je uitgebreide Arduino thermometer.
Gebruik je device om gedurende een aantal uren temperatuur te meten. Temperatuur in een klaslokaal of je eigen lichaamstemperatuur bij het sporten of slapen. Bij de laatste twee situaties moet je ook nadenken hoe je de sensor op een goede manier met je lichaam kunt verbinden. De opdracht met Q-strip (H7) geeft ook een opstap naar het zelf maken van een vochtsensor. Gebruik die kennis om een portable device te maken waarmee je tijdens het sporten het zweten kunt meten.
https://www.arduino.cc/en/Guide/ArduinoUnoWiFiRev2
https://www.arduino.cc/en/Reference/WiFiNINA
https://store.arduino.cc/explore-iot-kit

## c. Satellieten en informatie over de aarde (GIS)

In bijlage 2 in de moduledatabase staat een opdracht over de digitale wereld achter aardobservatiesatellieten. Beelden die Landsat dagelijks maakt zijn via internet te bekijken, gecombineerd met geoinformatie (GIS). Je kunt zo de actuele situatie en verandering in gebieden op aarde onderzoeken. Ook Sentinel levert interessante informatie op. Je maakt kennis met databases en technieken om data uit allerlei bronnen overzichtelijk te presenteren.

## d. Verder te verkennen / te onderzoeken toepassingen

Er is veel aan de orde gekomen in dit hoofdstuk, maar niet zo uitgebreid. Er valt nog veel te ontdekken. Verdiep je in één van onderstaande thema's. Met de kennis van Arduino of andere platforms kun je zelf ook aan de slag om met dit thema iets te bouwen.
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-63.jpg?height=861&width=618&top_left_y=232&top_left_x=1207)

Figuur 5.7 Landsat satelliet die dagelijks honderden foto's van het aardoppervlak maakt

Maak daarvan een presentatie, informatieve poster of een schriftelijk verslag.

- 5 G communicatie
- Glasvezel en optische communicatie
- Een digitaal geheugen
- Datacenter: hoe is dat ingericht
- Telefonie, videobellen
- Streaming media
- LORA netwerken


## 6 Uitvoer: de actuator

![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-64.jpg?height=1171&width=1554&top_left_y=314&top_left_x=237)

## Leerdoelen

Kennis
6.1 Je kunt uitleggen dat digitale systemen invloed kunnen hebben op hun omgeving door middel van actuatoren
6.2 Je kunt uitleggen dat actuatoren zoals lampjes, speakers, motoren, RF zenders, servomotoren in veel verschillende digitale systemen voorkomen en dat je die (relatief) eenvoudig zelf kunt bouwen

## Vaardigheden

6.3 Je hebt ervaren dat je in je programmeercode in je digitale systeem soms bepaalde bibliotheken moet gebruiken om actuatoren te kunnen gebruiken
6.4 Je hebt ervaren dat je voor het aansturen en monteren van actuatoren online veel informatie kunt vinden op websites als stackoverflow en reddit.
6.5 Je hebt kennisgemaakt met het aansturen van actuatoren en dat dit gevolgen heeft voor het stroomverbruik van je digitale systeem en dat ontwerpkeuzes dus invloed hebben op de duurzaamheid van je systeem
6.6 Je hebt ontdekt hoe goed jouw actuatoren functioneren en hun omgeving beïnvloeden en kunt beoordelen of jouw digitale systeem voldoet aan de ontwerpeisen die je hebt gesteld.

### 6.1 Invloed op de omgeving uitoefenen

Aan digitale apparaten hebben we weinig als ze niets in buitenwereld kunnen veranderen. Daar horen jij en ik ook bij. Daarom heeft een digitaal apparaat onderdelen die kunnen bewegen, geluid maken of licht geven: de actuatoren. Soms zijn dat onderdeeltjes die al verwerkt zijn op een chip of printplaatje, zoals een lichtgevende diode (LED) die aangaat als de chip stroom krijgt, zodat we daaraan kunnen zien of het apparaat 'aan' staat of dat er data ontvangen of weggesturd wordt.

Een digitaal systeem zonder actuatoren kan uiteindelijk niet communiceren of dingen doen. Pixels op een scherm aan- of uitschakelen is een manier van communiceren. Een triltoon van je mobiel is eigenlijk een klein motortje dat even aangaat. Zo zijn er allerlei dingen bedacht om licht, geluid of beweging te maken. Uiteindelijk gebeurt dat bijna altijd door elektrische spanning aan of uit te schakelen. Wat we als mensen met onze handen doen, laten we nu door machines uitvoeren.

Digitale actuatoren zijn verwerkt in de machine en worden door de processor(en) aangestuurd. Ze gebruiken informatie uit databestanden en input uit sensoren. Daarmee kunnen ze hun klus doen. Naast de actuatoren heeft een systeem ook veel sensoren die waarnemen wat het systeem zèlf doet en veranderingen in de fysische grootheden waarnemen in de omgeving van het systeem. Hierdoor kan het systeem terugkoppeling ontvangen en zichzelf bijsturen. Hoe ingewikkelder de omgeving en hoe minder voorspelbaar, hoe belangrijker het is om die terugkoppeling te gebruiken.

Maar bewegingen en verplaatsingen, zoals zelfrijdende auto's of robotarmen, vragen veel meer controle en waarneming, omdat de buitenwereld een stuk minder voorspelbaar is én omdat het apparaat zelf beweegt. Terugkoppeling is het gebruik van informatie over het effect om de handeling te kunnen bijsturen. Zelfsturende (autonome) systemen zijn heel ingewikkeld, omdat ze vol sensoren zitten om de terugkoppeling naar de actuatoren te kunnen uitvoeren.

### 6.1 Opdracht: Terugkoppeling

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

## Licht geven of selectief doorlaten

Met actuatoren die licht geven (LED) of blokkeren (vloeibare kristallen) als beeldelement (pixel) of kleurstof die zich verplaatst bouwen we de enorme variatie aan beeldschermen die we nu kennen. Als digitale data gebruikt wordt om beelden te maken wordt iedere pixel apart aangestuurd. Kleuren worden gemaakt door aparte pixels die rood, groen of blauw licht uitzenden. Er is digitale data nodig voor kleur en helderheid van de pixel én om te vertellen welke pixel die waarde moet krijgen (adres).

### 6.2 Opdracht <br> Kijk eens met een sterk vergrootglas naar het beeldscherm van je telefoon of computer. Hoe ziet dat er uit op een plek die 'wit' is? Wat zie je bij een plek die 'geel' is?

Een beeldscherm kan een matrix zijn van LED's (die zelf licht uitzenden), zoals in een OLED (Organische LED) scherm. Vloeibare kristallen (die licht doorlaten als ze spanning krijgen) vormen samen met een witte achtergrondverlichting een LCD (Liquid Cristal Display). TFT (Dunne Film Transistor) is een variant van LCD die transistoren heeft om de individuele pixels te kunnen schakelen. De verfijnde mogelijkheden om deze beeldschermen dun en flexibel te maken zorgt voor de ongekend grote beeldschermen met miljoenen pixels en kleuren en hoge snelheid.

Een digitale projector (beamer) heeft kleine, doorschijnende LCD beeldschermpjes voor de drie primaire kleuren rood, groen en blauw, met een heldere lamp erachter. Dit is steeds vaker een heldere LED, vandaar LED beamer. Ook de
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-66.jpg?height=255&width=256&top_left_y=929&top_left_x=1551)

Figuur 6.1 Uitvoeren: de actuator
bioscoop gebruikt tegenwoordig digitale projectoren.

### 6.3 Opdracht

Zoek eens uit hoe een digitale projector in elkaar zit.
Digitale data wordt gebruikt om LCD pixels te schakelen. Voor zowel LCD als LED pixels wordt de helderheid bepaald door de tijdsduur die de pixel doorschijnend is of aan staat. Dit gebeurt door Pulse Width Modulation. Als een lichtbron vaker dan 24 keer per seconde aan-uit gaat nemen onze ogen geen flikkering meer waar. Vandaar dat beeldschermen een verversingsfrequentie van 50 Hz of meer hebben. Toch waarderen onze ogen die flikkering niet altijd, vooral bij het lezen van beeldschermen. Onze ogen bewegen snel en trillen zelf ook. Het flikkeren van het beeldscherm kan ervoor zorgen dat de ogen precies in beweging zijn als het scherm wordt ververst en daardoor even het focuspunt kwijt zijn. Dat kan verklaren waardoor lezen van beeldschermen minder prettig is. Bovendien stralen beeldschermen (veel) licht uit, wat ook vermoeit.

Er zijn schermen die niet constant ververst worden, namelijk E-ink of electronisch papier. De zwarte korrels in de inkt verplaatsen zich als er spanning aan één kant wordt gezet. Als de spanning weg valt blijft de inkt op z'n plek, tot de spanning aan de andere kant van de pixel staat. Met de grootte en tijdsduur van de spanning kan de zwartheid van de pixel worden bepaald. Hiermee ontstaat een stabiele matrix van grijswaarden. Er is geen spanning nodig om het beeld te bewaren. Zo'n scherm verbruikt nauwelijks stroom, maar is ook heel traag en dus niet zo geschikt voor een computer, maar prima voor een E-reader. Met omgevingslicht is het scherm te lezen als papier, wat onze ogen zeer waarderen. Met een beetje achtergrondlicht zijn zulke schermen ook bruikbaar in het donker.

De digitale data moet vertellen of een pixel aan staat, in welke kleur en welke helderheid. Om dit mogelijk te maken moet ook bekend zijn waar de pixel zit. Goede beeldschermen hebben veel pixels, veel kleuren, snel schakelende pixels en een groot verschil tussen donker en licht (contrast).
Daarvoor is veel data nodig. Vooral bewegend beeld Vraag ```{exercise}

```t veel bandbreedte, om schermen te
kunnen aansturen. Door de snellere processoren, glasvezel en betere datacompressie lukt het beeld van hoge kwaliteit te transporteren én te tonen.

## Verplaatsen: motoren

![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-67.jpg?height=253&width=250&top_left_y=476&top_left_x=246)

Figuur 6.2 Digitaal - Analoog conversie

Een elektromotor zet stroom om in een draaibeweging. Het is prettig als je die draaiing onder controle kunt houden. Daar zijn grofweg twee manieren voor. De ene manier is dat er aan de motor een sensor komt te zitten, die vertelt in welke stand de motor staat of hoeveel omwentelingen de motor heeft gedaan.

De andere manier is het gebruik van een stappenmotor. Een stroompuls zorgt dat de motor één stapje verplaatst, bijvoorbeeld 2 graden (van de 360). Met het aantal stroompulsjes is te bepalen hoever de motor draait. Het digitale signaal wordt zo rechtstreeks vertaald in een kleine verplaatsing. Met tandwieltjes en een aandrijfriem of een schroefdraad kan een draaiende beweging ook omgezet worden in een lineaire beweging. Je vindt dit bijvoorbeeld in printers (zowel 3D als inktjet). Ook de motortjes in een harde schijf zijn actuatoren die aangestuurd moet worden.

## Geluid maken

Een korte spanning kan ook weer gebruikt worden om een elektromagneet te activeren. Als je dit snel doet, kan daarmee een snelle trilling (en dus geluid) ontstaan. Een trage trilling kan gebruikt worden als trilfunctie in je mobiel. Voor kwalitatief goed geluid moet het digitale signaal netjes worden omgerekend naar een continu variërende spanning met veel meer vermogen. Daarvoor dient de digitaal-analoog convertor in een (digitale) audioversterker of de aansturing van een lijnuitgang of hoofdtelefoon-uitgang.

## Electromagnetische straling maken

De digitale pulsen kunnen ook gebruikt worden in een radiozender. Een spoel zendt radiogolven uit als er elektrische pulsen binnenkomen. De radiogolven van precies vastgelegde golflengte kunnen als Wifi of Bluetooth signaal opgevangen worden door antennes (ook sensoren).

## Printen

Inkt of poeder (in de basiskleuren CMYK: cyaan (blauwig), magenta (rozerood), yellow (geel) en black (zwart)) vormen de basis van de vierkleurendruk, inkjetprinters en laserprinters. Motoren verplaatsen het papier en de inktkop. Laserbundels zorgen voor een electrische lading op een metalen rol, waardoor kleurstofpoeder (toner) vastgehouden en daarna op papier gedrukt kan worden. Na verhitten zit de toner vast op het papier. Inktjetprinters werken met vloeibare inkt die uit microdunne kanaaltjes gespoten wordt. Bij een inktjetprinter bepaalt Piezo-materiaal (dat uitzet als er spanning op staat) of de inkt uit het kanaaltje kan. Een digitaal bestand vertelt wanneer, waar en hoeveel inktdruppeltjes van elke kleur boven het papier afgeschoten moet worden.

[^1]
### 6.5 Opdracht

Onderzoek welke data een inkjet- of laserprinter nodig heeft om een afdruk te kunnen maken en hoe een printer dat voor elkaar krijgt. Welke actuatoren zitten er in de printer en hoe worden die aangestuurd? Heeft een printer ook sensoren, processoren, dataopslag en transport? Gebruik het analyseschema (leeg schema achterin de lesmodule of verkrijgbaar als los werkblad) om je bevindingen overzichtelijk te maken. Welke verschillen kun je noemen tussen de inkjetprinter, laserprinter en thermische printer?
6.6 Opdracht: Andere digitale maakapparaten

Een 3D printer, plotter, CNC frees, digitale snijmachine of een lasersnijder werken technisch niet heel veel anders dan een inkjetprinter. Het belangrijkste verschil is het werktuig: een spuitmond voor vloeibaar materiaal (3D printer), een pen, een ronddraaiende beitel, een mesje of een krachtige laserbundel die papier, metaal, hout of kunststof kan bewerken. Vind een aantal voorbeelden op het internet. Voor welke toepassingen wordt het apparaat gebruikt? Maak hiervan een overzichtelijke tabel.
Kies één van deze apparaten uit en zoek verder uit hoe deze (technisch) werkt. Onderzoek ook op welke manier zulke apparaten aangestuurd worden (hoe de data er uit ziet als ze hun werk doen). Kijk of er één of meer van deze apparaten op school aanwezig zijn en Vraag ```{exercise}

``` om uitleg daarover. Een Fablab of Makerspace heeft zulk digitaal maakgereedschap zeker in huis.

## Andere computers als actuator: datasystemen

Wanneer digitale apparaten data aan elkaar doorgeven, kunnen uitgebreide systemen worden gebouwd waarin gegevens van talloze sensoren gebruikt worden om data te verzamelen. Deze data worden gebruikt om op allerlei plekken informatie te laten zien. Een apparaat kan dan één stukje van het totale proces uitvoeren. Het ene apparaat doet bijvoorbeeld de omzetting van een temperatuur naar een digitaal signaal. Een ander apparaat verzamelt de gegevens van de meetapparatuur en kan de gegevens opslaan in een database. Een computer heeft dan zelf geen beeldscherm of printer nodig en kan toch invloed hebben op de buitenwereld.

Computers kunnen de gegevens uit de database lezen, en via programma's (algoritmen) nuttige informatie uit de database berekenen. Een klimaatwetenschapper kan dit gebruiken om temperatuurstijging uit lange termijn weergegevens te berekenen. De uitvoer van de gegevens gebeurt dan pas als de data in een lijst of als grafiek op een beeldscherm getoond worden. De bits in de data zijn dan al talloze keren tussen processor en opslag uitgewisseld.

## Voor de makers

Ook voor actuatoren moet code gebruikt worden om ze goed aan te sturen. Dit soort informatie wordt gedeeld via online platformen. Als je Arduino-actuatoren gebruikt, zijn ze te vinden via Arduino.cc of Tinkercad of het platform dat bij je device hoort (micro:bit, Raspberry Pi of M-bot).

De professional kijkt op
https://stackoverflow.com of https://www.reddit.com. Als je digitale ontwerpen (zoals 3D tekeningen) maakt, kun je die bijvoorbeeld op github.com delen. Er is véél meer dan we hier kunnen noemen. Via de leerlingensite is ook e.e.a. te vinden.

### 6.7 Opdracht: verdieping

Op welke manier worden digitale motoren aangestuurd? 3D-Printbestanden, snijfiles, robotprogramma's, stuurprogramma's voor printer. Basisstructuur van een file, wat voor soort codering?

### 6.2 Mechatronica in bedrijf

Mechatronica is het gebied waar mechanica (werktuigen) en electronica (digitale technologie) elkaar ontmoeten. Slimme machines, robots, scanners: overal worden actuatoren gebruikt. Mechatronica is een uitgebreid terrein, want een digitaal systeem zonder actuatoren is uiteindelijk onbruikbaar. In Nederland wordt veel onderzocht en gemaakt voor of met de digitale technologie.

Opdracht 6.8: Kennismaken met bedrijven
Over diverse bedrijven zijn lesbrieven gemaakt om je een beeld te geven wat ze (met digitale technologie) doen. Deze kun je vinden op: http://www.brainport.nl/lesmateriaal. Kies één van de hieronder genoemde vier bedrijven en werk een gedeelte van de bijbehorende lesbrief uit (afhankelijk van je beginkennis). Je kunt uiteraard méér of andere kiezen. Overleg de keuzes met je docent.

1. ASML: hun chipmachines zijn de werkpaarden waarmee fabrikanten alle chips maken die in alle digitale apparatuur wordt toegepast. Het EUV licht wordt gemaakt met tindruppeltjes en een zware laser. Hoe gaat dat in zijn werk?
2. Vanderlande: wereldwijd worden in luchthavens en sorteercentra de lopende banden van Vanderlande gebruikt. Hoe in die systemen de digitale technologie een rol speelt ontdek je in de lesbrief.
3. DAF: DAF werkt aan zelfrijdende vrachtwagens. Kunstmatige intelligentie moet helpen om de vrachtwagen de juiste koers te laten rijden. Maar hoe gaat dat in zijn werk?
4. Philips: Bij Philips wordt medische apparatuur gemaakt, waaronder MRI scanners. Het herkennen van beelden uit deze scanners is een vak apart waar kunstmatige intelligentie welkom is. Hoe gaat dat in zijn werk?

### 6.9 Opdracht: Actuatoren in context?

Er zijn talloze andere, aansprekende voorbeelden van de rol van actuatoren bij digitale technologie. Ze zijn de moeite waard om verder uit te zoeken. Kies één van onderstaande onderwerpen om je verder in te verdiepen. Maak over het thema een stuk van maximaal twee pagina's (inclusief illustraties), dat je zou kunnen toevoegen aan deze module.

- Robotica (Boston Dynamics, zelfrijdende auto, drone, ...)
- Robotarm (voor operaties, inbrengen hersenimplantaat, lassen of montage)
- Het knuffelrobotje voor dementerenden
- Beeldschermen die zich aanpassen aan de lichtomstandigheden en de gebruiker
- Robotbeestje om gedrag op video vast te leggen (Pinguinrobot met camera) Planetearth.
- Rat met actuator in brein - aardbevingsgebieden doorzoeken
- Microscopen en 3D beeldvorming

Maakopdrachten op verschillende niveau's. Met een serie maakopdrachten kan telkens een nieuw aspect van digitaal maken ontdekt worden. Zoals: ledje laten branden (1. sensoren), code aanpassen (2. data verwerken), draadloos aansturen (3. Datatransport), actuator laten werken (4. actuatoren). In hoofdstuk 7 zit een verdiepende opdracht met deze kennis.

### 6.3 Maakopdracht met Micro:bit, Arduino of Raspberry Pi.

### 6.10 Opdracht

In bijlage 3 in de moduledatabase wordt de NeoPixel beschreven. Ga daarmee aan de slag, en experimenteer met de mogelijkheden die zulke LEDs bieden.
![](https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-70.jpg?height=189&width=1444&top_left_y=819&top_left_x=363)

Programmeer vervolgens de Arduino (of een ander device), zodat een serie NeoPixels gebruikt kunnen worden als mooie richtingaanwijzer voor een moderne auto (ledjes die van links naar rechts oranje oplichten). De richtingaanwijzers aan de achterzijde zijn daarna uit, aan de voorzijde geven ze na gebruik continu wit licht geven als dagrijverlichting. Maak voor beide situaties een programma.

### 6.11 Keuzeopdracht

Er zijn talloze actuatoren en meer dan genoeg interessante systemen om te onderzoeken of te bouwen. Hieronder een aantal voorbeelden. Op de leerlingensite staan wat tips om mee te beginnen. Vraag ```{exercise}

``` je docent / TOA welke materialen er op school beschikbaar zijn:

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

