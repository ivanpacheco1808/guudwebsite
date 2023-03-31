import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guudform-becoach',
  templateUrl: './becoach.component.html',
  styleUrls: ['./becoach.component.scss']
})
export class BeCoachComponent implements OnInit {

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
