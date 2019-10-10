import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { element } from 'protractor';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[appImageUrlValidator]'
})
export class ImageUrlValidatorDirective {

  constructor(private elemnet: ElementRef, private form: NgForm, private renderer: Renderer2) { }

  @HostListener('input')
  inputHandle() {
    let color: string;
    let value: string = this.elemnet.nativeElement.value;
    if (value.startsWith('http') && (value.endsWith('.png') || value.endsWith('.jpg'))) {
      color = 'green';
      this.form.control.setErrors(null);
    }
    else{
      color = 'red';
      this.form.control.setErrors({image: true});
    }

    this.renderer.setStyle(this.elemnet, 'border', '2px solid ' + color);
  }
}
