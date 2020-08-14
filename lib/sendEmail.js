const sendinblue = require('./sendinblue-api');

const sendEmail = (emailObj) => {
  const email = {
    to: [{
      email: 'stephan@devalo.no',
    }],
    templateId: 1,
    params: {
      subject: 'testmail fra express',
      text: emailObj,
    },
  };
  sendinblue(email);
};

module.exports.sendEmail = sendEmail;
