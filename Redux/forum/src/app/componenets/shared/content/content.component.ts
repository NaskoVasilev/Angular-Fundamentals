import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState, getIsAuthenticated } from 'src/app/store';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<IAppState>) {
    this.isLoggedIn$ = store.select(getIsAuthenticated);
   }
}
