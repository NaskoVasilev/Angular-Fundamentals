import { Component } from '@angular/core';
import { Game } from './game'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public games: Game[];
  public likes: number = 0;
  public dislikes: number = 0;
  constructor() {
    this.games = [
      new Game("Test game1", 99),
      new Game("Test game2", 100),
      new Game("Test game3", 120),
    ]
  }

  onReacted(isLiked: boolean) {
    isLiked ? this.likes++ : this.dislikes++;
  }
}
