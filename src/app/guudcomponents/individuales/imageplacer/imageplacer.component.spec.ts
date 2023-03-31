import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageplacerComponent } from './imageplacer.component';

describe('ImageplacerComponent', () => {
  let component: ImageplacerComponent;
  let fixture: ComponentFixture<ImageplacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageplacerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageplacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
