const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")
let fs = require('fs')
const app = express()  // make express app
const port = process.env.PORT||8081

// ADD THESE COMMENTS AND IMPLEMENTATION HERE
// 1 set up the view engine
// 1 set up the view engine
app.set("views", path.resolve(__dirname, "views")) // path to views
app.set("view engine", "ejs") // specify our view
// 2 include public assets and use bodyParser
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3 set up the logger
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));


// 4 handle valid GET requests
app.get("/", function (req, res) {
 //res.sendFile(path.join(__dirname + '/assets/index.html'))
 res.render("index.ejs")
})
app.get("/index", function (req, res) {
  res.render("index.ejs")
 })
 
// 4 http GET /coffee
app.get("/coffee", function (req, res) {
 res.render("coffee.ejs")
})

// 4 http GET /about
app.get("/contact", function (req, res) {
 res.render("contact.ejs")
})

 



// 5 handle valid POST request
app.post("/contact", function (req, res) {
  var api_key = 'a3049c523c74f816ed4318e019b80aca-4836d8f5-ef5f7e8a';
  var domain = 'sandboxcdb494a1b4a44da3b3c377e05b2dc010.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
   
  var data = {
    from: 'cal App user<sandboxcdb494a1b4a44da3b3c377e05b2dc010.mailgun.org>',
    to: 'seshu.kalavakuri1098@gmail.com',
    subject: req.body.firstname + " Sent you a message",
    text: req.body.subject
  };
   
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    if(!error){
      res.send("Mail sent");
    }
    else{
      res.send("Not send");
    }
  });

//  // setup e-mail data with unicode symbols
//  const mailOptions = {
//    from: '"Denise Case" <denisecase@gmail.com>', // sender address
//    to: 'dcase@nwmissouri.edu, denisecase@gmail.com', // list of receivers
//    subject: 'Message from Website Contact page', // Subject line
//    text: comment,
//    err: isError
//  }

 // logs to the terminal window (not the browser)
//  console.log('\nCONTACT FORM DATA: ' + name + ' ' + email + ' ' + comment + '\n');
 })


// 6 respond with 404 if a bad URI is requested
app.get(function (req, res) {
 res.render("404")
})

// Listen for an application request on designated port
app.listen(port, function () {
 console.log('Web app started and listening on http://localhost:' + port)
})