import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerHotelComponent } from './owner-hotel.component';

describe('OwnerHotelComponent', () => {
  let component: OwnerHotelComponent;
  let fixture: ComponentFixture<OwnerHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
