import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-delete-furniture',
  templateUrl: './delete-furniture.component.html',
  styleUrls: ['./delete-furniture.component.css']
})
export class DeleteFurnitureComponent {

  constructor(private route: ActivatedRoute, private furnitureService: FurnitureService, private router: Router) {
    let id = this.route.snapshot.params.id;
    
    this.furnitureService.delete(id).subscribe(_ => router.navigate(['/furniture', 'user']));
   }
}
