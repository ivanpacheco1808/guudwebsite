import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Observable, Subject  } from 'rxjs';
import { takeUntil } from "rxjs/operators";
import { GuudapiService } from '@services/guudapi.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'guudapp-modales',
  templateUrl: './modales.component.html',
  styleUrls: ['./modales.component.scss']
})
export class ModalesComponent implements OnInit, OnDestroy {
  _controller=environment.modalmodel;
  modalstatus='modalactive';

  componentDestroyed$: Subject<boolean> = new Subject();
  ngOnInit(): void {}
  ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
  constructor(private _guudapi: GuudapiService) {
    _guudapi.modalcontroller(true)?.subscribe(controll=>{
      controll.type as any ?this.modalstatus='modalactive':this.modalstatus='closed';
      if(controll.type){
        this._controller=controll;
      }
    });

    this._controller.type = 'formsubmit' as any;
  }


  _close(){
    switch (this._controller.type as any) {
      case 'formsubmit':
        this._guudapi.modalcontroller(false, false);
        setTimeout(() => {
          location.reload();
        }, 113);
        break;
    }
  }

}
