import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guud';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig = {
    apiKey: "AIzaSyAyULh1nMD8IT4ThefHws0GfzotiHdu8qk",
    authDomain: "guudlanding.firebaseapp.com",
    projectId: "guudlanding",
    storageBucket: "guudlanding.appspot.com",
    messagingSenderId: "103877281107",
    appId: "1:103877281107:web:fcd65e3527c17ad6498da6",
    measurementId: "G-LFCQPTB2L0"
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
}
