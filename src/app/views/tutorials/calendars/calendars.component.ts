import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'guudview-calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.scss']
})
export class CalendarsComponent implements OnInit, OnDestroy {
  constructor() { }
  innerWidth: any;
  innerHeight: any;
  videoH = $localize`https://d2lhr769yt64fs.cloudfront.net/DEV/introduccion/a9b800db-adc7-4975-8063-0f827d714306.mp4`;
  videoV = $localize`https://d2lhr769yt64fs.cloudfront.net/DEV/introduccion/a69f62a9-34da-41db-bbee-d018011c9b75.mp4`;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.setVideoByScreenSize();
  }
  public videoShown = '';
  public myPlayer;
  ngOnDestroy(){
    this.myPlayer.dispose();
  }
  ngOnInit() {
    this.myPlayer = amp('videoplayerhistory', {
      autoplay: true,
      controls: true
    });
    this.setVideoByScreenSize();
  }
  setVideoByScreenSize(){
    if(window.innerWidth <= 710 && this.videoShown != 'mobview'){
      this.videoShown = 'mobview';
      this.myPlayer.src({
        type: "video/mp4",
        src: this.videoV
      });
    }else if(window.innerWidth > 710 && this.videoShown != 'webview'){
      this.videoShown = 'webview';
      this.myPlayer.src({
        type: "video/mp4",
        src: this.videoH
      });
    }
  }
  _apply: boolean = true;
  @Input() set _applyshadow(apply: boolean) { this._apply = apply; }
}
