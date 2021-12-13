import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {

  }

  private baseUrl = 'http://localhost:3000';

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`, {
      observe: 'response'
    });
  }

  getUser(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`, {
      observe: 'response'
    });
  }

  addUser(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, body, {
      observe: 'response'
    });
  }

  updateUser(body: any, id: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}`, body, {
      observe: 'response'
    });
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`, {
      observe: 'response'
    });
  }
}
