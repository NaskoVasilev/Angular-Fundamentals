import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/core/store.service';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userList$: Observable<IUser[]>;

  constructor(private storeService: StoreService) { 
    this.userList$ = this.storeService.select(state => state.userList).pipe(shareReplay());
  }

  ngOnInit() {
  }

}
