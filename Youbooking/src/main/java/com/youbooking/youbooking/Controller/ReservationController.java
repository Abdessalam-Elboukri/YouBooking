package com.youbooking.youbooking.Controller;

import com.youbooking.youbooking.Entities.Client;
import com.youbooking.youbooking.Entities.Reservation;
import com.youbooking.youbooking.Entities.Room;
import com.youbooking.youbooking.Entities.Users;
import com.youbooking.youbooking.Service.ClientService;
import com.youbooking.youbooking.Service.ReservationService;
import com.youbooking.youbooking.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    @Autowired
    ClientService clientService;

    @Autowired
    RoomService roomService;


    @PostMapping("/reserve/{id}")
    public Reservation makeReservation(@PathVariable Long id, @RequestPart("reserveData") Reservation reservation ,@RequestPart("user") String user) throws IllegalAccessException {
        Client client=clientService.getByEmail(user);
        Optional<Room> room =roomService.getRoomById(id);
        System.out.println(reservation.getEndDate());
        if(client==null)
            throw new IllegalAccessException("User Not found");
        else if(room.isEmpty())
            throw new IllegalAccessException("Room Not found");
        else {
            reservation.setClient(client);
            reservation.setRoom(room.get());
            return reservationService.save(reservation);
        }
    }

    @GetMapping("/all_reservation")
    public List<Reservation> getAllResrv(){
        return reservationService.getAll();
    }
}
