import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://your-api-endpoint.com'; // Replace with your backend API

  constructor(private http: HttpClient) {}

  uploadJson(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/upload`, data);
  }

  getJson(): Observable<any> {
    return this.http.get(`${this.apiUrl}/json`);
  }
}
