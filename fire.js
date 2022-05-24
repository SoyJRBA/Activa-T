var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {

  apiKey: "AIzaSyCc5hRrHouvVEYwfwFwxOVeK0WQ6BHT5TA",
  authDomain: "activa-t-1401b.firebaseapp.com",
  databaseURL: "https://activa-t-1401b-default-rtdb.firebaseio.com",
  projectId: "activa-t-1401b",
  storageBucket: "activa-t-1401b.appspot.com",
  messagingSenderId: "517239434172",
  appId: "1:517239434172:web:5cfde546746f8e5d8b59b9",
  measurementId: "G-H7KBX9L2R2"
};
const fire = firebase.initializeApp(config);
module.exports = fire;