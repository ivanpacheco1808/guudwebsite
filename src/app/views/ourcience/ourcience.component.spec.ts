import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcienceComponent } from './ourcience.component';

describe('OurcienceComponent', () => {
  let component: OurcienceComponent;
  let fixture: ComponentFixture<OurcienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurcienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurcienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
