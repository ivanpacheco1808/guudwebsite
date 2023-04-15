import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guud-langmenu',
  templateUrl: './langmenu.component.html',
  styleUrls: ['./langmenu.component.scss']
})
export class LangmenuComponent implements OnInit {
  _langmenuOpened:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  changeLang(lang:string){
    var route:any = window.location.pathname;
    if(route.indexOf("/en/")>=0){
      route.replaceAll("/en/", "");
      route = '/'+route;
    }

    if(route.indexOf("/es/")>=0){
      route.replaceAll("/es/", "");
      route = '/'+route;
    }

    window.location.pathname = "/"+lang+route;
  }
}
