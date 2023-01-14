import { Hotel } from "./hotel.model";

export class Room{
  id !: number;
  number !:number;
  nbrBeds !: number;
  image_url!: string;
  price !: number ;
  description !: string;
  hotel !:Hotel ;
}
