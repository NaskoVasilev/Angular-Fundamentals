import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from '../../shared/models/question.model';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/core/services/event.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-event-live',
  templateUrl: './event-live.component.html',
  styleUrls: ['./event-live.component.css']
})
export class EventLiveComponent implements OnInit, OnDestroy {
  eventQuestions: Question[];
  eventQuestionsSub: Subscription;
  eventId: string;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.eventId = params['id'];
    });

    this.eventService.fetchQuestsionsForEvent(this.eventId);
    this.eventQuestionsSub = this.eventService.questionsChanged.subscribe((questions) => {
      this.eventQuestions = questions;
    });
  }

  ngOnDestroy() {
    this.eventQuestionsSub.unsubscribe();
    this.eventService.cancelSubscriptions();
  }
}
