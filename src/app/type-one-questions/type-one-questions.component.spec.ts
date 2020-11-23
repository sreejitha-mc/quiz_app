import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOneQuestionsComponent } from './type-one-questions.component';

describe('TypeOneQuestionsComponent', () => {
  let component: TypeOneQuestionsComponent;
  let fixture: ComponentFixture<TypeOneQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeOneQuestionsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOneQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
