import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarePage } from './care.page';

describe('CarePage', () => {
  let component: CarePage;
  let fixture: ComponentFixture<CarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
