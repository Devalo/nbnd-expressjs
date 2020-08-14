/* eslint-disable consistent-return */
const checkPhone = (phone) => {
  // Hvis telefonnummeret starter på 9 eller 4, sjekk at formateringen er korrekt
  if (phone[0] === '9' || phone[0] === '4') {
    const splitNum = phone.split(' ');
    if (splitNum[0].length === 3 && splitNum[1].length === 2 && splitNum[2].length === 3) {
      return phone;
    }
  } else {
    // Hvis ikke må nummeret være et fasttlfnum. Sjekk at formateringen er korrekt
    const splitNum = phone.split(' ');
    let counter = 0;
    for (let i = 0; i < splitNum.length; i += 1) {
      if (splitNum[i].length === 2) {
        counter += 1;
        if (counter === 4) return phone;
      }
    }
  }

  // Formater telefonnummeret
  const cleaned = (`${phone}`).replace(/\D/g, '');
  if (cleaned[0] === '9' || cleaned[0] === '4') {
    const match = cleaned.match(/^(\d{3})(\d{2})(\d{3})$/);
    if (match) return `${match[1]} ${match[2]} ${match[3]}`;
  } else {
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{2})(\d{2})$/);
    if (match) return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
  }
};

// Sjekker at nummer er 8 siffer, og består av kun tall
const validateNumberLength = (number) => {
  const strippedNum = number.replace(/\s+/g, '');
  if (strippedNum.length === 8 && strippedNum.match(/^[0-9]+$/)) return true;
};

module.exports.checkPhone = checkPhone;
module.exports.validateNumber = validateNumberLength;
