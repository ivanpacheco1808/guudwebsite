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
    window.location.pathname = "/"+lang+window.location.pathname;
  }
}
