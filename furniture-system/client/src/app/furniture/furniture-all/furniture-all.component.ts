import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { Observable } from 'rxjs';
import { Furniture } from 'src/app/models/furniture';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {
  furniture$: Observable<Furniture[]>
  constructor(private furnitureService: FurnitureService, private authSerice: AuthService) { }

  ngOnInit() {
    this.furniture$ = this.furnitureService.all();
  }

  deleteFurniture(id: string) {
    this.furnitureService.delete(id).subscribe(_ => {
      this.furniture$ = this.furnitureService.all();
    })
  }

  get isAdmin(): boolean {
    return this.authSerice.isAdmin();
  }
}
