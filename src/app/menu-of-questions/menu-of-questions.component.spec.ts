import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOfQuestionsComponent } from './menu-of-questions.component';

describe('MenuOfQuestionsComponent', () => {
  let component: MenuOfQuestionsComponent;
  let fixture: ComponentFixture<MenuOfQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOfQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOfQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
