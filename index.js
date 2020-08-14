const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { body, check, validationResult } = require('express-validator');

const app = express();
const phoneNumber = require('./validators/phoneNumber');
const areacodes = require('./validators/areacode');
const email = require('./lib/sendEmail');

app.use(express.json());
app.use(cors());
app.use(helmet());

app.post('/', [
  check('name').not().isEmpty().withMessage('Du må skrive inn navnet ditt'),
  body('email').isEmail().withMessage('Epost må fylles ut, og formateres korrekt'),
  body('phone').custom((number) => phoneNumber.validateNumber(number)).withMessage('Nummeret må bestå av 8 siffer'),
  check('phone').not().isEmpty().withMessage('Du må skrive inn ditt telefonnummer'),
  body('areacode').custom((areacode) => areacodes.areacode(areacode)).withMessage('Postnummeret er ikke gyldig'),
  check('areacode').not().isEmpty().withMessage('Du må fylle ut ditt postnummer'),
  check('comment').not().isEmpty().withMessage('Du må fylle inn en kommentar'),
], (req, res) => {
  const errors = validationResult(req);
  const checkedNumber = phoneNumber.checkPhone(req.body.phone);

  // Sender errormsg laget i validator middleware som 400-response
  if (!errors.isEmpty()) {
    const errorMessage = errors.array().map((e) => e.msg);
    return res.status(400).json({
      error: errorMessage,
    });
  }

  const formInfo = req.body;
  formInfo.phone = checkedNumber;

  // email.sendEmail(formInfo);
  console.log(formInfo);
  res.send('success');
  return true;
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server kjører på port ${PORT}`);
});
