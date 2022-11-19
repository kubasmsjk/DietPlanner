import {FormControl, FormGroup} from '@angular/forms'; 

export function surnameValidator(control: FormControl): {[key: string]: any} {
  const surnameValue = control.value;
  const regexp: RegExp=/^[0-9]+$/i; 
  return regexp.test(surnameValue)? null : {onlyLetters: true};
}