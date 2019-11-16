import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, DoCheck {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
}
