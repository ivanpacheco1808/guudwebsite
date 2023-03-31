import { Component, Input } from '@angular/core';
import { KeyValue } from '@angular/common';

declare function SVGInject(data): any;

@Component({
  selector: 'guud-imageplacer',
  templateUrl: './imageplacer.component.html',
  styleUrls: ['./imageplacer.component.scss']
})
export class ImageplacerComponent {
  constructor() { }
  _imageList: any;
  _mobilekeys: any;
  _rotation: any = {
    web: []
  };
  _fadecolors = ["fadeToRed", "fadeToBlue", "fadeToGreen"];
  @Input() set mobilekeys(list: any) { this._mobilekeys = list; }
  @Input() set imageList(list: any) {
    //Parametros Iniciales
    this._imageList = list;

    //MainView
    for (let key of this._mobilekeys) {
      for (let data of list[key].files) {
        if (data.alt != 'phrase0') {
          this._rotation.web.push(data.alt);
        }
      }
    };
    for (let data of list.grupomysc.files) {
      if (data.alt != 'phrase0') {
        this._rotation.web.push(data.alt);
      }
    }
    this._rotation.web.push('phrase0');

    //Animaciones
    setTimeout(() => {
      //Anima primer icono
      var rindx = Math.floor((Math.random() * 6) / 2);
      var inicialweb: any = document.querySelector("[id='webphrase0']");
      $(inicialweb).addClass(this._fadecolors[rindx]);
      setTimeout(() => {
        $(inicialweb).removeClass(this._fadecolors[rindx]);
      }, 3500);
      this._startMobAnimation();
      this._startWebAnimation();
    }, 777);
  }

  _startWebAnimation() {
    setInterval(() => {
      var randfade = Math.floor((Math.random() * 6) / 2);
      var rindx = Math.floor(Math.random() * (this._rotation.web.length - 2));
      var ref: any = document.querySelector("[id='web" + this._rotation.web[rindx] + "']");
      this._rotation.web.push(this._rotation.web[rindx]);
      this._rotation.web.splice(rindx, 1);

      $(ref).addClass(this._fadecolors[randfade]);
      setTimeout(() => {
        $(ref).removeClass(this._fadecolors[randfade]);
      }, 3500);

    }, 3000);
  }

  _switchgroup(group:string) {
    var rindx = Math.floor(Math.random() * (this._imageList[group].files.length - 2));
    var lastalt = this._imageList[group].files[this._imageList[group].files.length-1].alt;
    var lastref: any = document.querySelector("[id='mob" + lastalt + "']");
    var nextalt = this._imageList[group].files[rindx].alt;
    var nextref: any = document.querySelector("[id='mob" + nextalt + "']");

    var randfade = Math.floor((Math.random() * 6) / 2);
    $(lastref).addClass(this._fadecolors[randfade]);
    setTimeout(() => {
      $(lastref).removeClass(this._fadecolors[randfade]);
    }, 3500);
    setTimeout(() => {
      $(lastref).removeClass('ondisplay');
      setTimeout(() => {
        $(nextref).addClass('ondisplay');
      }, 500);
    }, 4000);

    /*
      demo.push(demo[3]);
      demo.splice(3, 1);
      console.log(demo);
    */
    this._imageList[group].files.push(this._imageList[group].files[rindx]);
    this._imageList[group].files.splice(rindx, 1);
    this._mobilekeys.push(this._mobilekeys[this._mobilekeys.indexOf(group)]);
    this._mobilekeys.splice(this._mobilekeys.indexOf(group), 1);
  }

  _startMobAnimation() {
    this._switchgroup('grupod');
    setInterval(()=> {
      var selectedcat = this._mobilekeys[Math.floor(Math.random() * (this._mobilekeys.length-2))];
      this._switchgroup(selectedcat);
    }, 3000);
  }

  _checktype(data: any, filename: string) {
    if (filename.indexOf('.svg') >= 0) {
      SVGInject(data.srcElement);
    }
  }

}
