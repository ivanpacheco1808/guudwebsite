import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguermenuComponent } from './burguermenu.component';

describe('BurguermenuComponent', () => {
  let component: BurguermenuComponent;
  let fixture: ComponentFixture<BurguermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurguermenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurguermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
