import { Directive, ElementRef,Input,OnChanges,OnInit,Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appGrayed]'
})
export class GrayedDirective implements OnInit, OnChanges {

  @Input() isformValid : boolean | undefined;
  button = this.el.nativeElement;

  constructor(private el: ElementRef, private renderer: Renderer2) { 

  }
  
  ngOnInit(): void {
    if(!this.button['disable']){
    this.renderer.setStyle(this.button,"background","#B8B8B8")
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isformValid'].currentValue == true){
      this.renderer.removeStyle(this.button,"background");
    } else if(changes['isformValid'].currentValue == false) {
      this.renderer.setStyle(this.button,"background","#B8B8B8")
    }
  }
  
}

