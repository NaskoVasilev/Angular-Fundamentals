import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Movie from '../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input('movie') movie: Movie;
  @Output('movieDetailsClicked') movieDetailsEmitter: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onDetailsClick(): void{
    console.log("From child: Button with id: " + this.movie.id);
    this.movieDetailsEmitter.emit(this.movie.id);
  }
}
