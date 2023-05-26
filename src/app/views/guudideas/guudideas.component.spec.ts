import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuudideasComponent } from './guudideas.component';

describe('GuudideasComponent', () => {
  let component: GuudideasComponent;
  let fixture: ComponentFixture<GuudideasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuudideasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuudideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
