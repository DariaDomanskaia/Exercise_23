import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";


export function nameValidator(control: AbstractControl): ValidationErrors | null {
  const result = /^[A-zА-яЁё]+$/.test(control.value);
  return result ? null : {userNameValidator: {value: control.value}}
}


@Directive({
  selector: '[userNameValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: UserNameValidatorDirective, multi: true}
  ]
})
export class UserNameValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const result = /^[A-zА-яЁё]+$/.test(control.value);
    return result ? null : {userNameValidator: {value: control.value}}
  }

}
