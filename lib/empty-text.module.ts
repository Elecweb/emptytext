import { NgModule, } from '@angular/core';
import { EmptyTextDirective } from './empty-text.directive';
import { EmptyTextService } from './empty-text.service';
import { TestComponent } from './test.component';
@NgModule({
    imports: [],
    exports: [EmptyTextDirective,TestComponent],
    declarations: [EmptyTextDirective,TestComponent],
    providers: [EmptyTextService],
})
export class EmptyTextModule { }
