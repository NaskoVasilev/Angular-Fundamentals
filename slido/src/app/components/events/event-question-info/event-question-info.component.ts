import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../shared/models/question.model';

@Component({
  selector: 'app-event-question-info',
  templateUrl: './event-question-info.component.html',
  styleUrls: ['./event-question-info.component.css']
})
export class EventQuestionInfoComponent {
  @Input() questionInfo: Question;
  
  constructor() { }
}
