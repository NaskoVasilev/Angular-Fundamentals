import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';
import validateAge from './age-validator.function';

@Directive({
  selector: '[softuniAgeValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AgeValidatorDirective, multi: true }]
})
export class AgeValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return validateAge(control);
  }
}
