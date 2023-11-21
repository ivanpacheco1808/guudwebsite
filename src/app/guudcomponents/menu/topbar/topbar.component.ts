import { Component, Input } from '@angular/core';

@Component({
  selector: 'guud-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @Input() isMobile:boolean=false;
  @Input() currentRoute:string;
  constructor() { }

}
