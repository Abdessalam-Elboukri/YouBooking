package com.youbooking.youbooking.Controller;

import com.youbooking.youbooking.Entities.Client;
import com.youbooking.youbooking.Entities.Reservation;
import com.youbooking.youbooking.Entities.Users;
import com.youbooking.youbooking.Service.ClientService;
import com.youbooking.youbooking.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    @Autowired
    ClientService clientService;



    @PostMapping("/reserve/{id}")
    public Reservation makeReservation(@PathVariable Long id, @RequestPart("reserveData") Reservation reservation ,@RequestPart("user") String user) throws IllegalAccessException {
        Client client=clientService.getByEmail(user);
        return reservationService.save(reservation);
    }
}
