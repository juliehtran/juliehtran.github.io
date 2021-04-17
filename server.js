// this module holds our emailer settings
const emailer = require('./emailer');

// express is our http server framework
const express = require('express');

const app = express();

// production HTTP port
const port = process.env.PORT || 443;

// we take info from ajax requests, not normal form actions
app.use(express.json({ extended: true }));

// render pages which we have on disk
app.use(express.static(__dirname));

// index page
app.get(`/`, (request, response) => {
  response.sendFile(__dirname + `index.html`);
})

// when we receive a submission from the contact form,
//   we send ourselves an email from the server
app.get(`/contact`, (request, response) => {
  const emailData = {
    // not sure if this works, might need to add it in the subject
    from: request.query.email_address,
    to: process.env.EMAIL,
    subject: `New message from "${request.query.name}" (${request.query.email}) [Portfolio contact form]`,
    text: request.query.message
  };

  emailer.sendMail(emailData, (error, data) => {
    if (error) {
      console.log(error);
      response.json({ success: false });
    } else {
      console.log(`Email sent: ` + data.response);
      response.json({ success: true });
    }
  });
})

app.listen(port, () => console.log(`Listening on port ${port}`));