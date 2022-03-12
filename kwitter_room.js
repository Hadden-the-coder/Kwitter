var firebaseConfig = {
      apiKey: "AIzaSyBkJgDTd7gF3hwPxcTaW0bIHAg8jhLmsGs",
      authDomain: "kwitter-284c4.firebaseapp.com",
      databaseURL: "https://kwitter-284c4-default-rtdb.firebaseio.com",
      projectId: "kwitter-284c4",
      storageBucket: "kwitter-284c4.appspot.com",
      messagingSenderId: "512854831772",
      appId: "1:512854831772:web:44808d59ba3df06506f359"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+user_name;

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirect_To_RoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function redirect_To_RoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_room.html";
}