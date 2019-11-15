import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent implements OnInit {
  isAuth: boolean = false;
  //isAuthSub: Subscription;

  constructor(
    //private authService: AuthService
  ) { }

  ngOnInit() {
    // this.isAuthSub = this.authService.isAuthChanged.subscribe((data) => {
    //   this.isAuth = data;
    // });
  }

  ngOnDestroy() {
    //this.isAuthSub.unsubscribe();
  }

  logout() {
    //this.authService.logout();
  }
}
