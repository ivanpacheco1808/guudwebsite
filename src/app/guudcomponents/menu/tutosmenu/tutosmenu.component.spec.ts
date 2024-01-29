import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutosmenuComponent } from './tutosmenu.component';

describe('TutosmenuComponent', () => {
  let component: TutosmenuComponent;
  let fixture: ComponentFixture<TutosmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutosmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutosmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
