---
endpoint: https://data.pdok.nl/sparql
layout: story
logo: /stories/gemeente/logo.png
output: leaflet
title: Kadaster Data Stories ― Nederlandse gemeentes
published: false
---

# Nederlandse gemeentes

Deze data story geeft een overzicht van de grootste Nederlandse
gemeentes (op basis van oppervlakte), en de meest dichtbevolkte
Nederlandse gemeentes.

## De grootste Nederlandse gemeente

We kunnen de gemeentes sorteren op basis van hun oppervlakte.
Hieronder volgt een overzicht van de 25 grootste gemeentes.  Omdat
water wordt meegerekend is Zeewolde groter dan Amsterdam!


<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="10-grootste-gemeente.rq" data-output="table"></query>

Hetzelfde resultaat kan ook op een kaart getoond worden.  Merk op dat
de grootste gemeentes inderdaad vaak een groot wateroppervlak
bezitten.

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="20-grootste-gemeente-geo.rq" data-output="geo"></query>

## Nederlandse gemeentes in DBpedia

Door gebruik te maken van SPARQL federatie kunnen we dynamisch
informatie over gemeentes opvragen uit andere datasets.  Hieronder
tonen we voor 25 gemeentes een externe identifier in DBpedia.


<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="30-meest-dichtbevolkte-gemeente.rq" data-output="geo"></query>
