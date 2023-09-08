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
      type: "application/vnd.apple.mpegurl",
      //src: "https://guudvideo2-usea.streaming.media.azure.net/88ba8898-f0c7-48eb-b138-bdf267589411/HistoriaGUUD.ism/manifest(format=m3u8-cmaf)"
      src: "https://guudvideo2-usea.streaming.media.azure.net/d49f3aa9-9a42-45e8-9112-a3da0a7dae0c/tmpB54A.ism/manifest(format=m3u8-aapl)"
      //src: "https://epcsguudprod-guudvideo2-usea.streaming.media.azure.net/4c8f2efc-874b-49dc-bffc-eb3a0609e4cc/tmp2300.ism/manifest(format=m3u8-aapl)"
    });

  }
  _apply: boolean = true;
  @Input() set _applyshadow(apply: boolean) { this._apply = apply; }
}
