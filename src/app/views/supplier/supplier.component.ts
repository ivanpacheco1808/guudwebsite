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

  filename='';
  _setfiles(e:any){
    this.filename = e.target.files[0].name;
  }
}
