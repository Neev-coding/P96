const firebaseConfig = {
    apiKey: "AIzaSyB0afv2n0Bi0EzOhvDoqIgciBgwIfitHe8",
    authDomain: "lets-chat-322ee.firebaseapp.com",
    databaseURL: "https://lets-chat-322ee-default-rtdb.firebaseio.com",
    projectId: "lets-chat-322ee",
    storageBucket: "lets-chat-322ee.appspot.com",
    messagingSenderId: "324418889768",
    appId: "1:324418889768:web:64c6863f8d4df586056d1d",
    measurementId: "G-JFNVF90519"
  };
  

  const app = initializeApp(firebaseConfig);
  var user_name=localStorage.getItem("user_name")
  
  function AddRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";}
    function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
  
  
  function getData() {
    firebase.database().ref("/").on('value',
function(snapshot) {
  document.getElementById("output").innerHTML ="";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
function redirectToRoomName(name){
  console.log(name);
  row="<div class='room_name'id=" + Room_names +"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
  

};});}
,);}getData()

function Logout(){
  localStorage.removeItem(room_name);
  localStorage.removeItem(user_name);
  window.location="index.html"
}}
