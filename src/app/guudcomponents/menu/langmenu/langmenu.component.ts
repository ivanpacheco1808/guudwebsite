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
    var route:string = window.location.pathname.toString();
    route.replaceAll("/en/", "/");
    route.replaceAll("/es/", "/");

    window.location.pathname = "/"+lang+route;
  }
}
