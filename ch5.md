---
exports: 
    - format: pdf
      template: curvenote
      output: exports/ch5.pdf  
downloads:
    - file: exports/ch5.pdf
    - file: ch5.md
---

## Data opslag en transport


```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-51.jpg?height=1195&width=1580&top_left_y=339&top_left_x=227
:width: 70%
:name: fig_


```

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

```{exercise}
Zoek enkele voorbeelden van digitale codes die op spullen, sites of drukwerk te vinden zijn. Welke soorten codes kun je terugvinden?
``` 

Met een rijtje van 2 binaire waarden kun je 4 combinaties maken: 00, 01, 10 en 11. Dat is $2^{2}$. Een rijtjes van 8 bits (een byte) wordt veel gebruikt. Dit geeft $2^{8}$ combinaties, ofwel 256. Met langere reeksen kunnen meer verschillende waarden worden gecodeerd. De TMP-36 temperatuursensor stuurt een analoog signaal naar de Arduino, dat omgezet wordt in discrete (stapgewijze) decimale waarden 0 tot 1024. (Ga eens na hoeveel bits er voor elke waarde nodig zijn).


```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-52.jpg?height=284&width=763&top_left_y=1494&top_left_x=992
:width: 70%
:name: fig_

Een byte is uit een rijtje van 8 bits. Deze 24 bits zijn in 3 byte verdeeld. 8 bits geeft 256 combinaties.
```

Omzetting van analoog naar digitaal geeft wel wat verlies (immers: bij een reeks verschillende temperaturen geeft de sensor hetzelfde getal). Wanneer er eenmaal een discreet digitaal getal is kan dat goed behouden worden. Immers, een spanning van 3,4 of 5 volt is nog steeds 'hoog' en dus 1. Het maakt ook niet meer uit of dit nu via elektrische spanning, radiogolven of lichtpulsen verstuurd wordt. Data kan zo zonder verlies over lange afstanden worden vervoerd.

## Nauwkeurigheid

Precies meten van de temperatuur, bijvoorbeeld met twee cijfers achter de komma, betekent dat je digitale sensor voldoende stapjes moet kunnen weergeven. Een 8-bit temperatuursensor kan niet meer dan 256 verschillende waarden weergeven. Voor een bereik van 0 en $100^{\circ} \mathrm{C}$ zijn er iets meer dan 2 waarden per graad beschikbaar. Dat is onvoldoende. Je moet dan bijvoorbeeld een 16-bit sensor gebruiken, die 65.536 waarden kan onderscheiden. Hoe meer bits, hoe nauwkeuriger er te
digitaliseren is. Maar ook: hoe meer rekenkracht de processor moeten hebben om een signaal te verwerken. Het verzamelen van data betekent dat je bedenkt: hoe nauwkeurig en hoe vaak wil ik meten?

```{exercise}
Hoeveel data produceert een 16-bit sensor in één dag? Geef je antwoord in Mb.
```

## Data bewerken, opslaan en transporteren


```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-53.jpg?height=244&width=258&top_left_y=666&top_left_x=179
:width: 70%
:name: fig_

Opslag en uitvoer van digitaal signaal
```

```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-53.jpg?height=281&width=278&top_left_y=1093&top_left_x=158
:width: 70%
:name: fig_

Verwerking van digitale gegevens in de processor
```



Het elke seconde uitlezen van de 8-bit sensor levert 1 byte data per seconde, 300 byte in 5 minuten en 86 kilobyte per dag. Dat zijn relatief bescheiden hoeveelheden. Een 5 Megapixel camerasensor levert plaatjes van vele megabytes ( $\mathrm{Mb}, 10^{6}$ ) waar datatransport en opslag in de orde van gigabyte $\left(\mathrm{Gb}, 10^{9}\right.$ ) of terabyte ( Tb , $10^{12}$ ) voor nodig is. Wanneer sensoren aan staan, produceren ze data. Hoe vaak je die data ophaalt en verwerkt bepaal je in de software (hoe nauwkeurig en hoe vaak meet je?). Bij het programmeren daarvan moet je na denken over de hoeveelheid data die nodig is en dus de datastroom die ontstaat. Hoe meer data verplaatst moet worden, hoe groter de bandbreedte moet zijn om dat snel voor elkaar te krijgen. De bandbreedte wordt meestal uitgedrukt in bits per second (bps). Ook compressie van data is belangrijk. Je vervangt een reeks dezelfde waarden door een (veel kortere) reeks. Daarin staat één keer de oorspronkelijke waarde, hoe vaak die herhaald is en waar het begin en einde zijn. Dat gebeurt met een compressiealgoritme. Sommige algoritmes gooien daarmee ook informatie weg. Bij foto's ken je dat als .jpg, bij video als .mp4 en bij geluid als .mp3. Andere algoritmes zorgen dat de oorspronkelijke informatie te herstellen is: 'lossless' compressie. Hier is veel meer over te leren in andere modules (zie hoofdstuk 8).

## Geheugen

Digitale systemen gebruiken geheugenchips en opslagmedia (harddisk, optische schijven, solid state disks of flash geheugenkaarten) om bits weg te schrijven. Een geheugen in de computer werkt met transistoren (schakelaars) of condensatoren. Een aantal transistoren kunnen samen zo verbonden worden dat bij de uitgang van de schakeling spanning blijft staan (1) of juist niet (0). Deze flip-flop schakeling vormt dan een geheugencel. Met een paar miljard van deze schakelingen bouw je een geheugenchip. Dit kan ook met condensatoren. Als je daar elektronen in opsluit, blijft de spanning hoog (1). Een lege condensator heeft dan de waarde (0). Elektronen lopen langzaam uit de condensator, zodat de geheugenchip telkens moet controleren (actief, dynamisch) of de spanning hoog genoeg is (en voegt zo nodig lading toe). Het geheugen is wel supersnel, waardoor dit gebruikt wordt als werkgeheugen (Dynamic RAM).

```{exercise}

a. Test eens uit wat de bandbreedte (bandwidth) is van de internetverbinding van een mobiel en een laptop (via Wifi én met een bekabelde Ethernet aansluiting). Ga daarvoor met de mobiel of laptop naar de website speedtest.net.

b. Vergelijk de bandbreedtes met elkaar. Verklaar het (eventuele) verschil dat je ziet.
```

In de computerwereld draait alles om data, datatransport en dataopslag. Aan alleen maar een reeks enen en nullen heb je niet zoveel. De processor moet weten waar de reeks enen en nullen vandaan komt, wat er mee moet gebeuren en waar die na bewerking naartoe moet. Daarom is het belangrijk dat bekend is waar die data over gaat. We noemen dit metadata. Vergelijk het met de informatie:
'ja'. Daar heb je weinig aan als je de Vraag en de context niet kent. Het antwoord wordt anders als je de Vraag weet: wil je suiker in je thee? Een database bevat tabellen met data én metadata. Daar kun je in zoeken, data uit lezen, bijschrijven en wissen.

Een bestand (file) heeft allerlei informatie dat vertelt waar het bestand over gaat en hoe het in elkaar zit. Vaak zijn files zo groot dat ze in blokjes moeten worden opgeslagen en bewerkt. De processor heeft van elk blokje een adres en zet dat in het geheugen. Blokjes worden van het ene naar het andere deel van het geheugen verplaatst of in de processor bewerkt en weer opgeslagen. De harde schijf gebruikt ook adressen om bij te houden waar ieder datablokje is opgeslagen. Op een harde schijf hoeven de blokjes van één file niet achter elkaar te staan. De schijf zet ze neer waar ruimte is. De schijf moet dus precies bijhouden welke datablokjes samen het digitale bestand vormen dat je hebt opgeslagen.

De computer schrijft en leest de hele tijd van werkgeheugen naar massageheugen (harde schijf of ssd) of stuurt en ontvangt de blokjes data over de netwerkverbinding en het internet. Bij het heen en weer sturen over het netwerk moet er nóg meer informatie toegevoegd worden om het datablokje op de juiste plek te krijgen. Voor die taken heeft de computer een netwerkkaart of wifi-controller. Je mobiel gebruikt daar een wifi, bluetooth of $4 / 5 \mathrm{G}$ controller voor. Die is in staat de data heen en weer te sturen naar het netwerkknooppunt (router, switch) en vandaar naar het internet.

Voor het heen-en-weer sturen van datapakketjes moeten computers verbinding met elkaar hebben, met koperdraad, glasvezel of draadloos.

```{exercise}
Hoeveel opslag heeft jouw mobiel? Maak onderscheid tussen werkgeheugen (RAM) en het
opslag (ssd) geheugen. Hoe zit dat met je computer?
```


## Verbindingen

**Metaaldraad**

Elektriciteit loopt via metaal en dat is dus ook de manier om elektrische digitale signalen te vervoeren. De snelheid waarmee dat gebeurt is pakweg $0,1 \mathrm{x}$ de lichtsnelheid. Een elektrisch signaal verzwakt over grotere afstanden, waardoor er versterkers nodig zijn. De standaard voor digitale elektrische signalen is de UTP-kabel, die bijvoorbeeld ook gebruikt wordt om in huis router en computer te koppelen.

```{exercise}
Hoe werkt die UTP kabel? Waarom heeft die meerdere draden?
```


## Sneller: glasvezel

Het sneller en over langere afstanden transporteren van digitale informatie gaat tegenwoordig via glasvezel. Hoewel met een iets lagere snelheid dan lichtsnelheid in vacuüm, is het transport wel sneller dan in metaal. Er is bovendien minder verzwakking van het signaal over langere afstand.

[^0]Voor de glasvezel worden lasers gebruikt (die een digitaal signaal omzetten in lichtpulsen) en fotodiodes (die het digitale lichtsignaal weer in stroom omzetten). De lasers kunnen heel klein zijn, en zelfs als onderdeel van een computerchip worden gebouwd. Daardoor lukt het ook om tussen computers de glasvezel voor communicatie in te zetten. Een stap verder is de ontwikkeling van een optische computer waar alle bewerkingen met licht gebeuren.

```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-55.jpg?height=772&width=1558&top_left_y=522&top_left_x=229
:width: 70%
:name: fig_

 Kwaliteit van datatransport met licht in glasvezels
```

Meer bronnen over glasvezel:
https://www.deingenieur.nl/artikel/nederlandse-bedrijven-pionieren-met-chips-op-licht https://www.deingenieur.nl/artikel/fotonica-sector-kriigt-duw-in-rug
https://www.deingenieur.nl/artikel/doorbraak-silicium-zendt-licht-uit
https://nl.wikipedia.org/wiki/Glasvezel
https://en.wikipedia.org/wiki/Laser diode

## Nog sneller? Draadloos.

Wifi, bluetooth, mobiele data (3, 4 en $5 G$ ) of satellietcommunicatie werken met radiogolven die zich met lichtsnelheid verplaatsen. De omzetting van een digitaal signaal naar een radiogolf en terug kost tijd en rekenwerk, waardoor weer snelheid verloren gaat. Er zijn zendmasten en schotelantennes nodig, die weer met (glasvezel) kabels aan datacenters gekoppeld zijn.

```{exercise}

Er is veel te vinden over draadloze communicatie. Als je in een groepje werkt: kies per groepslid één van de technieken uit en verzamel daar informatie over. Maak daarvan een overzichtelijke tekening / kleine poster om uit te leggen hoe de techniek werkt. Geef informatie over snelheid, bandbreedte (hoeveel data per seconde) en afstand die overbrugd wordt. Hoe groot zijn zender en ontvanger van het signaal? Worden er gevaren of schadelijke effecten genoemd?
```

## Adresseren

Elke computer in een netwerk heeft een eigen adres: een toegewezen IP ( $v 4$ of v6) en een MAC (uniek apparaatnummer). Een datapakketje krijgt adressen mee: waar komt het vandaan (afzender IP) en waar moet het naartoe (ontvanger IP). Het internetprotocol (TCP/IP) beschrijft hoe pakketjes
over het netwerk vervoerd moeten worden. Andere protocollen (als http://) sturen de datapakketjes in de computer zelf naar de juiste plek (bijvoorbeeld de webbrowser).

Het eerste knooppunt leest het IP adres en bepaalt naar welk volgend punt het verstuurd wordt. Het eerste stukje van het adres ("niet mijn netwerk") is al voldoende om het door te sturen. Een netwerk in huis heeft vaak een IP-adres dat begint met 192. Dat betekent dat de router het pakketje niet naar buiten stuurt, maar in het eigen netwerk zoekt. Je internetrouter thuis heeft voor ieder apparaat een eigen laatste getal in de IP-reeks: bijvoorbeeld 192.168.2.0 voor de router en 192.168.2.12 voor jouw computer. De router die in huis staat, heeft een IP-adres voor binnen (LAN) én een voor buiten (WLAN). Als je een website bezoekt, gaat je browser data van een webserver ophalen. Je tikt een adres in, bijvoorbeeld https://www.verenigingnlt.nl. Met dat adres kun je nog niet de juiste server bereiken. Daarom gaat het pakketje eerst naar een DNS-server (dynamische naamserver), die van de website-naam een IP-adres maakt. Nu kan het verzoek (ophalen van de webpagina) bij de juiste webserver worden bezorgd. De webserver stuurt vervolgens pakketjes terug naar jouw computer. Op die route liggen allerlei tussenstations (knooppunten, hubs) die supersnel het IP-adres lezen en het pakketje doorsturen. Dat pakketjesverkeer gaat zo snel, dat je niet merkt dat de computers waar ze vandaan komen aan de andere kant van de wereld kunnen staan. Voor dat dataverkeer zijn overal ter wereld knooppunten en datacenters ingericht.

## Internet knooppunten

Het Internet Knooppunt Amsterdam, op de campus van de Universiteit van Amsterdam, was in de beginjaren van het Internet één van de zeven wereldwijde knooppunten (hubs). Nog steeds is het een van de grootste hubs in de wereld, mede doordat de belangrijkste telecommunicatiekabel tussen Europa en de VS bij Amsterdam uitkomt.
De basis van het vrij toegankelijke internet is het nauwkeurig zonder selectie doorgeven van de datapakketjes die verzonden worden. Veel landen respecteren die vrijheid niet en blokkeren (delen) van internetdiensten, sociale media of zoekmachines. Het komt er op neer dat de knooppunten in die landen selectief het verkeer van een deel van de IP-adressen niet doorlaten. Er zijn technieken als VPN om veilige verbindingen op te zetten, waarbij een apparaat voor de buitenwereld een ander IPadres toegekend krijgt. Een thuiscomputer kan op die manier een IP-adres krijgen alsof die bij een bedrijfsnetwerk hoort. Toegang tot andere apparatuur binnen het netwerk, zoals een printer of opslagservice, kan op die manier ook geregeld worden.

```{exercise}

Vraag aan je docent, TOA of ICT-beheerder of je op school kunt kijken waar de netwerkrouters en servers staan en hoe de dataopslag geregeld is.
```

## Datacenters

Voor alles wat je online met je mobiel doet zijn andere computers nodig. Ze worden 'servers' genoemd, omdat ze bedoeld zijn om jou van dienst te zijn: ze slaan jouw informatie op en sturen je de informatie die je wilt. Alle servers met opslagruimte van online diensten staan in honderden datacenters over de hele wereld.

```{exercise} 
Voor welke apps moet je online zijn? Welke data stuur je dan van je mobiel naar een datacenter en terug?
```

## Rondkijken in een datacenter

Direct naast het rekencentrum van de Universiteit van Amsterdam staat een groot datacenter van Equinix, met vele verdiepingen waar servers van allerlei bedrijven opgesteld zijn. Kijk hier voor een virtuele rondleiding door dat datacenter: https://equinix-cdn.s3.amazonaws.com/virtual-tours/Amsterdam%20AM4/index.htm.

Snelheid is alles in deze digitale wereld. Voor een webwinkel is het belangrijk dat bestellen en betalen zonder vertraging verloopt. In een datacenter kan een webwinkel zijn servers vlakbij die van een bank plaatsen. Uitwisselen van data tussen de servers gaat dan met zo min mogelijk vertraging. Grotere afstand betekent ook: schakelkastjes (hubs, switches) of andere servers en dus vertraging. Voor de bezoeker van de site betekent het een snelle afhandeling van opdrachten. Het is dus aantrekkelijk voor een bedrijf om haar servers ergens te plaatsen waar zoveel mogelijk connectiviteit is. In Nederland vind je deze connectiviteitsknooppunten in Amsterdam, maar ook in Rotterdam, Eindhoven en

## Digitale haven

Nederland is wereldwijd een belangrijke plek voor de digitale wereld. Een centrale verbinding in het Internet is de zeekabel tussen Europa en de Verenigde Staten. Die komt in Amsterdam binnen, onderin het rekencentrum van de universiteit van Amsterdam. Daar is de Amsterdam Internet Exchange, AMS-IX gevormd, één van de allereerste en belangrijkste knooppunten van het Internet. Vanaf Nederland wordt veel data getransporteerd naar plekken elders in Europa of de wereld. Om deze reden wordt het daarom ook wel een digitale haven of digitale mainport genoemd

Groningen.

```{exercise}
Noem een paar voorbeelden van webwinkels. Denk even terug aan je laatste online bestelling. Welke stappen (denk je) dat er zitten tussen de bestelknop en jouw digitale betaling zit (het moment dat het geld van je rekening af is)?
```



Veiligheid is ook alles in de digitale wereld. In een datacenter zijn de volgende zaken goed geregeld: constante voeding (stroom voor de servers en schijven, noodstroom als de netstroom uitvalt), koeling (een constante temperatuur rond de 20 graden), snelle verbindingen (glasvezels en korte afstanden tot andere servers) en een streng beveiligd gebouw (mensen kunnen er niet zomaar bij). Een datacenter biedt deze veilige voorziening en bedrijven kunnen daar hun computers neerzetten, door ruimte in het datacenter te huren. Datacenters die ruimte verhuren aan klanten voor het plaatsen van servers, worden ook wel colocatie datacenters genoemd. Weten hoe een datacenter werkt? Zie https://www.dutchdatacenters.nl/datacenters/hoe-werkt-een-datacenter/

Sommige techbedrijven hebben zoveel servers dat ze eigen datacenters bouwen, denk aan Google en Microsoft. Dit soort datacenters worden hyperscale datacenters genoemd. Wanneer een programma op een computer in een datacenter draait en de data daar ook staan, dan hoef je op je eigen computer alleen maar wat instructies naar de computer van het datacenter te sturen. Je eigen computer hoeft dan niets op te slaan of te bewerken. Je kunt op die manier je telefoon gebruiken om allerlei plaatjes te bewerken, omdat het echte rekenwerk in het datacenter gebeurt. Dit werken in de 'cloud' gebeurt niet in de wolken, maar gewoon in een gebouw zonder ramen, ergens op een industrieterrein, een datacenter dus.

## Elektriciteit

Datacenters gebruiken veel stroom. Zoveel zelfs dat ze windmolenparken in de buurt hebben om groene stroom te leveren. Tegelijkertijd zien we dat het energieverbruik van datacenters al tien jaar stabiel is, terwijl het internetverkeer en de werkbelasting voor de datacenters enorm gestegen zijn. Dit is voor een belangrijk deel te danken aan het samenvoegen van kleine inefficiënte serverruimtes die bedrijven zelf ingericht hadden, tot professionele, grote en efficiëntere datacenters die we nu kennen. Ook het gebruik van meer Cloud-applicaties heeft bijgedragen aan het gelijk blijven van het stroomverbruik. Het restproduct van stroomverbruik in een datacenter is restwarmte. Naast besparing op

```{figure} https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-58.jpg?height=647&width=812&top_left_y=930&top_left_x=1005
:width: 70%
:name: fig_

Energieverbruik van datacenters, in vergelijking met dataverwerking en internetverkeer.
stroomverbruik (bijvoorbeeld door harde schijven te vervangen door solid state drives) wordt ook gekeken of de restwarmte nuttig gebruikt kan worden.
```

```{exercise}

Duurzaam maken van digitale technologie heeft veel te maken met het verbruik (en de gebruikte bronnen) van energie en grondstoffen en kringlopen.

a. Welke manieren kun jij bedenken om digitale technologie zelf duurzamer te maken? Je kunt kijken naar het verminderen van negatieve effecten, zoals hoog stroomverbruik, digitaal afval en opraken van grondstoffen. Hierbij kun je uitgaan van een voorbeeld, zoals een datacenter, je (school)computer, telefoon, minicomputers als Arduino en allerlei printers of digitaal gereedschap. Ook kun je je richten op de samenhang in het hele systeem.

b. Op welke manier draagt het gebruik van digitale technologie zelf bij aan duurzame ontwikkeling? Denk bijvoorbeeld aan online samenwerken, slim plannen van routes of apparaten die zichzelf kunnen uitschakelen als ze niet gebruikt worden.
```

## Datacenters en 'Cloud'

De standaardopslag in datacenters is vaak de 3,5 inch harde schijf, waarvan er tienduizenden samengepakt zitten in rekken, die samen aangestuurd worden door server-computers. De processor kan wat meer verwerken dan in je computer thuis, maar de opbouw is hetzelfde. In plaats van één harde schijf heeft een server er tientallen. Ook thuis wordt data vaak apart van de computer opgeslagen op een zogenaamde NAS (Network Attached Storage), een kastje met een minicomputer, harde schijven en een netwerkaansluiting. Met wat handige software kan zo'n kastje ingericht worden om films, documenten en foto's op te slaan. Misschien wel het belangrijkste: door een serie harde schijven samen te voegen kan een array worden gemaakt, waarmee verlies van gegevens voorkomen wordt (in geval een harde schijf kapot gaat). Een systeem als RAID is een handige manier om met minder opslagruimte tóch van alle data een kopie te hebben.

```{exercise} 
Zoek uit wat RAID is en hoe het werkt. Welke vormen van gegevensbescherming kom je nog meer tegen?
```

Data redundancy, ofwel voorkomen van dataverlies als er iets stuk gaat, is belangrijk voor veiligheid van data. Minstens zo belangrijk is het voorkomen van diefstal, brand, stroomuitval en andere zaken waardoor data onbereikbaar wordt. Veel bedrijven zijn volledig afhankelijk van goed werkende servers die constant beschikbaar zijn. Een hokje met computers in een bedrijfspand is niet handig en het risico van uitval of dataverlies door calamiteiten is te groot. Vandaar dat bedrijven hun computers en schijven het liefst in een veilige en optimale omgeving zetten: datacenters.

## Beveiliging

Het sturen van kleine datapakketjes van en naar aparte computers is probleemloos als iedere computer op het internet netjes doet wat de bedoeling is. Helaas is de wereld niet zo eerlijk. Pakketjes worden onderschept en gelezen, je krijgt pakketjes aangeboden die schadelijk zijn en ga zo maar door. Via internet kan informatie uit een computer gelezen en gewijzigd worden.

We zijn zó afhankelijk van goed werkende computers, die onderling veilig data kunnen uitwisselen, dat beveiliging misschien wel het meest belangrijke onderwerp in de IT-wereld is. Hoe zorg je voor veilige computers?

```{exercise}
Je gebruikt op je computer en telefoon verschillende vormen van beveiliging. Welke? Noem er tenminste drie.
``` 

**Poorten**

Zoals een gebouw meerdere deuren heeft, geldt dat ook voor een router. Routers en computers beschikken over poorten. Daardoor kunnen datapakketjes intern precies afgeleverd worden. Pakketjes voor de webserver gaan via een standaard poort (bijvoorbeeld 72), dat hoeft niet in het pakketje beschreven te zijn. Maar als een server niet alle pakketjes wil hebben of heel nauwkeurig alleen van één computer de pakketjes wil doorgeven, wordt gewerkt met lijstjes afzenders en poortnummers. lets als 19.02.202.10:5002 is een IP adres en een poortnummer. Je moet dus vertellen waar je pakketje terecht moet komen. Dat is een van de vormen om internetverkeer te beveiligen. Je kent zelf wel de gebruikersnaam-wachtwoord toegang. Een poort maakt het iets veiliger. Als je ook nog tevoren hebt afgesproken welke computers contact met elkaar mogen hebben (en de webserver kent jouw computer IP), wordt het nog wat meer beveiligd.

Wanneer je pakketjes, voordat ze verstuurd worden, door elkaar schudt (versleutelen, encryptie) en bij de ontvanger weer sorteert (met dezelfde sleutel), kun je informatie nog een stapje veiliger versturen. Het is belangrijk dat verzender en ontvanger hebben afgesproken welke sleutel ze gebruiken (maar uiteraard de sleutel niet in het pakketje verstoppen).

Voor de beveiliging wordt veel kennis van wiskunde gebruikt. Priemgetallen, reeksen willekeurige getallen, wachtwoordregels of datacorrectie zijn veelgebruikte methodes. Bijvoorbeeld: een controlegetal de som van alle getallen in de reeks moet even zijn. Als dat niet zo is, wordt de controlebit 1, anders 0 . Ook hier kun je je met vervolgmodules uitgebreid in verdiepen (zie hoofdstuk $8)$.

**Hacken en cyberaanvallen**

Binnendringen van een computer of webserver betekent dat je door de beveiliging moet zien te komen. Daarvoor moet je een heleboel informatie hebben. Een gebruikersnaam, het wachtwoord, het juiste veiligheidscertificaat, juiste IP adres, encryptiesleutel: je kunt het heel moeilijk maken om binnen te komen. Een moeilijk te raden wachtwoord helpt. Bedenk dat hackers niet altijd zelf wachtwoorden gaan intypen. Ze hebben daarvoor een programma dat gebruik maakt van allerlei lijsten. Uit een woordenboek geplukt, willekeurig samengesteld of gejat uit een slecht beveiligde database of 'eerlijk' gekocht op een criminele marktplaats (dark web).

Maar: snelle computers kunnen ook zelf wachtwoorden samenstellen en uitproberen.
Wachtwoorden van meerdere karakters kunnen in heel korte tijd gemaakt en uitgeprobeerd worden. Hoe langer het wachtwoord, hoe langer de computer er over doet en hoe lastiger het wordt. Een slecht beveiligd achterdeurtje kan zo de toegang tot belangrijke informatie zijn. Apparaten die je met internet verbindt (slimme thermostaat, webcam, koelkast) zijn heel vaak voorzien van een simpel te raden of standaard wachtwoord. Hackers zoeken vaak naar dit soort apparaten om je netwerk binnen te komen. Immers: het apparaat heeft een IP-adres en is daarmee te vinden voor computers. Via zo'n apparaat kun je andere apparaten in het netwerk bereiken: je bent binnen via de achterdeur.

```{exercise} Sterke wachtwoorden 
Wachtwoorden bestaan meestal uit de 256 verschillende ASCII tekens (letters, cijfers, leestekens).

a. Als een wachtwoord 5 tekens lang is, hoeveel verschillende wachtwoorden kun je dan vormen? Bereken dit ook voor een lengte van 10 tekens.

b. Stel: een vlotte hack-computer kan 1 wachtwoord per seconde maken en uitproberen. Hoe lang doet deze dan over het hacken van jouw mailbox?
```

Via de voordeur binnenkomen gebeurt ook vaker dan je zou willen. Een bericht met een bijlage of een link die je opent, kan een pakketje afleveren met gevaarlijke software: een virus of gijzelsoftware. De software kan in je telefoon of computer informatie zoeken en doorsturen (bijvoorbeeld inlog van je bankrekening) of alle bestanden blokkeren (en tegen betaling weer vrijgeven, ransomware).

```{exercise} 
Zoek op internet tenminste twee voorbeelden van hacken, falende beveiliging of dreiging van cyberterreur. Waar gaat het mis in die situatie, wanneer die beveiliging niet goed is?
```

**Routers en beveiliging**

Routers en hubs zijn ook kleine computers met chips en software en met algoritmen die door mensen geprogrammeerd zijn. Het netjes doorsturen van pakketjes, zonder ongevraagd kopieën elders heen te sturen, is iets wat je van een router verwacht. Maar het is niet ondenkbaar dat de chips waar de computer in de router mee gemaakt is, al van zichzelf schakelingen hebben die gemaakt zijn om pakketjes te kopiëren en ook naar een ander adres te sturen. De schakelingen in de chips zijn zo ingewikkeld, dat het niet eens hoeft op te vallen. Intussen doet de router andere dingen dan de bouwer van het apparaat bedoelt, alleen al doordat de chips die geplaatst zijn anders werken of méér doen, dan in de specificatie staat (wat ze volgens de beschrijving zouden moeten doen).

Je kunt dit zien als valsspelende postbodes die brieven onderweg kopiëren of verwisselen en pas daarna bezorgen. We moeten vertrouwen op wat de chipfabrikant levert. Als de apparaten ook niet door jezelf gemaakt worden, is het helemaal lastig om exact te controleren wat er allemaal in zit.

In de tech-industrie is het maken van chips en apparatuur op een paar plekken in de wereld gecentraliseerd. Het allergrootste deel van de spullen wordt in Azië in elkaar gezet, ondanks dat het om merken uit Amerika of Japan gaat. Een monopolie op de fabricage én de grondstoffen daarvoor maakt ons allemaal uiterst afhankelijk en daarmee ook de mogelijke spionage die ermee gepaard gaan.

Het nieuwe 5G netwerk vraagt om heel veel nieuwe apparatuur: 5G zenders en snelle netwerkapparatuur om die enorme datastromen (in datapakketjes) goed te kunnen vervoeren. Allerlei bedrijven hebben daar apparatuur voor ontwikkeld. Maar de bedrijven die eerder deze apparatuur leverden, beschikken niet meer over de snelste technologie en kunnen de slag verliezen van nieuwe aanbieders uit Azië. Helaas is daarvan niet duidelijk of er in de apparatuur ook spionagetechnologie is ingebouwd. Vandaar dat bepaalde aanbieders geweerd worden uit de kern van onze data-infrastructuur.

```{exercise}
Probeer te achterhalen welke verdenkingen tegen aanbieders van 5G-technologie er zijn en welke rol dat speelt in de besluitvorming in Nederland.
```

## Keuzeopdrachten

**a. Kleine arduino's maken samen big data**

Fijnstof, partikels in de lucht van 1 tot 500 nm , kunnen met een fijnstofsensor gemeten worden. Je moet denken aan roetdeeltjes uit auto's of vliegtuigen of deeltjes uit de rook van een fabriek. Hoewel stuifmeel (pollen) er niet bij hoort, is dat ook iets dat in de lucht zweeft en door ons ingeademd wordt. De vervolgmodule Fijnstof gaat hier in detail op in.

De Arduino die hiervoor gebruikt wordt, meet via de fijnstofsensor en geeft data draadloos door via het Internet of Things op het 2G netwerk. De hoeveelheid data van één sensor gaat nog wel, maar honderden over het hele land leveren een aardige massa data op. Om daar iets aan te hebben, moet je de data voorzien van gegevens over de locatie, tijdstip, structuur enzovoort en netjes ordenen in een database. Als die metadata in orde is, kun je de gegevens uit de database lezen en bijvoorbeeld combineren met gegevens van een digitale kaart. Je kunt dan een nieuw plaatje berekenen waarop de fijnstofwaarde in ons land op een bepaald moment te zien zijn. Als dat allemaal via een website te raadplegen is, moet de webserver deze data van verschillende bronnen ophalen en combineren. Kijk op www.rivm.nl/fijnstofmeting en globe.nl voor meer informatie.

**b. Je eigen Arduino meetproject.**

Arduino is prima geschikt om metingen op te slaan en door te sturen. De thermometer die je in H4 gemaakt hebt, kun je voorzien van opslag (kaartje) of draadloze verbinding (wifi, bluetooth, LORAWAN). Zoek op sites van Arduino-spullen wat je hiervoor nodig hebt. Wellicht zijn die spullen ook op school beschikbaar. Vraag gerust aan je docent of TOA!

Voorzie je Arduino-thermometer van een manier om de gemeten data te kunnen opslaan of versturen. Zorg dat de Arduino stroom krijgt uit een batterij.

- Opslaan: voorzie je Arduino van een klok en een opslagmedium, zoals SD-kaartje
- Versturen: voorzie je Arduino van een klok en wifi of bluetooth

Zoek de juiste drivers en herschrijf de sketch voor je uitgebreide Arduino thermometer.
Gebruik je device om gedurende een aantal uren temperatuur te meten. Temperatuur in een klaslokaal of je eigen lichaamstemperatuur bij het sporten of slapen. Bij de laatste twee situaties moet je ook nadenken hoe je de sensor op een goede manier met je lichaam kunt verbinden. De opdracht met Q-strip (H7) geeft ook een opstap naar het zelf maken van een vochtsensor. Gebruik die kennis om een portable device te maken waarmee je tijdens het sporten het zweten kunt meten.
https://www.arduino.cc/en/Guide/ArduinoUnoWiFiRev2
https://www.arduino.cc/en/Reference/WiFiNINA
https://store.arduino.cc/explore-iot-kit

**c. Satellieten en informatie over de aarde (GIS)**

In bijlage 2 in de moduledatabase staat een opdracht over de digitale wereld achter aardobservatiesatellieten. Beelden die Landsat dagelijks maakt zijn via internet te bekijken, gecombineerd met geoinformatie (GIS). Je kunt zo de actuele situatie en verandering in gebieden op aarde onderzoeken. Ook Sentinel levert interessante informatie op. Je maakt kennis met databases en technieken om data uit allerlei bronnen overzichtelijk te presenteren.

**d. Verder te verkennen / te onderzoeken toepassingen**

Er is veel aan de orde gekomen in dit hoofdstuk, maar niet zo uitgebreid. Er valt nog veel te ontdekken. Verdiep je in één van onderstaande thema's. Met de kennis van Arduino of andere platforms kun je zelf ook aan de slag om met dit thema iets te bouwen.

```{figure}https://cdn.mathpix.com/cropped/2024_12_20_510ffc175a3910aebf8dg-63.jpg?height=861&width=618&top_left_y=232&top_left_x=1207
:width: 70%
:name: fig_

Landsat satelliet die dagelijks honderden foto's van het aardoppervlak maakt
```

Maak daarvan een presentatie, informatieve poster of een schriftelijk verslag.

- 5 G communicatie
- Glasvezel en optische communicatie
- Een digitaal geheugen
- Datacenter: hoe is dat ingericht
- Telefonie, videobellen
- Streaming media
- LORA netwerken

