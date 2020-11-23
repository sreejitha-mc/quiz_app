import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTwoQuestionsComponent } from './type-two-questions.component';

describe('TypeTwoQuestionsComponent', () => {
  let component: TypeTwoQuestionsComponent;
  let fixture: ComponentFixture<TypeTwoQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeTwoQuestionsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTwoQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
