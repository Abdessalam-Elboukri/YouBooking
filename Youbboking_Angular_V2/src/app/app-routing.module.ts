import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSystemComponent } from 'src/app/pages/login-system/login-system.component';
import { RegisterSystemComponent } from 'src/app/pages/register-system/register-system.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { OwnerLayoutComponent } from './layout/owner-layout/owner-layout.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { HomeComponent } from './pages/home/home.component';
import { AddHotelComponent } from './pages/hotel/add-hotel/add-hotel.component';
import { AllHotelsComponent } from './pages/hotel/all-hotels/all-hotels.component';
import { OwnerHotelComponent } from './pages/hotel/owner-hotel/owner-hotel.component';
import { AllReservationComponent } from './pages/reservation/all-reservation/all-reservation.component';
import { AddRoomComponent } from './pages/room/add-room/add-room.component';
import { AllRoomsComponent } from './pages/room/all-rooms/all-rooms.component';
import { RoomByHotelComponent } from './pages/room/room-by-hotel/room-by-hotel.component';
import { RoomDetailsComponent } from './pages/room/room-details/room-details.component';

const routes: Routes = [
  {path:"login" , component:LoginSystemComponent},
  {path:"register" , component:RegisterSystemComponent},

  {path : '',
    component : ClientLayoutComponent,
    children:[
      {path:"" , component:HomeComponent},
      {path:"our-rooms" , component:AllRoomsComponent},
      {path:"room-detail/:id" , component:RoomDetailsComponent},


    ]
  },

  {path : '',
    component : AdminLayoutComponent,
    children:[
      {path:"all_hotels" , component:AllHotelsComponent},
      {path:"all_rooms",component:AllRoomsComponent },
      {path:"all_users",component:AllUsersComponent },
      {path:"roomsof_hotel/:id",component:RoomByHotelComponent },
      {path:"all_reservations",component:AllReservationComponent }


    ]
  },

  {path : '',
    component : OwnerLayoutComponent,
    children:[
      {path:"add_hotel" , component:AddHotelComponent},
      {path:"your_hotels" , component:OwnerHotelComponent},
      {path:"add_room/:id",component:AddRoomComponent },
      {path:"rooms/:id",component:RoomByHotelComponent }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
