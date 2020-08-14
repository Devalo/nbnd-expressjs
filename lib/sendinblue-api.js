const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config();

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.API_KEY;

const apiInstance = new SibApiV3Sdk.SMTPApi();

const sendinblue = (sendSmtpEmail) => {
  apiInstance.sendTransacEmail(sendSmtpEmail).then(() => true, (error) => {
    console.error(error);
    return false;
  });
};

module.exports = sendinblue;
