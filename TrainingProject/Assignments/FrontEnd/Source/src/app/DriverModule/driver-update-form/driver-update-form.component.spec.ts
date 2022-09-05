import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverUpdateFormComponent } from './driver-update-form.component';

describe('DriverUpdateFormComponent', () => {
  let component: DriverUpdateFormComponent;
  let fixture: ComponentFixture<DriverUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
