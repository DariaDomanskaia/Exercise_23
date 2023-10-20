import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

export function addressValidator(control: AbstractControl): ValidationErrors | null {
  const result = /(^[A-Za-zА-Яа-я0-9-\/\s]+)$/.test(control.value);
  return result ? null : {addressValidator: {value: control.value}};
}

@Directive({
  selector: '[addressValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: AddressValidatorDirective, multi: true}
  ]
})
export class AddressValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const result = /(^[A-Za-zА-Яа-я0-9-\/\s]+)$/.test(control.value);
    return result ? null : {addressValidator: {value: control.value}};
  }

}
