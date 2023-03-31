import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesupplierComponent } from './besupplier.component';

describe('BesupplierComponent', () => {
  let component: BesupplierComponent;
  let fixture: ComponentFixture<BesupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BesupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
