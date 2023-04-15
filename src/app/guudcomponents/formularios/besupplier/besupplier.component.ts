import { Component, OnInit } from '@angular/core';
import { GuudapiService } from '@services/guudapi.service';

@Component({
  selector: 'guudform-besupplier',
  templateUrl: './besupplier.component.html',
  styleUrls: ['./besupplier.component.scss']
})
export class BeSupplierComponent implements OnInit {

  constructor(public _guudapi: GuudapiService) { }

  ngOnInit(): void {
  }

  dataFormat:any = {
    firstName: '',
    lastName: '',
    product: '',
    productImage: '',
    email: '',
    phone: '',
    filename:''
  };

  _setfiles(e:any){
    this.dataFormat.filename = e.target.files[0].name;
  }

  _checkvalid(){
    var isinvalid = false;
    isinvalid = this.dataFormat.firstName == '' ? true : isinvalid;
    isinvalid = this.dataFormat.product == '' ? true : isinvalid;
    isinvalid = this.dataFormat.phone == '' ? true : isinvalid;

    return isinvalid;
  }

}
