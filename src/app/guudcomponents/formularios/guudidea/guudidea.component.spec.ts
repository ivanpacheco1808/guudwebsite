import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuudideaComponent } from './guudidea.component';

describe('GuudideaComponent', () => {
  let component: GuudideaComponent;
  let fixture: ComponentFixture<GuudideaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuudideaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuudideaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
