/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehiclesPageComponent } from './vehicles-page.component';
import { VehiclesService } from 'src/app/state/vehicles-state/vehicles-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehiclesPageComponent', () => {
  let component: VehiclesPageComponent;
  let fixture: ComponentFixture<VehiclesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesPageComponent],
      providers: [VehiclesService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
