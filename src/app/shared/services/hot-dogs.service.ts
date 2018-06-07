import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class HotDogsService {

  constructor(private http: HttpClient) {}

  getHotDogs(): Observable<any> {
    return this.http.get('https://formula-test-api.herokuapp.com/menu');
  }
}
