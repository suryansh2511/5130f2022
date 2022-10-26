const firebaseConfig = {
    apiKey: "AIzaSyDI-lWIbN7oqpbGSFT06LB3nq6eLt6ydAc",
    authDomain: "iwsassignment.firebaseapp.com",
    databaseURL: "https://iwsassignment-default-rtdb.firebaseio.com",
    projectId: "iwsassignment",
    storageBucket: "iwsassignment.appspot.com",
    messagingSenderId: "54431360629",
    appId: "1:54431360629:web:d21bd1f735e2a1860b3a3c"
  };
  
  // initialize firebase
 firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e){
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("email");
    var msgContent = getElementVal("message");
    var getype = getElementVal("type");
    var getgender = getElementVal("gender");
    var getfile = getElementVal("file");
  
    saveMessages(name, emailid, msgContent, getype, getgender, getfile);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent, getype, getgender, getfile) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
      getype: getype,
      getgender: getgender,
      getfile: getfile,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };