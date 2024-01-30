import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'guud-tutosmenu',
  templateUrl: './tutosmenu.component.html',
  styleUrls: ['./tutosmenu.component.scss']
})
export class TutosmenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activemenu:boolean=false;
  currentRouteIsTutorial:boolean=false;
  @Input() set currentRoute(cr){
    this.currentRouteIsTutorial = (cr == "/welcome" || cr == "/calendars" || cr == "/tips" || cr == "/workouts" || cr == "/sports") ? true : false;
  }

}
