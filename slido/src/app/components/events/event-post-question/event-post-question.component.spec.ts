import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPostQuestionComponent } from './event-post-question.component';

describe('EventPostQuestionComponent', () => {
  let component: EventPostQuestionComponent;
  let fixture: ComponentFixture<EventPostQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPostQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPostQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
