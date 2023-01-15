package com.youbooking.youbooking.Controller;

import com.youbooking.youbooking.Entities.Admin;
import com.youbooking.youbooking.Entities.Hotel;
import com.youbooking.youbooking.Entities.Owner;
import com.youbooking.youbooking.Entities.Status;
import com.youbooking.youbooking.Service.AdminService;
import com.youbooking.youbooking.Service.HotelService;
import com.youbooking.youbooking.Service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @Autowired
    AdminService adminService;

    @Autowired
    OwnerService ownerService;

    @Autowired
    HotelService hotelService;

    @GetMapping("/owner_status/{id}")
    public Owner updateOwnerStatus(@PathVariable Long id) throws IllegalAccessException {
        return ownerService.updateStatus(id);
    }

    @GetMapping("/hotel_status/{id}")
    public Hotel updateHotelStatus(@PathVariable Long id) throws IllegalAccessException {
        return hotelService.updateStatus(id);
    }

    @GetMapping("/all_hotels")
    public List<Hotel> getAllHotels(){
        return hotelService.findAll();
    }

    @PostMapping("/register")
    public Admin register(@RequestBody Admin admin) throws IllegalAccessException {
        if(admin==null)
            throw new IllegalAccessException("User Information's are empty");
        else
            return adminService.save(admin);
    }
}
