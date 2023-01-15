import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSecondaryComponent } from './nav-secondary.component';

describe('NavSecondaryComponent', () => {
  let component: NavSecondaryComponent;
  let fixture: ComponentFixture<NavSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSecondaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
