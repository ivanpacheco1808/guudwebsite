import { Component } from '@angular/core';

@Component({
  selector: 'guud-burguermenu',
  templateUrl: './burguermenu.component.html',
  styleUrls: ['./burguermenu.component.scss']
})
export class BurguermenuComponent  {
  _menuOpened:boolean=false;
  activeTutos:boolean=false;
  constructor() { }

}
