import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaringComponent } from './caring.component';

describe('CaringComponent', () => {
  let component: CaringComponent;
  let fixture: ComponentFixture<CaringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
