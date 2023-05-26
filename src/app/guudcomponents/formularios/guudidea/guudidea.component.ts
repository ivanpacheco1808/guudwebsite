import { Component, OnInit } from '@angular/core';
import { GuudapiService } from '@services/guudapi.service';

@Component({
  selector: 'guudform-guudidea',
  templateUrl: './guudidea.component.html',
  styleUrls: ['./guudidea.component.scss']
})
export class GuudideaComponent implements OnInit {

  constructor(private _guudapi: GuudapiService) {}

  ngOnInit(): void { }

  mailSubject = $localize`New Lead Supplier`;
  dataFormat: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    filename: ''
  };

  _setfiles(e: any) {
    this.dataFormat.filename = e.target.files[0].name;
  }

  _checkvalid() {
    var isinvalid = false;
    isinvalid = this.dataFormat.firstName == '' ? true : isinvalid;
    isinvalid = this.dataFormat.phone == '' ? true : isinvalid;
    isinvalid = this.dataFormat.filename == '' ? true : isinvalid;

    return isinvalid;
  }

  _submit(form: any) {
    //this._guudapi.SendEmail(form, this.mailSubject);
    /*this._guudapi.MakeRequest('guudidea', form).subscribe(res => {
      this._guudapi.modalcontroller(false, { type: 'formsubmit', data: res });
    }, err => {
      if (err.error.statusCode == 400)
        this._guudapi.modalcontroller(false, { type: 'messageDisplay', data: err.error.messages });
    });*/
  }

}
