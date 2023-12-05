import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'guudview-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
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
