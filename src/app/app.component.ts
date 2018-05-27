import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  form = new FormGroup({});
  model;
  fields: FormlyFieldConfig[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getSchema().subscribe((schema) => {
      this.fields = schema as FormlyFieldConfig[];
    });
  }
}
