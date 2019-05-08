import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule } from '@angular/material';
import { DynamicFormModule } from '@app/dynamics';

import { TableColumnSchemaModalComponent } from './table-column-schema-modal.component';
import { TableSchemaBuilder } from './table-schema.builder';
import { TableSchemaComponent } from './table-schema.component';

@NgModule({
    imports: [ CommonModule, DynamicFormModule, MatDialogModule, MatButtonModule, MatCardModule ],
    declarations: [ TableSchemaComponent, TableColumnSchemaModalComponent ],
    entryComponents: [ TableColumnSchemaModalComponent ],
    exports: [ TableSchemaComponent ],
    providers: [ TableSchemaBuilder ]
})
export class TableSchemaModule {}
