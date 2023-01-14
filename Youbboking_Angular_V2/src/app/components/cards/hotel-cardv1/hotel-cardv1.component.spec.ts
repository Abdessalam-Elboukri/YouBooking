import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCardv1Component } from './hotel-cardv1.component';

describe('HotelCardv1Component', () => {
  let component: HotelCardv1Component;
  let fixture: ComponentFixture<HotelCardv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelCardv1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelCardv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
