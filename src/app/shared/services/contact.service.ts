import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {}

  setContacts(data: string): Observable<any> {
    return this.http.post('https://formula-test-api.herokuapp.com/contact', data);
  }
}
