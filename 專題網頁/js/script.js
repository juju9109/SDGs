 // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  $(document).ready(function(){



  const firebaseConfig = {
    apiKey: "AIzaSyAlDV863jkpleL5OeW8jzB41LvR3bkcH1o",
    authDomain: "testt-394ec.firebaseapp.com",
    projectId: "testt-394ec",
    storageBucket: "testt-394ec.appspot.com",
    messagingSenderId: "938684482811",
    appId: "1:938684482811:web:c8a141d6f29a5235e11c5e",
    measurementId: "G-2SXZRQWHHN"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  let db=app.firestore();
  let usersRef=db.collection("users");
  usersRef.doc("2023").set({
"name":"a",
"age":27,
  })

})