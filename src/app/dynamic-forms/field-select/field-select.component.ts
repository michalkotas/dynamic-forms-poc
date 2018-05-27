import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.scss']
})
export class FieldSelectComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.formControl.setValue('Volvo');
    this.formControl.valueChanges.subscribe(value => {
      console.log(this);
    });
  }

}
