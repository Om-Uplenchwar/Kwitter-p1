var firebaseConfig = {
    apiKey: "AIzaSyCmFhpbOsPUKbKglVl3cJaiKQiJPEhxy6w",
    authDomain: "kwitter-516d8.firebaseapp.com",
    databaseURL: "https://kwitter-516d8-default-rtdb.firebaseio.com",
    projectId: "kwitter-516d8",
    storageBucket: "kwitter-516d8.appspot.com",
    messagingSenderId: "140384816756",
    appId: "1:140384816756:web:330d031bac2c783cdb4b21",
    measurementId: "G-S8ED45HD98"
};
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();
