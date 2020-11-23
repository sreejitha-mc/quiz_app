import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOneResultComponent } from './type-one-result.component';

describe('TypeOneResultComponent', () => {
  let component: TypeOneResultComponent;
  let fixture: ComponentFixture<TypeOneResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOneResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOneResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
