import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/models/furniture';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  furniture: Furniture

  constructor(private route: ActivatedRoute, private furnitureService: FurnitureService) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    
    this.furnitureService.getById(id).subscribe(data => this.furniture = data);
  }
}
