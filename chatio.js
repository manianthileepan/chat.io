//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj7fZTilYT6yyH7SaGgTEJmFfxQcpwHxI",
    authDomain: "chatio-5044a.firebaseapp.com",
    projectId: "chatio-5044a",
    storageBucket: "chatio-5044a.appspot.com",
    messagingSenderId: "320836583357",
    appId: "1:320836583357:web:27b0e7559963aa711adcd4"
  };
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
 
       //End code
       });});}
 getData();
 