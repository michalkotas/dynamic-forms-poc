import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldInputComponent } from './field-types/field-input/field-input.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldSelectComponent } from './field-select/field-select.component';
import { DropdownModule, InputTextModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    FormlyModule.forRoot({
      types: [
        { name: 'input', component: FieldInputComponent },
        { name: 'select', component: FieldSelectComponent },
      ]
    }),
  ],
  exports: [FormlyModule],
  declarations: [FieldInputComponent, FieldSelectComponent]
})
export class DynamicFormsModule { }
