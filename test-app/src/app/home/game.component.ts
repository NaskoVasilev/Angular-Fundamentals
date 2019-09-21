import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from './game';
import { GameService } from './gameService';

@Component({
    selector: "game",
    template: `
    <li><div>{{game.title | uppercase}}
    <span *ngIf="game.price >= 100">-> Price: {{game.price}}</span>
    </div></li>
    <button (click)="react(true)">Likes</button>
    <button (click)="react(false)">Dislike</button>`,
})
export class GameComponent {
    @Input("gameProp") game: Game;
    @Output() onReacted = new EventEmitter<boolean>();

    constructor(private gameService: GameService) {

     }

    react(isLiked: boolean): void {
        this.onReacted.emit(isLiked);
    }
}