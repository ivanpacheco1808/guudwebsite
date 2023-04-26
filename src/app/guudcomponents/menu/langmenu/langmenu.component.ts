import { Component } from '@angular/core';

@Component({
  selector: 'guud-langmenu',
  templateUrl: './langmenu.component.html',
  styleUrls: ['./langmenu.component.scss']
})
export class LangmenuComponent {
  _langmenuOpened:boolean=false;

  constructor() { }

  changeLang(lang:string){
    var route:any = window.location.pathname.toString();
    route.replaceAll("/en/", "/");
    route.replaceAll("/es/", "/");

    window.location.pathname = "/"+lang+route;
  }
}
