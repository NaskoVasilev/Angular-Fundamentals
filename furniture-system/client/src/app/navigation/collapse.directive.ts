import { 
  Directive, 
  ElementRef, 
  Renderer2,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {

  constructor(
    private button: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click') clickHandler() {
    const divElement = this.renderer.nextSibling(this.button.nativeElement);
    const buttonClassValue = this.button.nativeElement.className;

    if (buttonClassValue.endsWith('collapsed')) {
      this.renderer.removeClass(this.button.nativeElement, 'collapsed');
      this.renderer.removeClass(divElement, 'collapse');
      this.renderer.addClass(divElement, 'in');
    } else {
      this.renderer.addClass(this.button.nativeElement, 'collapsed');
      this.renderer.removeClass(divElement, 'in');
      this.renderer.addClass(divElement, 'collapse');
    }
  }
}
