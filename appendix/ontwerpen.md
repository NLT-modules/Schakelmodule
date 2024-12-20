(ch2)=
# Ontwerpen en ontwerpcyclus 

Jullie gaan tijdens deze module tot een prototype komen. Daar is een bepaalde manier voor om dat zo goed mogelijk te laten verlopen.

## Probleemstelling

Als eerste moet je vaststellen voor welk probleem je een oplossing gaat ontwerpen. Stel: je kat gaat iedere vakantie dood van de honger omdat je weg bent en er niemand eten kan geven, en jij wilt een apparaat bouwen dat de kat automatisch eten geeft. Of: de vogels in het vogelhuisje in de tuin raken oververhit in de zomer en je wilt iets bouwen dat het vogelhuisje koelt als de temperatuur te heet wordt. Of: Je wilt een wekker bouwen die licht geeft als de alarmtijd aangebroken is.

Je ziet het al: het doel van je ontwerp (nml. het oplossen van een probleem) bepaal je zelf. Het is handig om het probleem zo concreet mogelijk te omschrijven. Als je doel bijv. 'wereldvrede' is, dan is dat veel te breed en te vaag om een goed startpunt te zijn voor een ontwerpcyclus. Vaak kom je in een ontwerpcyclus later nog terug op het probleem als je er in eerste instantie achter komt dat het probleem te groot is om met je ontwerp op te lossen. In dat geval stel je je doel bij (tenzij je een opdracht hebt gekregen van een opdrachtgever, dan moet je van tevoren inschatten of het haalbaar is).

## Pakket van eisen

De tweede stap is dat je gaat vaststellen aan welke eisen je ontwerp moet voldoen om te zorgen dat je probleem ook echt opgelost wordt. Een voorbeeld: als je een apparaat wil bouwen dat automatisch onder water de troebelheid meet als waarschuwingssysteem voor blauwalg, moet het natuurlijk wel waterdicht zijn.

Het kan ook hierbij het geval zijn dat je gedurende je ontwerpcyclus erachter komt dat je een eis mist, die voeg je dan in de volgende ronde toe. Let op dat ook eigenschappen als prijs of afmetingen van het ontwerp belangrijke eisen kunnen zijn.

## Deeluitwerkingen

Een ontwerp is vaak complex en heeft verschillende aspecten en moet aan verschillende eisen voldoen. Er is de kwestie van de stroomtoevoer, het systeem moet dingen waarnemen, maar ook output geven. De code moet kloppen en de code bevat verschillende onderdelen om de verschillende onderdelen van je systeem aan te sturen. Om dit alles op een ordelijke manier te ontwerpen helpt het als je je ontwerp opbreekt in kleine stukken. Zo kun je ook makkelijker de taken verdelen binnen een team.

Bij de fase van 'deeluitwerkingen opstellen' breek je je ontwerpproces dus op in kleine stukken die je op zichzelf kan maken en testen waarna je daarna alle deeluitwerkingen (stap voor stap) samenvoegt. Dat samenvoegen is een complexe stap, en daarom moet je dit stap voor stap doen. Als je namelijk in 1 x alles bij elkaar zet en er is iets fout, dan weet je namelijk niet welk onderdeel de fout veroorzaakt.

## Ontwerpvoorstel

In het ontwerpvoorstel ga je beschrijven welke deeluitwerkingen je samenvoegt voor je ontwerp. Dus
stel dat je bij een wake-up light in de 1e ronde alleen de code schrijft die de klok laat lopen en op een display laat verschijnen, dan beschrijf je dat. Op die manier kun je hier bij je evaluatie op terugkomen.
(in de praktijk voer je deze en de volgende stap tegelijk uit)

## Prototype

Nu ga je aan het bouwen. Je zorgt dat je de stappen die je hebt gemaakt werkend hebt (dus als je een code hebt die de klok laat lopen en op een display laat verschijnen, dan laad je niet alleen de code op de Arduino, maar je sluit ook alle draadjes aan voor de display, zodat het systeem ook daadwerkelijk kan werken). Dit is de leukste stap, maar ook het meest frustrerende, omdat er vaak dingen niet werken of door jou slecht zijn uitgedacht of voorbereid. Dat hoort erbij, deal with it.

## Evaluatie

Dit is een hele belangrijke stap, en een stap waarvan het heel belangrijk is dat je al je waarnemingen goed opschrijft. Je beschrijft nu namelijk wat er van je ontwerp wel en wat niet werkt. Vaak is dit in het begin meer niet dan wel. Fail and try again.

Om te zorgen dat je niet steeds dezelfde problemen tegenkomt is het belangrijk dat je je evaluatie gestructureerd aanpakt. Zorg dat je de datum vermeld, wat werkte er wel, wat werkte er niet, en je vermoedens waar het aan ligt.

Ga in deze fase niet eindeloos lopen prutsen, maar pak de verbetering gestructureerd aan door weer terug te gaan naar je pakket van eisen, deeluitwerkingen etc. en een goed plan te maken voor de volgende verbetering. Zo ga je dus nog een keer de ontwerpcyclus in. Bij dit project kun je zo 10-15 ontwerpcycli doorlopen. Het is dus ook slim om je codes van je Arduino programma een versienummer te geven, zodat je altijd achteraf kunt laten zien wat er steeds is veranderd, of dat als je in versie 5 iets blijkt gesloopt te hebben wat in versie 4 nog werkt, je altijd weer terug kan gaan naar de laatst werkende versie.

## Contexten

Er zijn ontzettend veel contexten waarvoor je een digitaal systeem kunt ontwerpen. Digitale systemen zijn namelijk overal om je heen!

In het voorbeeld in hoofdstuk 8 zie je hoe de auteur van de site een ontwerpopdracht aanpakt rondom de context van een wake-up light. Eigenlijk zijn alle systemen waarin iets van een klok of tijdwaarneming zit interessante systemen. Je moet namelijk een interessante code schrijven, er iets van een input nodig, en je hebt output op basis van die tijd.

Een andere interessante context is corona. Hoewel de meesten er natuurlijk zat van zijn, kan technologie ons helpen er beter mee te leven. Zo kun je bijvoorbeeld een apparaat bouwen waarmee je met een ultrasone sensor de afstand tot objecten om je heen kunt meten? Stel dat je met zo'n apparaat om je middel door de kantine loopt? Hoe vaak is er dan iemand binnen 1,5m? Of kun je dan een waarschuwingssignaal laten klinken als feedback?

Ook kun je op basis van een lichtsluis meten hoeveel mensen er in een winkel zijn. Is het maximum bereikt kan er een stoplicht op rood springen.

Ook sport is interessant: stel je gaat hardlopen en je meet de tijd dat je daarover doet. Misschien kun je een apparaat maken dat jou feedback geeft over je rondetijden? Je hebt misschien wel eens bij het
schaatsen op TV gezien dat als iemand een wereldrecord lijkt te schaatsten dat je dan op het ijs een lijntje geprojecteerd ziet van die tijd.

De mogelijkheden zijn eindeloos. De uitdaging zit hem erin vooral snel iets te gaan bouwen en niet te lang bezig zijn om de perfect context te vinden. Voor deze module is het namelijk vooral belangrijk ermee aan de gang te gang en in de praktijk te leren.
