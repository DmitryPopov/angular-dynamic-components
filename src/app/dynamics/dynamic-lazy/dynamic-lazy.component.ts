import { ChangeDetectionStrategy, Component, Inject, InjectionToken, Injector, Input, NgModuleFactory, NgModuleFactoryLoader } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DynamicLazyComponentBase } from './dynamic-lazy.base';
import { LazyComponentResolver } from './dynamic-lazy.resolver';

export const LAZY_MODULE_MAP = new InjectionToken<string>('LAZY_MODULE_MAP');

@Component({
    selector: 'app-dynamic-lazy',
    templateUrl: 'dynamic-lazy.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicLazyComponent extends DynamicLazyComponentBase {

    @Input() name: string;

    ngModuleFactory$: Observable<NgModuleFactory<any>>;

    resolver$: Observable<LazyComponentResolver>;

    constructor(
        @Inject(LAZY_MODULE_MAP) private lazyModuleMap: any[],
        private ngModuleFactoryLoader: NgModuleFactoryLoader,
        private injector: Injector
    ) {
        super();
    }

    ngOnInit() {
        this.ngModuleFactory$ = from(this.ngModuleFactoryLoader.load(this._getModulePathForComponent()));
        this.resolver$ = this.ngModuleFactory$.pipe(
            map(ngModuleFactory =>
                ngModuleFactory.create(this.injector).injector.get(LazyComponentResolver)
            )
        );
    }

    private _getModulePathForComponent() {
        const registryItem = this.lazyModuleMap.reduce((a, b) => a.concat(b), []).find(
          i => i.componentName === this.name
        );
    
        if (registryItem && registryItem.modulePath) {
          // imported modules must be in the format 'path#moduleName'
          return `${registryItem.modulePath}#${registryItem.moduleName}`;
        }
    
        return null;
      }

}
