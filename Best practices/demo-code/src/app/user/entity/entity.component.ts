import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';
import { StoreService } from 'src/app/core/store.service';
import IState from 'src/app/shared/interfaces/state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  constructor(private storeService: StoreService, private router: Router) { }

  ngOnInit() {
  }

  submitHandler(userData: IUser){
    this.storeService.update(state => this.changeState(state, userData));
    this.router.navigate(['/user/list'])
  }

  private changeState(state: IState, userData: IUser){
    let newState: IState = {
      userList: state.userList.concat(userData)
    }
    return newState;
  }
}
