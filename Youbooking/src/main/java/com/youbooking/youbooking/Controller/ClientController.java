package com.youbooking.youbooking.Controller;

import com.youbooking.youbooking.Entities.Client;
import com.youbooking.youbooking.Entities.Owner;
import com.youbooking.youbooking.Entities.Reservation;
import com.youbooking.youbooking.Entities.Role;
import com.youbooking.youbooking.Service.ClientService;

import com.youbooking.youbooking.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class ClientController {
    @Autowired
    ClientService clientService;

    @Autowired
    ReservationService reservationService;

//    @GetMapping("/register")
//    public List<Role> getAllRole(){
//       return
//    }

    @PostMapping("/client/register")
    public Client register(@RequestBody Client client) throws IllegalAccessException {
        if(client==null)
            throw new IllegalAccessException("User Information's are empty");
        else
            return clientService.save(client);
    }

    @PostMapping("/reservation")
    public Reservation reservation(@RequestBody Reservation reservation){
        return reservationService.makeReservation();
    }
}
