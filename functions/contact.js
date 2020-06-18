require("dotenv").config();

exports.handler = (event, _context, callback) => {
  console.log({ event });

  const mailgun = require("mailgun-js");

  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAINnet,
  });

  const data = JSON.parse(event.body);

  const email = {
    from: "Ana Bebic <abebic@yahoo.com>",
    to: `${data.name} <${data.email}>`,
    subject: data.subject,
    text: data.body,
  };
  mg.messages().send(email, (error, message) => {
    callback(error, {
      statusCode: 200,
      body: JSON.stringify(response),
    });
  });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ boop: true }),
  });
};
