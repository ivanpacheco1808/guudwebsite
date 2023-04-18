import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'guud-imageplacer',
  templateUrl: './imageplacer.component.html',
  styleUrls: ['./imageplacer.component.scss']
})
export class ImageplacerComponent implements OnDestroy, OnInit {
  _rotation: any = {
    web: ['phrase9', 'phrase13', 'arrow1', 'arrow2', 'arrow3', 'arrow4', 'arrow5', 'phrase1', 'phrase15', 'phrase8', 'phrase2', 'phrase17', 'phrase20', 'phrase10', 'phrase11', 'phrase18', 'phrase6', 'phrase4', 'phrase16', 'phrase0', 'phrase5', 'phrase12', 'phrase14', 'phrase7', 'phrase19', 'phrase21', 'phrase3']
  };
  _fadecolors = ["fadeToRed", "fadeToBlue", "fadeToGreen"];
  ngOnInit() {
    this._startMobAnimation();
    this._startWebAnimation();
  }

  ngOnDestroy() {
    clearInterval(this._webInterval)
    clearInterval(this._mobInterval)
  }
  constructor() { }

  _webInterval: any;
  _startWebAnimation() {
    //Anima primer icono
    var rindx = Math.floor((Math.random() * 6) / 2);
    var inicialweb: any = document.querySelector("[id='webphrase0']");
    $(inicialweb).addClass(this._fadecolors[rindx]);
    setTimeout(() => {
      $(inicialweb).removeClass(this._fadecolors[rindx]);
    }, 3500);

    this._webInterval = setInterval(() => {
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

  _mobInterval: any;
  _startMobAnimation() {
    this._switchgroup('grupod');
    this._mobInterval = setInterval(() => {
      var selectedcat = this._mobilekeys[Math.floor(Math.random() * (this._mobilekeys.length - 2))];
      this._switchgroup(selectedcat);
    }, 3000);
  }

  _switchgroup(group: string) {
    var rindx = Math.floor(Math.random() * (this._imageList[group].files.length - 2));
    var lastalt = this._imageList[group].files[this._imageList[group].files.length - 1].alt;
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

  _mobilekeys = ['grupoa', 'grupob', 'grupoc', 'grupod', 'grupoe', 'grupof'];
  _imageList = {
    //GRUPOS DE VISION MOBILE - GRUPOS DE VISION MOBILE - GRUPOS DE VISION MOBILE
    grupocentral: {files: [{ alt: 'logo' },{ alt: 'logobottom' },]},
    //  NO MOBILE NO MOBILE
    grupomysc: {files: [{ alt: 'phrase9' },{ alt: 'phrase13' },{ alt: 'arrow1' },{ alt: 'arrow2' },{ alt: 'arrow3' },{ alt: 'arrow4' },{ alt: 'arrow5' },]},

    //GRUPO A - GRUPO A - GRUPO A - GRUPO A - GRUPO A - GRUPO A - GRUPO A - GRUPO A
    grupoa: {files: [{ alt: 'phrase1' },{ alt: 'phrase15' },{ alt: 'phrase8' },]},
    //GRUPO B - GRUPO B - GRUPO B - GRUPO B - GRUPO B - GRUPO B - GRUPO B - GRUPO B
    grupob: {files: [{ alt: 'phrase2' },{ alt: 'phrase17' },{ alt: 'phrase20' },]},
    //GRUPO C - GRUPO C - GRUPO C - GRUPO C - GRUPO C - GRUPO C - GRUPO C - GRUPO C
    grupoc: {files: [{ alt: 'phrase10' },{ alt: 'phrase11' },{ alt: 'phrase18' },{ alt: 'phrase6' },]},
    //GRUPO D - GRUPO D - GRUPO D - GRUPO D - GRUPO D - GRUPO D - GRUPO D - GRUPO D
    grupod: {files: [{ alt: 'phrase4' },{ alt: 'phrase16' },{ alt: 'phrase0' },]},
    //GRUPO E - GRUPO E - GRUPO E - GRUPO E - GRUPO E - GRUPO E - GRUPO E - GRUPO E
    grupoe: {files: [{ alt: 'phrase5' },{ alt: 'phrase12' },{ alt: 'phrase14' },{ alt: 'phrase7' },]},
    //GRUPO F - GRUPO F - GRUPO F - GRUPO F - GRUPO F - GRUPO F - GRUPO F - GRUPO F
    grupof: {files: [{ alt: 'phrase19' },{ alt: 'phrase21' },{ alt: 'phrase3' },]}
  };

}
