import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateBindingComponent } from './date-binding.component';

describe('DateBindingComponent', () => {
  let component: DateBindingComponent;
  let fixture: ComponentFixture<DateBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
