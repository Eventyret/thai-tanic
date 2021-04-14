import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(endpoint: string): Observable<any> {
    return this.http.get(endpoint);
  }
  post(endpoint: string, payload: {}): Observable<any> {
    return this.http.post(endpoint, payload);
  }
  update(endpoint: string, payload: {}): Observable<any> {
    return this.http.put(endpoint, payload);
  }
  delete(endpoint: string): Observable<any> {
    return this.http.delete(endpoint);
  }
}
