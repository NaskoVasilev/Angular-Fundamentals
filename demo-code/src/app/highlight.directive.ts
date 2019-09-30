import { Directive, Input, OnChanges, SimpleChanges, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[softuniHighlight]',
  exportAs: 'highlighter'
})
export class HighlightDirective implements OnChanges {
  backgroundColor: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input()
  value: number;

  @Input()
  index: number;

  @HostBinding('style.color')
  textColor: string = 'black';

  @HostListener('mouseover', ['$event'])
  mouseOverHandler(event) {
    this.setColor('black');
    this.textColor = 'white';
  }

  @HostListener('mouseout', ['$event'])
  mouseOutHandler(event) {
    this.setColor('white');
    this.textColor = 'black';
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.highlight();
  }

  private highlight() {
    let color: string = 'white';
    if (this.value === this.index) {
      color = 'yellow';
    }
    this.setColor(color);
  }

  private setColor(color: string) {
    this.backgroundColor = color;
    this.renderer.setStyle(this.element.nativeElement, 'background-color', color);
  }
}
