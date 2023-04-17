import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

declare function SVGInject(data): any;

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
  ngOnInit(){

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

  ngOnDestroy() {
    clearInterval(this._webInterval)
    clearInterval(this._mobInterval)
  }
  _webInterval:any;
  _mobInterval:any;
  constructor() {}
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
/*
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
*/
  }

  _startWebAnimation() {
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
    this._mobInterval = setInterval(()=> {
      var selectedcat = this._mobilekeys[Math.floor(Math.random() * (this._mobilekeys.length-2))];
      this._switchgroup(selectedcat);
    }, 3000);
  }

  _checktype(data: any, filename: string) {
    if (filename.indexOf('.svg') >= 0) {
      SVGInject(data.srcElement);
    }
  }


  _mobilekeys = ['grupoa','grupob','grupoc','grupod','grupoe','grupof'];
  _imageList = {
    //GRUPOS DE VISION MOBILE - GRUPOS DE VISION MOBILE - GRUPOS DE VISION MOBILE
    grupocentral:{
      files:[
        { filename: 'logo-Guud.png', alt: 'logo' },
        { filename: 'Frase-23.svg', alt: 'logobottom' },
      ]
    },
    grupomysc:{
      files:[
        //  NO MOBILE NO MOBILE
        { filename: 'Frase-9.svg', alt: 'phrase9' },
        { filename: 'Frase-13.svg', alt: 'phrase13' },
        { filename: 'flechas/Flecha-1.svg', alt: 'arrow1' },
        { filename: 'flechas/Flecha-2.svg', alt: 'arrow2' },
        { filename: 'flechas/Flecha-3.svg', alt: 'arrow3' },
        { filename: 'flechas/Flecha-4.svg', alt: 'arrow4' },
        { filename: 'flechas/Flecha-5.svg', alt: 'arrow5' },
      ]
    },

    grupoa:{
      files:[
        //GRUPO A - GRUPO A - GRUPO A - GRUPO A - GRUPO A - GRUPO A - GRUPO A - GRUPO A
        { filename: 'Frase-1.svg', alt: 'phrase1' },
        { filename: 'Frase-15.svg', alt: 'phrase15' },
        { filename: 'Frase-8.svg', alt: 'phrase8' },
      ]
    },
    grupob:{
      files:[
        //GRUPO B - GRUPO B - GRUPO B - GRUPO B - GRUPO B - GRUPO B - GRUPO B - GRUPO B
        { filename: 'Frase-2.svg', alt: 'phrase2' },
        { filename: 'Frase-17.svg', alt: 'phrase17' },
        { filename: 'Frase-20.svg', alt: 'phrase20' },
      ]
    },
    grupoc:{
      files:[
        //GRUPO C - GRUPO C - GRUPO C - GRUPO C - GRUPO C - GRUPO C - GRUPO C - GRUPO C
        { filename: 'Frase-10.svg', alt: 'phrase10' },
        { filename: 'Frase-11.svg', alt: 'phrase11' },
        { filename: 'Frase-18.svg', alt: 'phrase18' },
        { filename: 'Frase-6.svg', alt: 'phrase6' },
      ]
    },
    grupod:{
      files:[
        //GRUPO D - GRUPO D - GRUPO D - GRUPO D - GRUPO D - GRUPO D - GRUPO D - GRUPO D
        { filename: 'Frase-4.svg', alt: 'phrase4' },
        { filename: 'Frase-16.svg', alt: 'phrase16' },
        { filename: 'Frase-22.svg', alt: 'phrase0' },
      ]
    },
    grupoe:{
      files:[
        //GRUPO E - GRUPO E - GRUPO E - GRUPO E - GRUPO E - GRUPO E - GRUPO E - GRUPO E
        { filename: 'Frase-5.svg', alt: 'phrase5' },
        { filename: 'Frase-12.svg', alt: 'phrase12' },
        { filename: 'Frase-14.svg', alt: 'phrase14' },
        { filename: 'Frase-7.svg', alt: 'phrase7' },
      ]
    },
    grupof:{
      files:[
        //GRUPO F - GRUPO F - GRUPO F - GRUPO F - GRUPO F - GRUPO F - GRUPO F - GRUPO F
        { filename: 'Frase-19.svg', alt: 'phrase19' },
        { filename: 'Frase-21.svg', alt: 'phrase21' },
        { filename: 'Frase-3.svg', alt: 'phrase3' },
      ]
    }
  };

}
