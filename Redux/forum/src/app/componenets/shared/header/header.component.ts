import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState, getIsAuthenticated, getAuthUsername } from 'src/app/store';
import { Logout } from 'src/app/store/auth/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn$: Observable<boolean>;
  username$: Observable<string>

  constructor(private store: Store<IAppState>, private router: Router, private authService: AuthService) { 
    this.isLoggedIn$ = store.select(getIsAuthenticated);
    this.username$ = store.select(getAuthUsername);
  }
  
  logout() {
    this.store.dispatch(new Logout());
  }
}
