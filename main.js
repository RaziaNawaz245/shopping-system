var firebaseConfig = {
    apiKey: "AIzaSyBD5Jyuv_-mu2TUz9Htm75M0-VN5SXczIs",
    authDomain: "abproject-4fc36.firebaseapp.com",
    databaseURL: "https://abproject-4fc36-default-rtdb.firebaseio.com",
    projectId: "abproject-4fc36",
    storageBucket: "abproject-4fc36.appspot.com",
    messagingSenderId: "226730663996",
    appId: "1:226730663996:web:c96b1dd27a02160b65a339",
    measurementId: "G-3HN5NZ33G7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
 var name = getInputVal('name');
 
  var gender = getInputVal('gender');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  

  // Save message
  saveMessage(name, gender, email, phone);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, gender, email, phone){
  var newMessageRef = messagesRef.push();
   newMessageRef.set({
     name: name,
     gender:gender,
     email:email,
     phone:phone
    
  });
}