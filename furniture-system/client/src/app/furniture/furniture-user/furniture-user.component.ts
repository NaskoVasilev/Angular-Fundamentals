import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Furniture } from 'src/app/models/furniture';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit {
  furniture$: Observable<Furniture[]>
  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.furniture$ = this.furnitureService.userFurnitures();
  }
}
