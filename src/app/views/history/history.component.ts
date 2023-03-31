import { Component, Input } from '@angular/core';

@Component({
  selector: 'guudview-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  constructor() { }
  _apply:boolean=true;
  @Input() set _applyshadow(apply:boolean){this._apply=apply;}
}
