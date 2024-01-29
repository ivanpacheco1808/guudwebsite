import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'guudview-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy {
  constructor() { }
  innerWidth: any;
  innerHeight: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

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
      type: "video/mp4",
      src: $localize`https://d2lhr769yt64fs.cloudfront.net/videos/introduccion/9b88ccd5-2e9d-45ec-8c12-8eca32f3d633.mp4`
    });

  }
  _apply: boolean = true;
  @Input() set _applyshadow(apply: boolean) { this._apply = apply; }
}
