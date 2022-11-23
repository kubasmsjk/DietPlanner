import { Directive, ElementRef, OnChanges, Output, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appGrayed]'
})
export class GrayedDirective{
  
  constructor(private el: ElementRef, private renderer: Renderer2) { 

  }
  
}
