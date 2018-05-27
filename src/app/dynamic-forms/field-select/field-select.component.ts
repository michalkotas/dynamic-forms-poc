import { Component, OnInit } from '@angular/core';
import { FieldType, FormlyTemplateOptions } from '@ngx-formly/core';
import { SelectItem } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.scss']
})
export class FieldSelectComponent extends FieldType implements OnInit {
  selectOptions: SelectItem[] = [];
  templateOptions: FormlyTemplateOptions;
  showClear: boolean;
  dropdownIcon: string;
  constructor() {
    super();
  }

  ngOnInit() {
    this.showClear = this.field.templateOptions.showClear;
    this.dropdownIcon = this.field.templateOptions.dropdownIcon ? this.field.templateOptions.dropdownIcon : 'fa fa-fw fa-caret-down';
    if (this.field.templateOptions.dependsOnField) {
      const parentFormControl: FormControl = this.form.controls[this.field.templateOptions.dependsOnField] as FormControl;
      if (parentFormControl) {
        parentFormControl.valueChanges.pipe(debounceTime(100)).subscribe(value => {
          this.selectOptions = (this.field.templateOptions.options as any[]).filter(option => option.parentValue === value);
        });
      }
    } else {
      this.selectOptions = this.field.templateOptions.options as SelectItem[];
    }
  }
}
