'use strict';

/* eslint-disable no-console, func-names, prefer-template,prefer-arrow-callback */
/* eslint-disable no-var */
/* eslint-env browser */

var parcels;
var jQuery;
var jq = document.createElement('script');
var prompoly = document.createElement('script');
var parcelscript = document.createElement('script');
var parcel;
var filiationReq = 'https://intranet.kadaster.nl/iad/kdv/api/kdv/filiatie/?appartementvolgnummer=&deelperceelnummer=&deelperceelvolgnummer=&gemeentecode=LSE00&richting=down&sectie=D&toevoeging=&toevoegingdisplay=&perceelnummer=';

jq.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(jq);
prompoly.src = 'https://cdn.jsdelivr.net/bluebird/3.5.0/bluebird.js';
document.getElementsByTagName('head')[0].appendChild(prompoly);
parcelscript.src = 'https://data.labs.pdok.nl/assets/js/percelen-lisse-sectie-d.js';
document.getElementsByTagName('head')[0].appendChild(parcelscript);

function getFiliation(parcelID) {
  return new Promise(function (resolve, reject) {
    jQuery.ajax(filiationReq + parcelID)
      .done(function (res) {
        var selectedFiliations = res.resultaten.filter(function (result) {
          return result.sectie === 'D' && result.kadastraleGemeenteCode === 'LSE00';
        });
        if (selectedFiliations.length === 0) { return resolve(res); }

        selectedFiliations.forEach(function (filiation) {
          var url = 'https://data.labs.pdok.nl/filiation?descendant=' + parcelID
            + '&ancestor=' + filiation.perceelNummer
            + '&timestamp=' + new Date().toUTCString();
          // filiations.push({
          // descendant: parcelID.toString(),
          // ancestor: filiation.perceelNummer.toString()
          // });
          var fq = document.createElement('script');
          fq.src = url;
          jQuery('head').append(fq);
          jQuery(document).ready(function () { jQuery(fq).remove(); });
        });

        return Promise
          .map(selectedFiliations, function (filiation) {
            return getFiliation(filiation.perceelNummer);
          }, { concurrency: 1 })
          .then(function (r) { return resolve(r); })
          .catch(function (err) { return reject(err); });
      })
      .error(function (err) { return reject(err); });
  });
}

parcel = parcels.features[0].properties.perceelnummer;
getFiliation(parcel)
  .then(function () { console.log('Done!'); })
  .catch(function (err) { console.error(err); });

Promise.map(parcels.features.slice(0, 10), function (feature) {
  return getFiliation(feature.properties.perceelnummer);
}, { concurrency: 1 })
  .then(function () { console.log('Done!'); });
