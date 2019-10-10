import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenRegisterFormComponent } from './template-driven-register-form.component';

describe('TemplateDrivenRegisterFormComponent', () => {
  let component: TemplateDrivenRegisterFormComponent;
  let fixture: ComponentFixture<TemplateDrivenRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
