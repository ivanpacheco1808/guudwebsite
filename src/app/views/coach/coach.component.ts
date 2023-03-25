import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {

  dataFormat:any = {
    firstName: null,
    lastName: null,
    special: null,
    instagram: null,
    tiktok: null,
    email: null,
    phone: null
  };

  constructor() { }

  ngOnInit(): void {
  }

}
