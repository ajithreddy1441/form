
  const firebaseConfig = {
    apiKey: "AIzaSyAZhN1BlqZDhlsBTy81eQ2qNF9vpcFvcOo",
    authDomain: "registration-form-dd3f6.firebaseapp.com",
    databaseURL: "https://registration-form-dd3f6-default-rtdb.firebaseio.com",
    projectId: "registration-form-dd3f6",
    storageBucket: "registration-form-dd3f6.appspot.com",
    messagingSenderId: "65174875042",
    appId: "1:65174875042:web:fc3db5e1e2c5f328e720fb"
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