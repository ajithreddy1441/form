
const firebaseConfig = {
  apiKey: "AIzaSyD6KsqKA6ORO73KgpQiPEmPDKk1CDpdaeE",
  authDomain: "form-e78b6.firebaseapp.com",
  databaseURL: "https://form-e78b6-default-rtdb.firebaseio.com",
  projectId: "form-e78b6",
  storageBucket: "form-e78b6.appspot.com",
  messagingSenderId: "414462490288",
  appId: "1:414462490288:web:b4a7191b16b79895946d75"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);


  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};