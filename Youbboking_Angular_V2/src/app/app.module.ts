import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginSystemComponent } from 'src/app/pages/login-system/login-system.component';
import { RegisterSystemComponent } from 'src/app/pages/register-system/register-system.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbars/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebars/sidebar/sidebar.component';
import { FormComponent } from './components/form/form.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AddHotelComponent } from './pages/hotel/add-hotel/add-hotel.component';
import { DetailsHotelComponent } from './pages/hotel/details-hotel/details-hotel.component';
import { AddRoomComponent } from './pages/room/add-room/add-room.component';
import { RoomDetailsComponent } from './pages/room/room-details/room-details.component';
import { UpdateRoomComponent } from './pages/room/update-room/update-room.component';
import { NavSecondaryComponent } from './components/navbars/nav-secondary/nav-secondary.component';
import { HotelCardv1Component } from './components/cards/hotel-cardv1/hotel-cardv1.component';
import { HotelCardv2Component } from './components/cards/hotel-cardv2/hotel-cardv2.component';
import { AllHotelsComponent } from './pages/hotel/all-hotels/all-hotels.component';
import { AllRoomsComponent } from './pages/room/all-rooms/all-rooms.component';
import { RoomCardComponent } from './components/cards/room-card/room-card.component';
import { OwnerLayoutComponent } from './layout/owner-layout/owner-layout.component';
import { OwnerSidebarComponent } from './components/sidebars/owner-sidebar/owner-sidebar.component';
import { UpdateHotelComponent } from './pages/hotel/update-hotel/update-hotel.component';
import { MakeReservationComponent } from './pages/reservation/make-reservation/make-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSystemComponent,
    RegisterSystemComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    FormComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AddHotelComponent,
    DetailsHotelComponent,
    AddRoomComponent,
    RoomDetailsComponent,
    UpdateRoomComponent,
    NavSecondaryComponent,
    HotelCardv1Component,
    HotelCardv2Component,
    AllHotelsComponent,
    AllRoomsComponent,
    RoomCardComponent,
    OwnerLayoutComponent,
    OwnerSidebarComponent,
    UpdateHotelComponent,
    MakeReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
