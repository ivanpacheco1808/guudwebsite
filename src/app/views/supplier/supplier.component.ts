import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

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
