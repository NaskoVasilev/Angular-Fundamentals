import { Component } from '@angular/core';
import { range } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  constructor(){
    const stream = range(1, 10)
    .pipe(
      map(n => n ** 2),
      filter(n => n % 2===0),
      reduce((sum, val) => sum + val, 50)
      );

      stream.subscribe(i => console.log(`first stream ${i}`));
  }
}
