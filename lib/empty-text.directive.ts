import { Directive,ElementRef,AfterViewInit } from '@angular/core';
import { EmptyTextService } from './empty-text.service';
@Directive({ selector: '[emptytext]' })
export class EmptyTextDirective implements AfterViewInit{
    constructor(private el:ElementRef,private empservice:EmptyTextService) { 
       
        
    }

    ngAfterViewInit(){
        
        let content:string = this.el.nativeElement.innerHTML;
       
        if(!content){
            this.el.nativeElement.innerHTML = this.empservice.get();
        }
    }
}