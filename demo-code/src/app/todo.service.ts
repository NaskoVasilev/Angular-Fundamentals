import { Injectable } from '@angular/core';
import { Observable, Subscriber, interval } from 'rxjs';
import { map, pairwise, take, scan } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = [];
  constructor(private httpClient: HttpClient) {
    // let stream = new Observable((subscriber: Subscriber<number>) => {
    //  let counter = 0;
    //  const id = setInterval(() => {
    //   subscriber.next(counter++)
    //  }, 1000)

    //  return () => {
    //    console.log("Clean up");
    //   clearInterval(id);       
    //  }
    // });

    // let stream = interval(1000); 

    // const subscription =  stream.pipe(
    //   take(5),
    //   map(value => value * 5),
    //   scan((sum, currentValue) => sum + currentValue, 0)  
    // ).subscribe({
    //   next: (value) => console.log(value),
    //   // error: (err) => console.log(err),
    //  complete: () => console.log("stream was completed")
    // });

    // setTimeout(() => subscription.unsubscribe(), 3000); 
  }

  load(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
  }

  loadById(id: number): Observable<ITodo> {
    return this.httpClient.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + id);
  }


  addTodo(title: string) {
    this.todos.push({ title, completed: false });
  }

  toggleCompleted(idx: number, data: number) {
    console.log(data);
    const currentTodo = this.todos[idx];
    this.todos[idx] = { ...currentTodo, completed: !currentTodo.completed };
  }
}
