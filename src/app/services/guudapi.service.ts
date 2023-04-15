import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpEventType, HttpEvent } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Router } from '@angular/router';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuudapiService {

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET"
    })
  };

  constructor(private http: HttpClient, private router: Router) { }

  SendEmail(maildata:any, subject:string){

    var mailTitle = $localize`Registered Data`;
    var mailForm = {
      to: 'duran.narum@gmail.com',
      from: 'hola@guud.life',
      subject: subject,
      html: '<strong>'+mailTitle+':</strong><br>'
    };
    mailForm.html += '<ul>';
    for(let key of Object.keys(maildata)){
      mailForm.html += '<li>'+key+': '+maildata[key]+'</li>';
    }
    mailForm.html += '</ul>';


    /*sgMail.send(mailForm).then(() => {
      this.modalcontroller(false, {type: 'formsubmit', data: mailForm.html});
    }).catch((error)=> {
      console.log(error);
    });*/

  }




  _modalcontroller: any = environment.modalmodel;
  private _gmodalcontroller: BehaviorSubject<any> = new BehaviorSubject(this._modalcontroller);
  modalcontroller(...args: any) {
    this._modalcontroller = (args[1] != null) ? args[1] : this._modalcontroller;
    this._gmodalcontroller.next(this._modalcontroller);
    if (args[0]) {
      return this._gmodalcontroller.asObservable();
    }
    return null;
  }
}
