var MailListener = require("./");

var mailListener = new MailListener({
  username: "sampletestprogram2017@gmail.com",
  password: "Infotech@20",
  host: "imap.gmail.com",
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
  mailbox: "INBOX",
  markSeen: true,
  fetchUnreadOnStart: true,
  attachments: true,
  attachmentOptions: { directory: "/Users/kumars/Desktop/attachments/" }
});

mailListener.start();

mailListener.on("server:connected", function(){
  console.log("imapConnected");
});

mailListener.on("server:disconnected", function(){
  console.log("imapDisconnected");
});

mailListener.on("error", function(err){
  console.log(err);
});

mailListener.on("mail", function(mail){
  console.log(mail);
});

mailListener.on("attachment", function(attachment){
  console.log(attachment);
});
