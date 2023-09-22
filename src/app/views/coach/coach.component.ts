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
  public videoShown = 'webview';
  public myPlayer;
  ngOnDestroy(){
    this.myPlayer.dispose();
  }
  ngOnInit() {
    this.myPlayer = amp('videoplayerhistory', {
      autoplay: true,
      controls: true
    });
    this.myPlayer.src({
      type: "application/vnd.apple.mpegurl",
      src: "https://epcsguudprod-guudvideo2-usea.streaming.media.azure.net/4c8f2efc-874b-49dc-bffc-eb3a0609e4cc/tmp2300.ism/manifest(format=m3u8-aapl)"
    });
    setTimeout(() => {
      this.setVideoByScreenSize();
    }, 222);
  }
  setVideoByScreenSize(){
    if(window.innerWidth <= 710 && this.videoShown != 'mobview'){
      this.videoShown = 'mobview';
      this.myPlayer.src({
        type: "application/vnd.apple.mpegurl",
        src: "https://epcsguudprod-guudvideo2-usea.streaming.media.azure.net/41ae4036-85da-41ba-b076-9172b499758e/tmpEC76.ism/manifest(format=m3u8-aapl)"
      });
    }else if(window.innerWidth > 710 && this.videoShown != 'webview'){
      this.videoShown = 'webview';
      this.myPlayer.src({
        type: "application/vnd.apple.mpegurl",
        src: "https://epcsguudprod-guudvideo2-usea.streaming.media.azure.net/4c8f2efc-874b-49dc-bffc-eb3a0609e4cc/tmp2300.ism/manifest(format=m3u8-aapl)"
      });
    }
  }

  _apply:boolean=true;
  @Input() set _applyshadow(apply:boolean){this._apply=apply;}
}
