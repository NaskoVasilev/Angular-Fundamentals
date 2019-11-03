import { Component, OnInit } from '@angular/core';
import { Subject, from, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css']
})
export class SubjectDemoComponent  {
  constructor() {
    console.log('Subject demo');
    this.subjectDemo();

    console.log('Behaviour subject demo');
    this.behaviourSubjectDemo();

    console.log('Replay subject demo');
    this.replaySubjectDemo();

    console.log('Async subject demo');
    this.asyncSubjectDemo();
  }

  subject = new Subject();
  behaviourSubject = new BehaviorSubject(0);
  replaySubject = new ReplaySubject(2);
  asyncSubject = new AsyncSubject();

  private asyncSubjectDemo() {
    this.asyncSubject.subscribe({
      next: (value) => console.log(`observer A: ${value}`)
    });
    this.asyncSubject.next(1);
    this.asyncSubject.next(2);
    this.asyncSubject.next(3);
    this.asyncSubject.subscribe({
      next: (value) => console.log(`observer B: ${value}`)
    });
    this.asyncSubject.next(4);
    this.asyncSubject.complete();
  }

  private replaySubjectDemo() {
    this.replaySubject.subscribe({
      next: (value) => console.log(`observer A: ${value}`)
    });
    this.replaySubject.next(1);
    this.replaySubject.next(2);
    this.replaySubject.next(3);
    this.replaySubject.subscribe({
      next: (value) => console.log(`observer B: ${value}`)
    });
    this.replaySubject.next(4);
  }

  private behaviourSubjectDemo() {
    this.behaviourSubject.subscribe({
      next: (value) => console.log(`observer A: ${value}`)
    });
    this.behaviourSubject.next(1);
    this.behaviourSubject.next(2);

    this.behaviourSubject.subscribe({
      next: (value) => console.log(`observer B: ${value}`)
    });

    this.behaviourSubject.next(3);
  }

  private subjectDemo() {
    this.subject.subscribe({
      next: (value) => console.log(`observer A: ${value}`)
    });
    this.subject.subscribe({
      next: (value) => console.log(`observer B: ${value}`)
    });

    let observable = from([1, 2, 3]);
    observable.subscribe(this.subject);
  }
}
