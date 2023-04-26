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
  httpDefaultTenant = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET",
      "tenant": "root"
    })
  };

  constructor(private http: HttpClient, private router: Router) { }
  //LLAMADOS DE API/HTTP - LLAMADOS DE API/HTTP - LLAMADOS DE API/HTTP - LLAMADOS DE API/HTTP
  MakeRequest(path: string, data: any, params?:string): any {
    return this.http.post<any>(environment.apiUrl + path + "?" + params, data, this.httpDefaultTenant);
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
