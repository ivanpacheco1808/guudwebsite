import { Component, Input } from '@angular/core';

@Component({
  selector: 'guudview-caring',
  templateUrl: './caring.component.html',
  styleUrls: ['./caring.component.scss']
})
export class CaringComponent {
  constructor() { }
  _apply:boolean=true;
  @Input() set _applyshadow(apply:boolean){this._apply=apply;}
}
