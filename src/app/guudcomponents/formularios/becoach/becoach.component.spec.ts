import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeCoachComponent } from './becoach.component';

describe('BeCoachComponent', () => {
  let component: BeCoachComponent;
  let fixture: ComponentFixture<BeCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
