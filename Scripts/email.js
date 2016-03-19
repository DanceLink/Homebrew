var emailAddress = document.getElementById("inputEmail").toString();
var subject = document.getElementById("inputSubject").toString();//.replace(" ", "%20");
var messageBody = document.getElementById("inputBody").toString();//.replace(" ", "%20");
var submit = document.getElementById("sendEmail");

function submitform(){
  submit.href = "mailto:developer.awright@hotmail.com?Subject=" + subject + "&body=" + messageBody + "&cc=" + emailAddress;
  console.log("Email Address: " + emailAddress);
  console.log("Subject Line: " + subject);
  console.log("Message Body: " + messageBody);
  console.log(submit.href);
  //document.myForm.submit();
};
