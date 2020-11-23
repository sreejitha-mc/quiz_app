import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTwoResultComponent } from './type-two-result.component';

describe('TypeTwoResultComponent', () => {
  let component: TypeTwoResultComponent;
  let fixture: ComponentFixture<TypeTwoResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTwoResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTwoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
