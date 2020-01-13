let username;
let email;
let password;

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



function login(){
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;
  
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, password);

  promise.catch(e => alert(e.message));

}



// Add a realtime Listner for user data
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    document.getElementById('info').style.display = 'none'
  }
  else{
    console.log('not logged in');
  }
})


function logoOut(){
  firebase.auth().signOut();
  location.reload();
}