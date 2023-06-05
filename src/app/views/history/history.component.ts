import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'guudview-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  constructor() { }
  ngOnInit(){
    setTimeout(() => {
      (<any>document.querySelector('#videoplayerhistory')).play();
    }, 777);
  }
  _apply:boolean=true;
  @Input() set _applyshadow(apply:boolean){this._apply=apply;}
}
