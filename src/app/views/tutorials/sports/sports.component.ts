import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'guudview-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit, OnDestroy {
  constructor() { }
  innerWidth: any;
  innerHeight: any;
  videoH = $localize`https://d2lhr769yt64fs.cloudfront.net/videos/rutinas/c27ed809-d673-4e3c-b013-1f5faf400357.mp4`;
  videoV = $localize`https://d2lhr769yt64fs.cloudfront.net/videos/rutinas/817c70da-40ad-4e33-a43c-d5e1b6fd0bce.mp4`;

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
