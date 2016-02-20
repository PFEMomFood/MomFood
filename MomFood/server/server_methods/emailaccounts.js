Meteor.startup(function () {
Accounts.config({
    sendVerificationEmail: true
});

process.env.MAIL_URL = "smtp://postmaster@sandboxfbc13fde049f4c02bb5da4a0c8cd29d0.mailgun.org:35d4fb00c423fa2166f4ced5b6d30939@smtp.mailgun.org:587/";
});