import { Component, OnInit } from '@angular/core';

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

}
