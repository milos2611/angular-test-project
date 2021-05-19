import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicReactiveFormComponentComponent } from './dynamic-reactive-form-component.component';

describe('DynamicReactiveFormComponentComponent', () => {
  let component: DynamicReactiveFormComponentComponent;
  let fixture: ComponentFixture<DynamicReactiveFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicReactiveFormComponentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicReactiveFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
