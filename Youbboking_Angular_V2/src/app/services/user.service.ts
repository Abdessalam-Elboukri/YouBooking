import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.base_url ;

@Injectable({
  providedIn: 'root',
})
export class UserService{

  constructor(private http: HttpClient) {}
  private base_url = environment.base_url;

  getAllUsers():Observable<any>{
    return this.http.get(this.base_url+"all_users")
  }
  
  getOneUser(email:string):Observable<any>{
    return this.http.get(this.base_url+"user/"+email)
  }

  updateStatus(id_user:number):Observable<any>{
    return this.http.get(this.base_url+"id_user/"+id_user)
  }


}



