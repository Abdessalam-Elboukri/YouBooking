import { Room } from "./room.model";
import { User } from "./user.model";

export class Reservation{
  startDate!: Date;
  endDate !: Date;
  client !: User;
  room!:Room
}
