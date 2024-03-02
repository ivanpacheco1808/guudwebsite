import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'guudview-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit, OnDestroy {
  constructor() { }
  innerWidth: any;
  innerHeight: any;
  videoH = $localize`https://d2lhr769yt64fs.cloudfront.net/DEV/introduccion/c91b83c4-b5e2-4da8-a5b9-39fdd150e9af.mp4`;
  videoV = $localize`https://d2lhr769yt64fs.cloudfront.net/DEV/introduccion/f0562d34-8291-4e37-b1c1-7fcbf35df416.mp4`;

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

  _apply:boolean=true;
  @Input() set _applyshadow(apply:boolean){this._apply=apply;}
}
