---
description: Toelichting op de linkset BAG-BRK
layout: story
logo: /stories/bag-brk/logo.jpg
title: Linkset BAG-BRK
published: false
---
# De 'linkset' BAG-BRK

## Disclaimer

Op deze story en de data die erbij hoort, is de [algemene PDOK
disclaimer](https://www.pdok.nl/nl/pdok-producten) van toepassing.

De handleiding en uitleg van de LKO-koppeling kun je vinden in het
document: [BRK-BAG koppeling specificatie en
bijhouding](https://www.kadaster.nl/documents/20838/87954/BRK-BAG+koppeling+-+specificatie+en+bijhouding/d62103e7-3215-4942-ad90-c76e5fb3097d).


## INSPIRE AR3NA

Het Kadaster participeert in een initiatief om INSPIRE data
beschikbaar te krijgen als Linked Data, en de meerwaarde van deze data
aan te tonen.  De lead van dit project ligt bij
[Netage](http://netage.nl/), dat een demonstrator zal gaan realiseren
om het nut van Linked Data voor hulpdiensten aan te tonen.

Een kernelement in deze demonstrator is het gebruik van de koppeling
tussen panden en percelen.  Voor de brandweer is het van belang te
weten welke nabijgelegen panden zich bij een brand bevinden, op welke
percelen deze liggen, wie de eigenaar hiervan is en welke belendende
percelen naast de brandhaard liggen.  Het Kadaster heeft hiertoe een
koppeltabel gepubliceerd die aldaar intern bekend staat onder LKO:
Locatie Kadastraal Object.  Het vormt de koppeling tussen [BAG
nummeraanduidingen](https://bag.basisregistraties.overheid.nl/query/model#Nummeraanduiding)
en BRK perceels- en appartementsrechtsregistraties.

Deze linkset toont de kracht van Linked Data door twee
basisregistraties transparant met elkaar te verbinden.  De linkset is
geen integraal onderdeel van de basisregistraties zelf, maar vormt het
verbindende element hiertussen.  Hiermee is de basis gelegd voor een
**stelsel** van basisregistraties: niet slechts in isolatie, maar in
verbondenheid!

## Linkset

De LKO koppeltabel van BAG-nummeraanduidingen naar BRK percelen is
vertaald naar een koppeling tussen URI's uit de Linked Data publicatie
van de basisregistraties BAG en BRK, zoals die zijn gepubliceerd op
[https://bag.basisregstraties.overheid.nl](https://bag.basisregstraties.overheid.nl)
en
[https://brk.basisregistraties.overheid.nl](https://brk.basisregistraties.overheid.nl).
Door de identificatiecodes uit de LKO koppeltabel te vertalen naar
URIs, kunnen deze vanuit iedere plek op aarde worden geraadpleegd.  De
resulterende linkset BAG-BRK is gepubliceerd door het research-team
van het PDOK dataplatform, op
[https://data.labs.pdok.nl](https://data.labs.pdok.nl).

## SPARQL

De BAG-BRK linkset is gepubliceerd in een andere RDF store dan die
waarmee de BAG en BRK zelf zijn gepubliceerd.  Normaliter is dit
direct een data-integratievraagstuk, maar dit is niet het geval met
Linked Data.  Door het SPARQL-mechanisme is data op te vragen uit
willekeurige andere SPARQL-endpoints, via het zogenaamde 'federated
query'-principe.

## Voorbeeld

Onderstaand een overzicht van een serie nummeraanduidingen en
gerelateerde percelen aan de Oranjekade te Haarlem.  De meest
noordelijke marker betreft een 'outlier': hier zit mogelijk iets fout
in de linkset.

<query data-endpoint="https://data.pdok.nl/sparql"
     data-query-ref="percelen-en-nummeraanduidingen.rq"
     data-output="geo"
     data-showQuery>
</query>
