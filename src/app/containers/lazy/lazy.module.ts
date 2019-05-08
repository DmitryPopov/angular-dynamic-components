import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatGridListModule, MatToolbarModule } from '@angular/material';
import { DynamicLazyModule } from '@app/dynamics';

import { LazyPageComponent } from './lazy.component';
import { LazyRouting } from './lazy.routing';

@NgModule({
    imports: [
        CommonModule, LazyRouting,
        DynamicLazyModule.forChild([{
            componentName: 'Angular',
            modulePath: 'src/app/components/lazy/lazy.module',
            moduleName: 'LazyModule'
          },
          {
            componentName: 'Angular2',
            modulePath: 'src/app/components/lazy2/lazy.module',
            moduleName: 'Lazy2Module'
          }]),
        MatCardModule, MatToolbarModule, MatGridListModule
    ],
    declarations: [ LazyPageComponent ]
})
export class LazyPageModule {}
