
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBPbZRKkfE2kGVgsPgmD48fpF39CyLSJnA",
      authDomain: "class-93kwitter.firebaseapp.com",
      databaseURL: "https://class-93kwitter-default-rtdb.firebaseio.com",
      projectId: "class-93kwitter",
      storageBucket: "class-93kwitter.appspot.com",
      messagingSenderId: "141479016316",
      appId: "1:141479016316:web:a1931b822784be7d6bd6f9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
         //Start code

      //End code
      });});}
getData();
