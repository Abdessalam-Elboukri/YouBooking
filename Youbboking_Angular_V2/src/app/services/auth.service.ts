import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService{

  constructor(private httpClient: HttpClient){}

  private base_url = environment.base_url;

  //login
  loginUser(user : User):Observable<object>{
    return this.httpClient.post(
      `${this.base_url + 'login'}`,user,httpOptions);
  }
  //register
  register(user : User): Observable<any> {
    return this.httpClient.post(
      this.base_url + 'register',user,httpOptions);
  }
  //logout
  logout(): Observable<any> {
    return this.httpClient.post(this.base_url + 'logout', { }, httpOptions);
  }

}

