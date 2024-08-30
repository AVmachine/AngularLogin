import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postLogin(username: string, password: string): Observable<boolean>
    {
      return this.http.post<boolean>("http://localhost:5081/UserLogin", {email: username, password: password});
    }

}
