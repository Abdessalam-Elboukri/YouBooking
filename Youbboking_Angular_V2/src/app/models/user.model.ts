import { Role } from "./role.model";

export class User{
  fullname : string;
  email : string;
  password : string;
  phone: string;
  role : Role;

constructor(){
    this.fullname = "";
    this.email = "";
    this.phone = "";
    this.password = "";
    this.role = new Role();
}

}


