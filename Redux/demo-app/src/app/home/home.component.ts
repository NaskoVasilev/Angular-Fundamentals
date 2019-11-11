import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IAppState } from '../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  counter: number;
  subscription: Subscription;

  constructor(private state: Store<IAppState>) {
    this.subscription = this.state.select(state => state.app.counter).subscribe((counterValue: number) => {
      this.counter = counterValue;
    });
  }

  increment() {
    this.state.dispatch({type: 'INC'})
  }

  decrement() {
    this.state.dispatch({type: 'DEC'})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
