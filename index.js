// app.js
 
// Required modules
//const mailLibrary = require('sendMail')
const express = require('express');
const path = require('path');
 
// Create Express app
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const { sendMail } = require('./sendMail');



app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
app.use(cors())
 
// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));
 
// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
 
// Define route for the homepage
app.get('/', (req, res) => {
    res.render('main');
});
 
// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});

app.post("/api", async (req, res) => {
    const objectMail = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mail: req.body.mail,
        phone: req.body.phone,
        details: req.body.details
      }
      let result = {
      };
      try {
        resultMail = await sendMail(objectMail);
        result.isSucess = true;
        result.data = resultMail;
     } catch (error) {
      result.isSucess = false;
      result.Error = 'Issue to send the mail check logs';
     }finally{
      console.log(result)
      res.send(result)
     }

  });
  

