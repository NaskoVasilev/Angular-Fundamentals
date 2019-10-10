import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRegisterFormComponent } from './reactive-register-form.component';

describe('ReactiveRegisterFormComponent', () => {
  let component: ReactiveRegisterFormComponent;
  let fixture: ComponentFixture<ReactiveRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
