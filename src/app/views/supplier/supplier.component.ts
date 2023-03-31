import { Component, Input } from '@angular/core';

@Component({
  selector: 'guudview-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent {
  constructor() { }
  _apply:boolean=true;
  @Input() set _applyshadow(apply:boolean){this._apply=apply;}
}
