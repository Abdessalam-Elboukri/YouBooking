import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Reservation } from "../models/resrvation.model";



@Injectable({
  providedIn :'root'
})

export class ReservationService{

  constructor(private http:HttpClient ){}

  private base_url = environment.base_url;

  getAllResv():Observable<any>{
    return this.http.get(this.base_url+"admin/all_reservation")
  }

  addResv(reserve : FormData, id_room:number):Observable<any>{
    return this.http.post(this.base_url+"reserve/"+id_room,reserve)
  }

}
