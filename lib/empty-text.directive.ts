import { Directive,ElementRef } from '@angular/core';
import { EmptyTextService } from './empty-text.service';
@Directive({ selector: '[emptytext]' })
export class EmptyTextDirective {
    constructor(el:ElementRef,private empservice:EmptyTextService) { 
       
        let content:string = el.nativeElement.innerHTML;
        console.log("content",content);
        if(!content){
            el.nativeElement.innerHTML = this.empservice.get();
        }
        
    }
}