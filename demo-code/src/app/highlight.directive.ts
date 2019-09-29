import { Directive, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[softuniHighlight]'
})
export class HighlightDirective implements OnChanges {
  constructor(private element: ElementRef) { }
  
  @Input()
  value: number;

  @Input()
  index:  number;
 
  ngOnChanges(changes: SimpleChanges): void {
    this.highlight();
  }

  private highlight(){
    let color: string = 'white';
    if(this.value === this.index){
      color = 'yellow';
    }
    this.element.nativeElement.style.backgroundColor = color;
  }
}
