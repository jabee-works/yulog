import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC8xutq7TZEaAN-aP4X8NmtwiL8Txh-TFY",
  authDomain: "jabee-works.firebaseapp.com",
  databaseURL: "https://jabee-works.firebaseio.com",
  projectId: "jabee-works",
  storageBucket: "jabee-works.appspot.com",
  messagingSenderId: "222923581837",
  appId: "1:222923581837:web:6ecccd76699a92b2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);