import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sectionlist=[
    {nombre: 'PRODUCTO A', id:'001', color: 'blue'},
    {nombre: 'PRODUCTO B', id:'002', color: 'green'}
  ];
}
