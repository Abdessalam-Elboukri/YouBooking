import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit,OnChanges {

  users!:any;

  constructor(private userService:UserService) { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.getAllUser()
  }

  updateStatus(id:number){
    this.userService.updateStatus(id).subscribe((res)=>{
      Swal.fire(
        'Good job!',
        'Status Changed Successfully!',
        'success'
      )
        this.getAllUser()
    })

  }

  getAllUser(){
    this.userService.getAllUsers().subscribe((res)=>{
      this.users=res
    })
  }



}
