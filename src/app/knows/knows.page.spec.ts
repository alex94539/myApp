import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowsPage } from './knows.page';

describe('KnowsPage', () => {
  let component: KnowsPage;
  let fixture: ComponentFixture<KnowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
