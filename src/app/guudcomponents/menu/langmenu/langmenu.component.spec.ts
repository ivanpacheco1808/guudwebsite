import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangmenuComponent } from './langmenu.component';

describe('LangmenuComponent', () => {
  let component: LangmenuComponent;
  let fixture: ComponentFixture<LangmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
