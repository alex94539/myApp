import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizePage } from './recognize.page';

describe('RecognizePage', () => {
  let component: RecognizePage;
  let fixture: ComponentFixture<RecognizePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecognizePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
