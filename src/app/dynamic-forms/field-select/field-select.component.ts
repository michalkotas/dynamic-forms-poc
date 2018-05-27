import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.scss']
})
export class FieldSelectComponent extends FieldType implements OnInit {
  selectOptions: SelectItem[] = [];

  constructor() {
    super();
  }

  ngOnInit() {
    // this.formControl.setValue('Volvo');
    this.selectOptions = this.field.templateOptions.options as any[];
    console.log('this', this.field.templateOptions.options);
    this.formControl.valueChanges.subscribe(value => {
      console.log('options', this);
    });
  }

}
