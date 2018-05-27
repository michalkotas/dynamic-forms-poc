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

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getSchema().subscribe((schema) => {
      this.userFields = schema;
    });
  }

  userSubmit() {
    if (this.userForm.valid) {
      alert(JSON.stringify(this.userModel));
    }
  }
}
