import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';
import validateImageUrl from './reactive-register-form/image-url-validator.function';

@Directive({
  selector: '[appImageValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ImageValidatorDirective, multi: true }]
})
export class ImageValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return validateImageUrl(control);
  }
}