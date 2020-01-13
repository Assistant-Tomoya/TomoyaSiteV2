
let username;
let email;
let password;
let confirm_password;


// Initialize Firebase
const config = {
    apiKey: "AIzaSyC-dq14LCFEUTbm_hdSLhZ4mCp6SUPWims",
    authDomain: "assistant-tomoya.firebaseapp.com",
    databaseURL: "https://assistant-tomoya.firebaseio.com/",
    projectId: "assistant-tomoya",
    storageBucket: "assistant-tomoya.appspot.com",
    messagingSenderId: "701573625629",
    appId: "1:701573625629:web:fcb60921b9dfef1c8653f4",
    measurementId: "G-WLW9NV86XD"
};
  firebase.initializeApp(config);
  const auth = firebase.auth();
  


function signup(){
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    confirm_password = document.getElementById('confirm_password').value;
    checkpass(email, password, confirm_password);
}



function checkpass(email, password, confirm_password){
    if (password == confirm_password){
        auth.createUserWithEmailAndPassword(email, password);
        alert('done');
        
    }
    else{
        alert("Password did not match.")
    }
}


function createObj(username, email, password){
    let obj = {
        username: username,
        email: email,
        password: password

    }
}