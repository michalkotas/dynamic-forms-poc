import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FormlyFieldConfig } from '@ngx-formly/core/lib/components/formly.field.config';

const DATA = './assets/db.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getSchema(): Observable<FormlyFieldConfig[]> {
    return this.http
      .get<{[fieldName: string]: FormlyFieldConfig[]}>(DATA)
      .pipe(map(resp => resp.user), catchError(this.handleError('getHeroes', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

