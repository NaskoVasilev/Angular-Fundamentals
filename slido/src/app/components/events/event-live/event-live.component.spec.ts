import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLiveComponent } from './event-live.component';

describe('EventLiveComponent', () => {
  let component: EventLiveComponent;
  let fixture: ComponentFixture<EventLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
