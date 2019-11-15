import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit, OnDestroy {
  createForm: FormGroup;
  expirationDate = new Date();

  constructor(
    private fb: FormBuilder,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.expirationDate.setMonth(this.expirationDate.getMonth() + 3);
    this.createForm = this.fb.group({
      code: [ null, [ Validators.required, Validators.minLength(3) ] ],
      expiresOn: [ null, Validators.required ]
    });
  }

  ngOnDestroy() {
    this.createForm.reset();
  }

  createEvent() {
    const { code, expiresOn } = this.createForm.value;

    this.eventService.addEvent({ code, expiresOn, createdOn: new Date() });
  }
}
