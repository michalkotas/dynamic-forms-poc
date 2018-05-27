import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss']
})
export class FieldInputComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.formControl.valueChanges.subscribe(value => {
      console.log(this);
    });
  }

}
