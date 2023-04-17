import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'guudview-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainviewComponent {
  _apply:boolean=true;
  @Input() set _applyshadow(apply:boolean){this._apply=apply;}

  constructor() { }

}
