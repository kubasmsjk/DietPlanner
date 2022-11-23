import {FormControl} from '@angular/forms'; 

export function nameValidator(control: FormControl){
  const surnameValue = control.value;
  const regexp: RegExp=/^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i; 
  return regexp.test(surnameValue)? null : {onlyLetters: true};
}