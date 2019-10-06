import { AbstractControl, ValidationErrors } from '@angular/forms'

export default function validateAge(control: AbstractControl): ValidationErrors | null {
    let errorMessage = "The age must be between 18 and 70";

    return (control.value && (control.value < 18 || control.value > 70)) ? { invalidAgeRange: errorMessage } : null;
}