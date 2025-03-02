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
    if(window.location.pathname.indexOf('/en/') == 0){
      window.location.pathname = window.location.pathname.replace('/en/', '/'+lang+'/');
    }else if(window.location.pathname.indexOf('/esMX/') == 0){
      window.location.pathname = window.location.pathname.replace('/esMX/', '/'+lang+'/');
    }else{
      window.location.pathname = '/'+lang+window.location.pathname;
    }
  }
}
