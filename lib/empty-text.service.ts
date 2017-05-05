import { Injectable } from '@angular/core';

@Injectable()
export class EmptyTextService {
    emptyTextDisplay:string = "empty";
    constructor() { 
        
    }

    get():string{
        return this.emptyTextDisplay;
    }

    set(emptyTextDisplay:string){
        this.emptyTextDisplay = emptyTextDisplay;
    }
}