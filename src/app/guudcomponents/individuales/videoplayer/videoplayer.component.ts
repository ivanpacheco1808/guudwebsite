import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'guud-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent {
  data:any = false;
  @Input() set _data(data: any) {
    this.data=data;
  };

  constructor() {  }
}
