import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecoachComponent } from './becoach.component';

describe('BecoachComponent', () => {
  let component: BecoachComponent;
  let fixture: ComponentFixture<BecoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
