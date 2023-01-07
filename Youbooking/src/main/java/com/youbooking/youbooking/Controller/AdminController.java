package com.youbooking.youbooking.Controller;

import com.youbooking.youbooking.Entities.Hotel;
import com.youbooking.youbooking.Entities.Owner;
import com.youbooking.youbooking.Entities.Status;
import com.youbooking.youbooking.Service.AdminService;
import com.youbooking.youbooking.Service.HotelService;
import com.youbooking.youbooking.Service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/admin")
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
}
