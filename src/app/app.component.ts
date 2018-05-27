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
  userForm = new FormGroup({});
  userModel = {};
  userFields: FormlyFieldConfig[];

  carForm = new FormGroup({});
  carModel = {};
  carFields: FormlyFieldConfig[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getUserSchema().subscribe((schema) => {
      this.userFields = schema;
    });

    this.apiService.getCarSchema().subscribe((schema) => {
      this.carFields = schema;
    });
  }

  userSubmit() {
    if (this.userForm.valid) {
      alert(JSON.stringify(this.userModel));
    }
  }

  carSubmit() {
    if (this.carForm.valid) {
      alert(JSON.stringify(this.carModel));
    }
  }
}
