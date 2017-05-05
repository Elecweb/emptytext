import { NgModule, } from '@angular/core';
import { EmptyTextDirective } from './empty-text.directive';
import { EmptyTextService } from './empty-text.service';
@NgModule({
    imports: [],
    exports: [EmptyTextDirective],
    declarations: [EmptyTextDirective],
    providers: [EmptyTextService],
})
export class EmptyTextModule { }
