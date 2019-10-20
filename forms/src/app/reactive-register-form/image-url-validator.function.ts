import { AbstractControl, ValidationErrors } from '@angular/forms'

export default function validateImageUrl(control: AbstractControl): ValidationErrors | null {
    let imageUrl: string = control.value;
    if (imageUrl && imageUrl.startsWith('http') && (imageUrl.endsWith('.png') || imageUrl.endsWith('.jpg'))){
      return null;
    }
    return { image: "Image url must starts with http and ends with .png/.jpg" }
}