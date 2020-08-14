/* eslint-disable consistent-return */
const fs = require('fs');
const path = require('path');

// laster inn postnummer som json
const inputFile = fs.readFileSync(path.join(__dirname, '../resources/postnummer.json'));
const areacodes = JSON.parse(inputFile);

// Sjekker at postnummer input stemmer med gyldig postnummer
const location = (code) => {
  const areaLocation = areacodes[code];
  if (areaLocation) return true;
};

module.exports.areacode = location;
