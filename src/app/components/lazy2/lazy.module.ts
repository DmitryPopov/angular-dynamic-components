import { NgModule } from '@angular/core';
import { LazyComponentResolver } from '@app/dynamics';

import { HelloLazy2Module } from './hello';

@NgModule({
    providers: [ LazyComponentResolver ],
    exports: [ HelloLazy2Module ]
})
export class Lazy2Module {}
