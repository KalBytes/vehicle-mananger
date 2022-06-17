/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SingleUserPageComponent } from './single-user-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SingleUserPageComponent', () => {
  let component: SingleUserPageComponent;
  let fixture: ComponentFixture<SingleUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleUserPageComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
