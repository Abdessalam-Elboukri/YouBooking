import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginSystemComponent } from 'src/app/components/login-system/login-system.component';
import { RegisterSystemComponent } from 'src/app/components/register-system/register-system.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllHotelsComponent } from './components/get-all-hotels/get-all-hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSystemComponent,
    RegisterSystemComponent,
    GetAllHotelsComponent
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
