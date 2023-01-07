import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSystemComponent } from 'src/app/components/login-system/login-system.component';
import { RegisterSystemComponent } from 'src/app/components/register-system/register-system.component';

const routes: Routes = [
  {path:"login" , component:LoginSystemComponent},
  {path:"register" , component:RegisterSystemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
