import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormControlSchema } from '@ngxd/forms';

export class DynamicFormControlComponentBase {

    @Input() control: FormControl;
    @Input() schema: FormControlSchema;

}
