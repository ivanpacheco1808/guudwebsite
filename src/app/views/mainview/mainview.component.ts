import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainviewComponent implements OnInit {
  phrasesToUse = 19;
  pairedPhrases = 5;
  buildedPhrases = "";
  usedPhrases: any = [];
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this._startAnimation();
    }, 300);
  }
  _startAnimation() {
    //Ignora logos
    var logo1: any = document.querySelector("[id='logo']");
    var logo2: any = document.querySelector("[id='logobottom']");
    $(logo1).addClass("nohover");
    $(logo2).addClass("nohover");
    //Anima primer icono
    var inicial: any = document.querySelector("[id='phrase0']");
    $(inicial).addClass("fadeToBlue");
    setTimeout(() => {
      $(inicial).removeClass("fadeToBlue");
    }, 3500);

    setInterval(() => {
      var randfade = Math.floor(Math.random() * 6) / 2;
      var fadecolors = ["fadeToRed", "fadeToBlue", "fadeToGreen"];
      var nextAnimation = Math.floor(Math.random() * 22);
      var ref: any = document.querySelector("[id='phrase" + nextAnimation + "']");
      //if (!$(ref).hasClass(fadecolors[randfade])) {
        $(ref).addClass(fadecolors[randfade]);
        setTimeout(() => {
          $(ref).removeClass(fadecolors[randfade]);
        }, 3500);
      //}
    }, 3000)
  }






  phrases = [
    { filename: 'Frase-22.svg', left: '15vw', top: '25.8vw', width: '9.8vw', alt: 'phrase0' },
    { filename: 'Frase-1.svg', left: '6vw', top: '4.3vw', width: '17.7vw', alt: 'phrase1' },
    //{ filename: 'twostroke/Frase-1-1.svg', left: '5vw', top: '6vw', width: '19.8vw', alt: 'phrase1' },
    { filename: 'Frase-2.svg', left: '0.6vw', top: '10.1vw', width: '10.9vw', alt: 'phrase2' },
    //{ filename: 'twostroke/Frase-2-1.svg', left: '2.2vw', top: '15.3vw', width: '12.5vw', alt: 'phrase2' },
    { filename: 'Frase-3.svg', left: '11.6vw', top: '14.1vw', width: '10.9vw', alt: 'phrase3' },
    { filename: 'Frase-4.svg', left: '21.5vw', top: '4.2vw', width: '16.9vw', alt: 'phrase4' },
    { filename: 'Frase-5.svg', left: '35.2vw', top: '4.6vw', width: '20.6vw', alt: 'phrase5' },
    { filename: 'Frase-6.svg', left: '1.7vw', top: '25.6vw', width: '10.5vw', alt: 'phrase6' },
    { filename: 'Frase-7.svg', left: '0.1vw', top: '36.4vw', width: '26.6vw', alt: 'phrase7' },
    //{ filename: 'twostroke/Frase-7-1.svg', left: '1.6vw', top: '48.2vw', width: '31vw', alt: 'phrase7' },
    { filename: 'Frase-8.svg', left: '46.2vw', top: '40.6vw', width: '14.8vw', alt: 'phrase8' },
    { filename: 'Frase-9.svg', left: '64.3vw', top: '31.4vw', width: '12vw', alt: 'phrase9' },
    { filename: 'Frase-10.svg', left: '78.1vw', top: '42vw', width: '17.6vw', alt: 'phrase10' },
    { filename: 'Frase-11.svg', left: '79.6vw', top: '37.2vw', width: '15.2vw', alt: 'phrase11' },
    { filename: 'Frase-12.svg', left: '79.9vw', top: '28.3vw', width: '17.2vw', alt: 'phrase12' },
    //{ filename: 'twostroke/Frase-14-1.svg', left: '77.8vw', top: '37.3vw', width: '20vw', alt: 'phrase12' },
    { filename: 'Frase-13.svg', left: '76.2vw', top: '18.4vw', width: '11.7vw', alt: 'phrase13' },
    { filename: 'Frase-14.svg', left: '88.7vw', top: '12.4vw', width: '9.5vw', alt: 'phrase14' },
    //{ filename: 'twostroke/Frase-16-1.svg', left: '86.7vw', top: '14.6vw', width: '10.6vw', alt: 'phrase14' },
    { filename: 'Frase-15.svg', left: '74.9vw', top: '12.1vw', width: '9vw', alt: 'phrase15' },
    { filename: 'Frase-16.svg', left: '81.8vw', top: '4.1vw', width: '15.5vw', alt: 'phrase16' },
    { filename: 'Frase-17.svg', left: '64.6vw', top: '4.2vw', width: '10.9vw', alt: 'phrase17' },
    { filename: 'Frase-18.svg', left: '56.2vw', top: '10.4vw', width: '12.9vw', alt: 'phrase18' },
    { filename: 'Frase-19.svg', left: '56.2vw', top: '4.2vw', width: '5.4vw', alt: 'phrase19' },
    { filename: 'Frase-20.svg', left: '49vw', top: '32.2vw', width: '11.4vw', alt: 'phrase20' },
    { filename: 'Frase-21.svg', left: '30.7vw', top: '34.7vw', width: '13.3vw', alt: 'phrase21' },

    { filename: 'flechas/Flecha-1.svg', left: '1.6vw', top: '34.3vw', width: '8.9vw', alt: 'arrow1' },
    { filename: 'flechas/Flecha-2.svg', left: '26.2vw', top: '42.9vw', width: '8.6vw', alt: 'arrow2' },
    { filename: 'flechas/Flecha-3.svg', left: '66.2vw', top: '43.2vw', width: '8vw', alt: 'arrow3' },
    { filename: 'flechas/Flecha-4.svg', left: '94.2vw', top: '22.5vw', width: '3.4vw', alt: 'arrow4' },
    { filename: 'flechas/Flecha-5.svg', left: '69.7vw', top: '10.4vw', width: '9.2vw', alt: 'arrow5' },

    { filename: 'logo-Guud.png', left: '32vw', top: '20.2vw', width: '34.5vw', alt: 'logo' },
    { filename: 'Frase-23.svg', left: '38.9vw', top: '28vw', width: '20.4vw', alt: 'logobottom' },
  ];
/*
  _loadPhrases() {
    var index = 1;
    while (index <= this.phrasesToUse) {
      var picked = false;
      var refname = "phrase" + index;
      var imagetouse = "";
      while (!picked) {
        var rand = Math.floor(Math.random() * this.phrasesToUse) + 1;
        imagetouse = "Frase-" + rand + ".svg";
        picked = this.usedPhrases.indexOf(imagetouse) >= 0 ? false : true;
        this.usedPhrases.push(imagetouse);
      }
      this.buildedPhrases += "<img class='spawnedPhrase' alt='" + refname + "' src='assets/svg/mainview/" + imagetouse + "'>";
      index++;
    }

    setTimeout(() => {
      this._startTicking();
    }, 100);

    this.usedPhrases = [];
  }

  _fixPosition() {
    var first: any = document.querySelector("[alt='phrase1']");
    var spacing = this.total / this.phrasesToUse;
    var leftover = 0;

    var index = 1;
    var left = 0 - (first.offsetWidth / 2);
    var used = first.offsetWidth / 2;
    var top = 0 - (first.offsetHeight / 2);
    while (index <= this.phrasesToUse) {
      var reference: any = document.querySelector("[alt='phrase" + index + "']");
      var refwidth = reference.offsetWidth;
      var refheight = reference.offsetHeight;
      reference.style.opacity = 1;
      reference.style.maxWidth = spacing + 'px';
      //reference.style.maxHeight = spacing+'px';

      if ((used + (refwidth / 2)) < this.boxWidth) {
        left += refwidth + 13;
        used += refwidth + 13;
        reference.style.left = left + 'px';
        reference.style.top = top + 'px';
      } else if (used >= this.boxWidth && used < ((this.total / 2) + (refheight))) {
        left = this.boxWidth - refwidth / 2;
        top += refheight + 13;
        reference.style.left = this.boxWidth - (refwidth / 2) + 'px';
        reference.style.top = top + 'px';
        used += refheight + 13;
      } else if (used >= (this.total / 2) && used < (this.total - this.boxHeight)) {
        top = this.boxHeight - refheight / 2
        left -= refwidth + 13;
        used += refwidth + 13;
        reference.style.left = left + 'px';
        reference.style.top = top + 'px';
      } else {
        top -= refheight + 13;
        used += refheight + 13;
        reference.style.top = top + 'px';
        reference.style.left = 0 - (refwidth / 2) + 'px';
      }



      *//*if((used+refwidth)<this.boxWidth){
        reference.style.filter = 'invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)';
        areausing = (refwidth+13);
        reference.style.left = left+'px';
        reference.style.top = (top-(refheight/2))+'px';
        left+=areausing;
      }else if((used+refheight)>this.total/2){
        reference.style.filter = 'invert(83%) sepia(69%) saturate(3241%) hue-rotate(160deg) brightness(96%) contrast(91%);';
        areausing = (refheight+13);
        reference.style.top = top+'px';
        reference.style.left = (this.boxWidth-(refwidth/2))+'px';
        top += areausing;
      }else if((used+refwidth)<this.total/2 && (used+refwidth)<this.total-this.boxHeight){
        reference.style.filter = 'invert(75%) sepia(47%) saturate(7480%) hue-rotate(210deg) brightness(100%) contrast(85%)';
        areausing = (refwidth+13);
        reference.style.left = left+'px';
        reference.style.top = (top-(refheight/2))+'px';
        left-=areausing;
      }else{

      }*//*
      index++;
    }
  }






  boxWidth = 0;
  boxHeight = 0;
  total = 1;
  _startTicking() {
    setInterval(() => {
      this.boxWidth = document.getElementById("spawnarea")!.offsetWidth;
      this.boxHeight = document.getElementById("spawnarea")!.offsetHeight;
      this.total = (this.boxWidth * 2) + (this.boxHeight * 2);
      this._fixPosition();
    }, 100);
  }*/

}
