import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllHotelsComponent } from './get-all-hotels.component';

describe('GetAllHotelsComponent', () => {
  let component: GetAllHotelsComponent;
  let fixture: ComponentFixture<GetAllHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllHotelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
