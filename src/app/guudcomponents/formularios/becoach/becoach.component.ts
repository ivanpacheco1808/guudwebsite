import { Component, OnInit } from '@angular/core';
import { GuudapiService } from '@services/guudapi.service';

@Component({
  selector: 'guudform-becoach',
  templateUrl: './becoach.component.html',
  styleUrls: ['./becoach.component.scss']
})
export class BeCoachComponent implements OnInit {

  dataFormat:any = {
    firstName: '',
    lastName: '',
    special: '',
    instagram: '',
    tiktok: '',
    email: '',
    phone: ''
  };

  constructor(public _guudapi: GuudapiService) { }

  ngOnInit(): void {
  }

  _checkvalid(){

    var isinvalid = false;
    isinvalid = this.dataFormat.firstName == '' ? true : isinvalid;
    isinvalid = this.dataFormat.lastName == '' ? true : isinvalid;
    isinvalid = this.dataFormat.phone == '' ? true : isinvalid;

    isinvalid = this.dataFormat.instagram == '' && this.dataFormat.tiktok == '' ? true : isinvalid;

    return isinvalid;
  }

}
