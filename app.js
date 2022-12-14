// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, onChildAdded, set } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq79YUJkNCKHq8lCY8qA1YP4ORy5AOyWA",
  authDomain: "chat2022-95998.firebaseapp.com",
  projectId: "chat2022-95998",
  storageBucket: "chat2022-95998.appspot.com",
  messagingSenderId: "102881276407",
  appId: "1:102881276407:web:8a8d002bc1ee6576f33ef2",
  databaseURL:"https://chat2022-95998-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app)

const chatRef = ref(db, '/chat')
const userRef = ref(db, '/user')

var User = document.querySelector("#user")

onChildAdded(chatRef, function (data){
    console.log(data.val())
    
        const message = document.createElement("li")
            message.innerText = 
         User.value +":  "+ data.val();

        list.appendChild(message)
})


const input = document.querySelector("#text")
const list = document.querySelector("ul")

input.addEventListener("keypress", function(event){
    if (event.key == "Enter"){

        const messageId = new Date().toUTCString();

       set(ref(db, "chat/"  + messageId),input.value);
       
       if (input.value != ""){
        
        const audio = new Audio();
        audio.src = "./pop-39222.mp3"
        audio.play();

        input.value = ""
    }
    }
    
});