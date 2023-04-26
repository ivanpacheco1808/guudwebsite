import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'guud-imageplacer',
  templateUrl: './imageplacer.component.html',
  styleUrls: ['./imageplacer.component.scss']
})
export class ImageplacerComponent implements OnDestroy, OnInit {
  ngOnInit(){
    if (window.innerWidth >= 810) {
      this._startWebAnimation();
    } else {
      //this._startMobAnimation();
    }
  }
  ngOnDestroy() {
    clearInterval(this._webInterval)
    clearInterval(this._mobInterval)
  }
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth >= 810) {
      if (!this._webStarted) {
        this._startWebAnimation();
      }
      if (this._mobStarted) {
        this._mobStarted = false;
        clearInterval(this._mobInterval);
      }
    } else {
      if (!this._mobStarted) {
        //this._startMobAnimation();
      }
      if (this._webStarted) {
        this._webStarted = false;
        clearInterval(this._webInterval);
      }
    }
  }

  _webInterval: any;
  _webStarted = false;
  _startWebAnimation() {
    this._webStarted = true;
    var rindx = Math.floor((Math.random() * 6) / 2);
    var inicialweb: any = document.querySelector("[id='webphrase0']");
    $(inicialweb).addClass(this._fadecolors[rindx]);
    setTimeout(() => {
      $(inicialweb).removeClass(this._fadecolors[rindx]);
    }, 3500);

    this._webInterval = setInterval(() => {
      var randfade = Math.floor((Math.random() * 6) / 2);
      var rindx = Math.floor(Math.random() * (this._rotationweb.length - 2));
      var ref: any = document.querySelector("[id='web" + this._rotationweb[rindx] + "']");
      this._rotationweb.push(this._rotationweb[rindx]);
      this._rotationweb.splice(rindx, 1);

      $(ref).addClass(this._fadecolors[randfade]);
      setTimeout(() => {
        $(ref).removeClass(this._fadecolors[randfade]);
      }, 3500);

    }, 3000);
  }

  _mobInterval: any;
  _mobStarted = false;
  _startMobAnimation() {
    this._mobStarted = true;
    this._switchgroup('grupod');
    this._mobInterval = setInterval(() => {
      var selectedcat = this._mobilekeys[Math.floor(Math.random() * (this._mobilekeys.length - 2))];
      this._switchgroup(selectedcat);
    }, 3000);
  }

  _switchgroup(group: string) {
    var rindx = Math.floor(Math.random() * (this._imageList[group].length - 2));
    var lastalt = this._imageList[group][this._imageList[group].length - 1];
    var lastref: any = document.querySelector("[id='mob" + lastalt + "']");
    var nextalt = this._imageList[group][rindx];
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
    this._imageList[group].push(this._imageList[group][rindx]);
    this._imageList[group].splice(rindx, 1);
    this._mobilekeys.push(this._mobilekeys[this._mobilekeys.indexOf(group)]);
    this._mobilekeys.splice(this._mobilekeys.indexOf(group), 1);
  }


  _rotationweb = ['phrase9', 'phrase13', 'arrow1', 'arrow2', 'arrow3', 'arrow4',
    'arrow5', 'phrase1', 'phrase15', 'phrase8', 'phrase2', 'phrase17',
    'phrase20', 'phrase10', 'phrase11', 'phrase18', 'phrase6', 'phrase4',
    'phrase16', 'phrase0', 'phrase5', 'phrase12', 'phrase14', 'phrase7',
    'phrase19', 'phrase21', 'phrase3'];
  _fadecolors = ["fadeToRed", "fadeToBlue", "fadeToGreen"];
  _mobilekeys = ['grupoa', 'grupob', 'grupoc', 'grupod', 'grupoe', 'grupof'];
  _imageList = {
    grupomysc: ['phrase9', 'phrase13', 'arrow1', 'arrow2', 'arrow3', 'arrow4', 'arrow5'],
    grupoa: ['phrase1', 'phrase15', 'phrase8'],
    grupob: ['phrase2', 'phrase17', 'phrase20'],
    grupoc: ['phrase10', 'phrase11', 'phrase18', 'phrase6'],
    grupod: ['phrase4', 'phrase16', 'phrase0'],
    grupoe: ['phrase5', 'phrase12', 'phrase14', 'phrase7'],
    grupof: ['phrase19', 'phrase21', 'phrase3']
  };

}
