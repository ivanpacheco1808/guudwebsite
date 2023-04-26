import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeSupplierComponent } from './besupplier.component';

describe('BeSupplierComponent', () => {
  let component: BeSupplierComponent;
  let fixture: ComponentFixture<BeSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
