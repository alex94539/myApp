import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QAPage } from './qa.page';

describe('QAPage', () => {
  let component: QAPage;
  let fixture: ComponentFixture<QAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
