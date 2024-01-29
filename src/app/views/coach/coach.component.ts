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
        src: $localize`https://d2lhr769yt64fs.cloudfront.net/videos/rutinas/38faa3dd-7c3d-48ac-a2ad-fcfdcaf7c20f.mp4`
      });
    }else if(window.innerWidth > 710 && this.videoShown != 'webview'){
      this.videoShown = 'webview';
      this.myPlayer.src({
        type: "video/mp4",
        src: $localize`https://d2lhr769yt64fs.cloudfront.net/videos/rutinas/90cdfab9-bd5b-48ea-b7ee-7f0c6e223d3b.mp4`
      });
    }
  }

  _apply:boolean=true;
  @Input() set _applyshadow(apply:boolean){this._apply=apply;}
}
