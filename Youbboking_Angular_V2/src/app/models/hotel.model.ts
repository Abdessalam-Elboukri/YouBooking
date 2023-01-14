import { FileHandler } from "./fileHandler";
import { Room } from "./room.model";

export class Hotel{
  id !: number;
  name : string;
  phone : string;
  city : string;
  country : string;
  address : string;
  codePostal : string;
  description:string;
  hotelImage !: FileHandler;

  room !: Room[];

  constructor(){
    this.name = "";
    this.phone = "";
    this.city = "";
    this.country = "";
    this.address = "";
    this.codePostal= "";
    this.description="";
  }

}
