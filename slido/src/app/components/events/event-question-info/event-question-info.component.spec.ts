import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventQuestionInfoComponent } from './event-question-info.component';

describe('EventQuestionInfoComponent', () => {
  let component: EventQuestionInfoComponent;
  let fixture: ComponentFixture<EventQuestionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventQuestionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventQuestionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
