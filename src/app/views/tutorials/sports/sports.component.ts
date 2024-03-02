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
  videoH = $localize`https://d2lhr769yt64fs.cloudfront.net/DEV/introduccion/6ba3f245-8017-47af-8954-72083e4cfdb2.mp4`;
  videoV = $localize`https://d2lhr769yt64fs.cloudfront.net/DEV/introduccion/721e11ec-6657-42e6-a6a9-4443ab379647.mp4`;

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
