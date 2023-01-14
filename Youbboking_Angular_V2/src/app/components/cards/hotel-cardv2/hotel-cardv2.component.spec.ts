import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCardv2Component } from './hotel-cardv2.component';

describe('HotelCardv2Component', () => {
  let component: HotelCardv2Component;
  let fixture: ComponentFixture<HotelCardv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelCardv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelCardv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
