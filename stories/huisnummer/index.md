---
endpoint: https://data.pdok.nl/sparql
layout: story
logo: /stories/huisnummer/logo.jpg
output: leaflet
title: Kadaster Data Stories ― Huisnummer toevoeging
published: false
---

# Huisnummertoevoegingen per plaatsnaam

Geef voor een gegeven woonplaats aan welk type huisnummertoevoegingen
er binnen die woonplaats voorkomen.

Dus: input Apeldoorn.  Resultaat: a,b,c, bis, II,

Schijnt namelijk in de post vaak fout te gaan, en als je weet wat de
mogelijkheden zijn in een specifieke gemeente dan kan je misschien
eenvoudiger de fout herstellen.

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="toevoegingen.rq" data-output="geo"></query>
