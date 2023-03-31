import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'guudview-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainviewComponent {
  _apply:boolean=true;
  @Input() set _applyshadow(apply:boolean){this._apply=apply;}

  constructor() { }

  mobilekeys = ['grupoa','grupob','grupoc','grupod','grupoe','grupof'];
  phrases = {
    //GRUPOS DE VISION MOBILE - GRUPOS DE VISION MOBILE - GRUPOS DE VISION MOBILE
    grupocentral:{
      files:[
        { filename: 'logo-Guud.png', webStyle: { left: '32vw', top: '20.2vw', width: '34.5vw' }, mobileStyle: { left: '5vw', top: '82.4vw', width: '91vw' }, alt: 'logo', onDisplay:true },
        { filename: 'Frase-23.svg', webStyle: { left: '38.9vw', top: '28vw', width: '20.4vw' }, mobileStyle: { left: '8vw', top: '102vw', width: '84vw' }, alt: 'logobottom', onDisplay:true },
      ]
    },
    grupomysc:{
      files:[
        //  NO MOBILE NO MOBILE
        { filename: 'Frase-9.svg', webStyle: { left: '64.3vw', top: '31.4vw', width: '12vw' }, mobileStyle: { left: '60vw', top: '183vw', width: '12vw' }, alt: 'phrase9', onDisplay:false },
        { filename: 'Frase-13.svg', webStyle: { left: '76.2vw', top: '18.4vw', width: '11.7vw' }, mobileStyle: { left: '86vw', top: '188vw', width: '12vw' }, alt: 'phrase13', onDisplay:false },
        { filename: 'flechas/Flecha-1.svg', webStyle: { left: '1.6vw', top: '34.3vw', width: '8.9vw' }, mobileStyle: { left: '2vw', top: '172vw', width: '9vw' }, alt: 'arrow1', onDisplay:false },
        { filename: 'flechas/Flecha-2.svg', webStyle: { left: '26.2vw', top: '42.9vw', width: '8.6vw' }, mobileStyle: { left: '2vw', top: '172vw', width: '9vw' }, alt: 'arrow2', onDisplay:false },
        { filename: 'flechas/Flecha-3.svg', webStyle: { left: '66.2vw', top: '43.2vw', width: '8vw' }, mobileStyle: { left: '2vw', top: '172vw', width: '9vw' }, alt: 'arrow3', onDisplay:false },
        { filename: 'flechas/Flecha-4.svg', webStyle: { left: '94.2vw', top: '22.5vw', width: '3.4vw' }, mobileStyle: { left: '2vw', top: '172vw', width: '9vw' }, alt: 'arrow4', onDisplay:false },
        { filename: 'flechas/Flecha-5.svg', webStyle: { left: '69.7vw', top: '10.4vw', width: '9.2vw' }, mobileStyle: { left: '2vw', top: '172vw', width: '9vw' }, alt: 'arrow5', onDisplay:false },
      ]
    },
    grupoa:{
      files:[
        //GRUPO A - GRUPO A - GRUPO A - GRUPO A - GRUPO A - GRUPO A - GRUPO A - GRUPO A
        { filename: 'Frase-8.svg', webStyle: { left: '46.2vw', top: '40.6vw', width: '14.8vw' }, mobileStyle: { left: '5vw', top: '25vw', width: '55vw' }, alt: 'phrase8', onDisplay:true },
        { filename: 'Frase-1.svg', webStyle: { left: '6vw', top: '4.3vw', width: '17.7vw' }, mobileStyle: { left: '8vw', top: '20.6vw', width: '52vw' }, alt: 'phrase1', onDisplay:false },
        { filename: 'Frase-15.svg', webStyle: { left: '74.9vw', top: '12.1vw', width: '9vw' }, mobileStyle: { left: '9vw', top: '20vw', width: '48vw' }, alt: 'phrase15', onDisplay:false },
      ]
    },
    grupob:{
      files:[
        //GRUPO B - GRUPO B - GRUPO B - GRUPO B - GRUPO B - GRUPO B - GRUPO B - GRUPO B
        { filename: 'Frase-20.svg', webStyle: { left: '49vw', top: '32.2vw', width: '11.4vw' }, mobileStyle: { left: '53.7vw', top: '36.5vw', width: '44vw' }, alt: 'phrase20', onDisplay:true },
        { filename: 'Frase-2.svg', webStyle: { left: '0.6vw', top: '10.1vw', width: '10.9vw' }, mobileStyle: { left: '60vw', top: '22vw', width: '33vw' }, alt: 'phrase2', onDisplay:false },
        { filename: 'Frase-17.svg', webStyle: { left: '64.6vw', top: '4.2vw', width: '10.9vw' }, mobileStyle: { left: '58.7vw', top: '36vw', width: '32vw' }, alt: 'phrase17', onDisplay:false },
      ]
    },
    grupoc:{
      files:[
        //GRUPO C - GRUPO C - GRUPO C - GRUPO C - GRUPO C - GRUPO C - GRUPO C - GRUPO C
        { filename: 'Frase-6.svg', webStyle: { left: '1.7vw', top: '25.6vw', width: '10.5vw' }, mobileStyle: { left: '15vw', top: '50vw', width: '29vw' }, alt: 'phrase6', onDisplay:true },
        { filename: 'Frase-10.svg', webStyle: { left: '78.1vw', top: '42vw', width: '17.6vw' }, mobileStyle: { left: '5vw', top: '59.7vw', width: '58.6vw' }, alt: 'phrase10', onDisplay:false },
        { filename: 'Frase-11.svg', webStyle: { left: '79.6vw', top: '37.2vw', width: '15.2vw' }, mobileStyle: { left: '13vw', top: '59vw', width: '59vw' }, alt: 'phrase11', onDisplay:false },
        { filename: 'Frase-18.svg', webStyle: { left: '56.2vw', top: '10.4vw', width: '12.9vw' }, mobileStyle: { left: '7vw', top: '56vw', width: '50vw' }, alt: 'phrase18', onDisplay:false },
      ]
    },
    grupod:{
      files:[
        //GRUPO D - GRUPO D - GRUPO D - GRUPO D - GRUPO D - GRUPO D - GRUPO D - GRUPO D
        { filename: 'Frase-22.svg', webStyle: { left: '15vw', top: '25.8vw', width: '9.8vw' }, mobileStyle: { left: '7vw', top: '116vw', width: '32vw' }, alt: 'phrase0', onDisplay:true },
        { filename: 'Frase-4.svg', webStyle: { left: '21.5vw', top: '4.2vw', width: '16.9vw' }, mobileStyle: { left: '9vw', top: '114vw', width: '40vw' }, alt: 'phrase4', onDisplay:false },
        { filename: 'Frase-16.svg', webStyle: { left: '81.8vw', top: '4.1vw', width: '15.5vw' }, mobileStyle: { left: '8vw', top: '118vw', width: '50vw' }, alt: 'phrase16', onDisplay:false },
      ]
    },
    grupoe:{
      files:[
        //GRUPO E - GRUPO E - GRUPO E - GRUPO E - GRUPO E - GRUPO E - GRUPO E - GRUPO E
        { filename: 'Frase-7.svg', webStyle: { left: '0.1vw', top: '36.4vw', width: '26.6vw' }, mobileStyle: { left: '10vw', top: '143vw', width: '84vw' }, alt: 'phrase7', onDisplay:true },
        { filename: 'Frase-5.svg', webStyle: { left: '35.2vw', top: '4.6vw', width: '20.6vw' }, mobileStyle: { left: '17vw', top: '149vw', width: '67vw' }, alt: 'phrase5', onDisplay:false },
        { filename: 'Frase-12.svg', webStyle: { left: '79.9vw', top: '28.3vw', width: '17.2vw' }, mobileStyle: { left: '16vw', top: '144vw', width: '68vw' }, alt: 'phrase12', onDisplay:false },
        { filename: 'Frase-14.svg', webStyle: { left: '88.7vw', top: '12.4vw', width: '9.5vw' }, mobileStyle: { left: '34vw', top: '145vw', width: '32vw' }, alt: 'phrase14', onDisplay:false },
      ]
    },
    grupof:{
      files:[
        //GRUPO F - GRUPO F - GRUPO F - GRUPO F - GRUPO F - GRUPO F - GRUPO F - GRUPO F
        { filename: 'Frase-3.svg', webStyle: { left: '11.6vw', top: '14.1vw', width: '10.9vw' }, mobileStyle: { left: '53vw', top: '114vw', width: '36vw' }, alt: 'phrase3', onDisplay:true },
        { filename: 'Frase-19.svg', webStyle: { left: '56.2vw', top: '4.2vw', width: '5.4vw' }, mobileStyle: { left: '60.6vw', top: '119.4vw', width: '20vw' }, alt: 'phrase19', onDisplay:false },
        { filename: 'Frase-21.svg', webStyle: { left: '30.7vw', top: '34.7vw', width: '13.3vw' }, mobileStyle: { left: '49vw', top: '116vw', width: '41vw' }, alt: 'phrase21', onDisplay:false },
      ]
    }
  };

}
