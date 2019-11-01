import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { Observable } from 'rxjs';
import { Furniture } from 'src/app/models/furniture';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {
  furniture$: Observable<Furniture[]>
  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.furniture$ = this.furnitureService.all();
  }
}
