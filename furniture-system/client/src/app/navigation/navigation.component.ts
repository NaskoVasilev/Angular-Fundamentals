import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    
    this.router.navigate([ '/signin' ]);
  }
}
