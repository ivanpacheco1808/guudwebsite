import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guudform-besupplier',
  templateUrl: './besupplier.component.html',
  styleUrls: ['./besupplier.component.scss']
})
export class BeSupplierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataFormat:any = {
    firstName: null,
    lastName: null,
    product: null,
    productImage: null,
    email: null,
    phone: null,
    filename:null
  };

  _setfiles(e:any){
    this.dataFormat.filename = e.target.files[0].name;
  }

}
