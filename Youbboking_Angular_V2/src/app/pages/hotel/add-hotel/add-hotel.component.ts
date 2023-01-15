import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FileHandler } from 'src/app/models/fileHandler';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/services/hotel.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  hotel:Hotel;
  base_url= environment.base_url;
  email!:string;


  constructor(private hotelService:HotelService,private storageService:StorageService, private router:Router, private http:HttpClient) {
    this.hotel=new Hotel();
  }

  ngOnInit(): void {
    this.email= this.storageService.getUser().sub
  }

  onFileChanged(event:any) {
    if(event.target.files){
      const file = event.target.files[0];
      const fileHandler : FileHandler ={
        file : file
      }
      this.hotel.hotelImage=fileHandler;
    }
  }

  prepareFormData(hotel:Hotel): FormData{
    const formData = new FormData();

    formData.append('hotel',
                    new Blob([JSON.stringify(hotel)],{type:'application/json'}));

    formData.append('MyFile',
                    hotel.hotelImage.file,
                    hotel.hotelImage.file.name);

    formData.append('user',
                    this.email
    )
    return formData;

  }

  addHotel(form:NgForm){
    if(form.valid){
    console.log("starting upload image ...")
    const hotelFormData=this.prepareFormData(this.hotel);
    this.hotelService.addHotel(hotelFormData).subscribe((res)=>{
      this.router.navigate(["all_hotels"])
    })
  }
  }

}
