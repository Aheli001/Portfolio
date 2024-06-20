const form = document.querySelector("form");
function emailSend() {

    var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var emailSub = document.getElementById('emailSub').value;
	var message = document.getElementById('yourMessage').value;

    var messageBody = "Full Name: " + userName +
	"<br/> Mobile Number: " + phone +
	"<br/> Email Address: " + email +
	"<br/> Message: " + message;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ahelinandy01@gmail.com",
        Password : "F1BA07969C0611F1CCB7C08A731EA2CC76FF",
        To : 'ahelinandy01@gmail.com',
        From : "ahelinandy01@gmail.com",
        Subject : emailSub,
        Body : messageBody
    }).then(
      message => {
          if(message=='OK'){
              swal("Sucessful", "Message sent to Aheli", "success");
          }
          else{
              swal("Error", "You clicked the button!", "error");
          }
      }
    );
    }