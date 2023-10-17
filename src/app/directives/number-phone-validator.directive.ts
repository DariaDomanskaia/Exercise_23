import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

export function numberPhoneValidator(control: AbstractControl): ValidationErrors | null {
  const result = /^(\+?)\d{11}$/.test(control.value);
  return result ? null : {numberPhoneValidator: {value: control.value}}
}


@Directive({
  selector: '[numberPhoneValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: NumberPhoneValidatorDirective, multi: true}
  ]
})
export class NumberPhoneValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control.value);
    const result = /^(\+?)\d{11}$/.test(control.value);
    return result ? null : {numberPhoneValidator: {value: control.value}}
  }

}
