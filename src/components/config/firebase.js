<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>
import firebase from 'firebase'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKNM7Vu6B_T-fMOG1c36olKPEJi07hsFU",
    authDomain: "notes-b97a9.firebaseapp.com",
    projectId: "notes-b97a9",
    storageBucket: "notes-b97a9.appspot.com",
    messagingSenderId: "29230866721",
    appId: "1:29230866721:web:f5fd784d85b6affe95de60",
    measurementId: "G-8MR1NQHY32"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics(); 

export default firebase