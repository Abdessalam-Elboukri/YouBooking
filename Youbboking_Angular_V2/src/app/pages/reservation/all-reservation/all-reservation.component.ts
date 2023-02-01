import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-all-reservation',
  templateUrl: './all-reservation.component.html',
  styleUrls: ['./all-reservation.component.css']
})
export class AllReservationComponent implements OnInit {

  reservations:any
  constructor(private reservationSrvice:ReservationService) { }

  ngOnInit(): void {
    this.getAllResv()
  }

  getAllResv(){
    this.reservationSrvice.getAllResv().subscribe((res)=>{
      console.log(res);
      this.reservations=res
    })
  }

}
