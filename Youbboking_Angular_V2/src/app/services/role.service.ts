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

export class RoleService{

  constructor(private http: HttpClient){}

  private base_url = environment.base_url;

  getRoles():Observable<any>{
    return this.http.get(this.base_url+"all_roles")
  }

}

