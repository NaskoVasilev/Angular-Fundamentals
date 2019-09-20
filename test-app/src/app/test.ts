import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    template: '<h1>{{title}}</h1>',
    styles: [`h1 {background-color: red;}`]
})
export class TestComponent {
    title = "App test";
}