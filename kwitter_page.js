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

  user_name=document.getElementById("user_name").value;
  room_name=document.getElementById("room_name").value;
  function Send(){
    Msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:Msg,
    like:0
    });
    document.getElementById("msg").value="";
    }
    