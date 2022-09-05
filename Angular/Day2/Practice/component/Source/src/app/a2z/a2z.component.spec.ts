import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2zComponent } from './a2z.component';

describe('A2zComponent', () => {
  let component: A2zComponent;
  let fixture: ComponentFixture<A2zComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A2zComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A2zComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
