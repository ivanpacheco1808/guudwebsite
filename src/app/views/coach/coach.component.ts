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
        src: "https://d2lhr769yt64fs.cloudfront.net/videos/b17c3425-d63f-4fe4-b09b-5de4a5d80496.mp4"
      });
    }else if(window.innerWidth > 710 && this.videoShown != 'webview'){
      this.videoShown = 'webview';
      this.myPlayer.src({
        type: "video/mp4",
        src: "https://d2lhr769yt64fs.cloudfront.net/videos/introduccion/a5fe8a6d-326a-4b2f-b702-5e57c75dba82.mp4"
      });
    }
  }

  _apply:boolean=true;
  @Input() set _applyshadow(apply:boolean){this._apply=apply;}
}
