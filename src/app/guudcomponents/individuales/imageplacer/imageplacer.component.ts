import { Component, Input } from '@angular/core';
import {KeyValue} from '@angular/common';

declare function SVGInject(data):any;

@Component({
  selector: 'guud-imageplacer',
  templateUrl: './imageplacer.component.html',
  styleUrls: ['./imageplacer.component.scss']
})
export class ImageplacerComponent {
  constructor() { }
  _imageList:any;
  _centerDisplay:any;
  _mobilekeys:any;
  @Input() set mobilekeys(list:any){this._mobilekeys=list;}
  @Input() set imageList(list:any){
    this._imageList=list;
    this._centerDisplay = [...list.grupocentral.files, ...list.grupomysc.files];
    setTimeout(() => {
      this._startAnimation();
    }, 777);
  }
  _checktype(data:any, filename:string){
    if(filename.indexOf('.svg')>=0){
      SVGInject(data.srcElement);
    }
  }

  _startAnimation() {
    //Ignora logos
    var logo1: any = document.querySelector("[id='logo']");
    var logo2: any = document.querySelector("[id='logobottom']");
    $(logo1).addClass("nohover");
    $(logo2).addClass("nohover");
    //Anima primer icono
    var inicial: any = document.querySelector("[id='webphrase0']");
    $(inicial).addClass("fadeToBlue");
    setTimeout(() => {
      $(inicial).removeClass("fadeToBlue");
    }, 3500);
    //Anima primer icono
    var inicial: any = document.querySelector("[id='mobphrase0']");
    $(inicial).addClass("fadeToBlue");
    setTimeout(() => {
      $(inicial).removeClass("fadeToBlue");
    }, 3500);

    setInterval(() => {
      var randfade = Math.floor(Math.random() * 6) / 2;
      var fadecolors = ["fadeToRed", "fadeToBlue", "fadeToGreen"];
      var nextAnimation = Math.floor(Math.random() * 22);
      var ref: any = document.querySelector("[id='webphrase" + nextAnimation + "']");
      //if (!$(ref).hasClass(fadecolors[randfade])) {
        $(ref).addClass(fadecolors[randfade]);
        setTimeout(() => {
          $(ref).removeClass(fadecolors[randfade]);
        }, 3500);
      //}
    }, 3000);
  }
}
