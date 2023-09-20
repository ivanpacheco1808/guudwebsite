import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
    apiKey: "AIzaSyDRfjHCjxIetIyiKDpUpUgG4M7inZkZY0w",
    authDomain: "guud-cbea8.firebaseapp.com",
    projectId: "guud-cbea8",
    storageBucket: "guud-cbea8.appspot.com",
    messagingSenderId: "211510105763",
    appId: "1:211510105763:web:ec2ceb9d70d6f1b5121116",
    measurementId: "G-JB1XP5Q8CX"
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);



  routerEvents: any;
  currentRoute:string;
  isMobile:boolean = false;
  constructor(private router: Router) {
    this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    this.routerEvents = this.router.events.subscribe(
      (event:any)=>{
        if(event instanceof NavigationEnd){
          this.currentRoute=event.url;
        }
      }
    )
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.routerEvents.unsubscribe();
    // Unsubscribe to avoid memory leak
  }
}
