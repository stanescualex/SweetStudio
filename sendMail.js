let nodemailer = require('nodemailer');
exports.sendMail = function(mailObject){
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sweetstudio2024@gmail.com',
          pass: 'gyzy nbbh pdgq btrv'
        }
        
      });

      
      let mailOptions = {
        from: 'sweetstudio2024@gmail.com',
        to: 'sweetstudio2024@gmail.com',
        subject: `Buna ziua,  ${mailObject.firstName}  ${mailObject.lastName}`,
        text: 'That was easy!',
         html: `<h1>Buna ziua</h1><p>Ma numesc ${mailObject.firstName} ${mailObject.lastName}</p>
         <p>Numarul meu de telefon este ${mailObject.phone}</p>
         <p>Adresa mea de mail este ${mailObject.mail}</p>
         <p>Va las mai multe detalii in aceasta parte ${mailObject.details}
         `

      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}

