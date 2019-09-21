import { Game } from './game';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GameService{
    games: Game[];

    addGame(game: Game): void{
        this.games.push(game);
    }
}