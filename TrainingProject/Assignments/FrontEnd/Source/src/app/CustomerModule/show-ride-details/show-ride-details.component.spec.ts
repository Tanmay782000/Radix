import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRideDetailsComponent } from './show-ride-details.component';

describe('ShowRideDetailsComponent', () => {
  let component: ShowRideDetailsComponent;
  let fixture: ComponentFixture<ShowRideDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRideDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRideDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
