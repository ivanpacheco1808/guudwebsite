import { Component, OnInit } from '@angular/core';
import { GuudapiService } from '@services/guudapi.service';

@Component({
  selector: 'guudform-becoach',
  templateUrl: './becoach.component.html',
  styleUrls: ['./becoach.component.scss']
})
export class BeCoachComponent implements OnInit {
  mailSubject= $localize`New Lead Coach`;
  dataFormat:any = {
    firstName: '',
    lastName: '',
    special: '',
    instagram: '',
    tiktok: '',
    email: '',
    phone: ''
  };

  constructor(private _guudapi: GuudapiService) { }

  ngOnInit(): void {}

  _checkvalid(){

    var isinvalid = false;
    isinvalid = this.dataFormat.firstName == '' ? true : isinvalid;
    isinvalid = this.dataFormat.lastName == '' ? true : isinvalid;
    isinvalid = this.dataFormat.phone == '' ? true : isinvalid;

    isinvalid = this.dataFormat.instagram == '' && this.dataFormat.tiktok == '' ? true : isinvalid;

    return isinvalid;
  }

  _submit(form:any){
    //this._guudapi.SendEmail(form, this.mailSubject);
    this._guudapi.MakeRequest('coach', form).subscribe(res =>{
      this._guudapi.modalcontroller(false, {type: 'formsubmit', data: res});
    }, err => {
      if(err.error.statusCode == 400)
        this._guudapi.modalcontroller(false, {type: 'messageDisplay', data: err.error.messages});
    });
  }

}
