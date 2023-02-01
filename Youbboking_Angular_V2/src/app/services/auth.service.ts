import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { User } from "../models/user.model";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { Login } from "../models/login.model";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService{

  private base_url = environment.base_url;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();


  constructor(private httpClient: HttpClient,private storageService:StorageService){
    const token = this.storageService.getUser();
  }

  //login
  login(login:any) {
    return this.httpClient.post(this.base_url+"login",login ,{
      observe: 'response'
    }).pipe(map((response:HttpResponse<any>) =>{
      const body = response.body;
      return body.data;
    }))
  }

  //register
  register(user : User): Observable<any> {
    if(user.role.id==3){//Admin
      return this.httpClient.post(this.base_url + 'admin/register',user,httpOptions);
    }

    else if(user.role.id==2){//Owner
      return this.httpClient.post(this.base_url + 'owner/register',user,httpOptions);
    }

    else //Client
    return this.httpClient.post(this.base_url + 'client/register',user,httpOptions);
  }





  //logout
  logout(): Observable<any> {
    return this.httpClient.post(this.base_url + 'logout', { }, httpOptions);
  }

  // login Api
  loginApi(loginUser:Login) {
    return this.httpClient.post(this.base_url+'login',loginUser);
  }

}

