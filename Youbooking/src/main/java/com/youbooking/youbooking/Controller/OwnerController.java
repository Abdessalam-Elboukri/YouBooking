package com.youbooking.youbooking.Controller;

import com.youbooking.youbooking.Entities.Hotel;
import com.youbooking.youbooking.Entities.Owner;
import com.youbooking.youbooking.Entities.Room;
import com.youbooking.youbooking.Service.HotelService;
import com.youbooking.youbooking.Service.OwnerService;
import com.youbooking.youbooking.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/owners")
public class OwnerController {

    @Autowired
    OwnerService ownerService;
    @Autowired
    HotelService hotelService;
    @Autowired
    RoomService roomService;



    @PostMapping("/register")
    public Owner register(@RequestBody Owner owner) throws IllegalAccessException {
        if(owner==null)
            throw new IllegalAccessException("User Information's are empty");
        else
            return ownerService.save(owner);
    }

    @PostMapping("/add_hotel")
    public Hotel addHotel(@RequestBody Hotel hotel) throws IllegalAccessException {
        if(hotel==null)
            throw new IllegalAccessException("Hotel Information's are empty");
        else
            return hotelService.save(hotel);
    }

    @PostMapping("/hotel/{id}/add_room")
    public Room addRoom(@PathVariable Long id ,@RequestBody Room room)throws IllegalAccessException{
        Optional<Hotel> hotelOptional = hotelService.findById(id);
        if(hotelOptional.isEmpty()){
            throw new IllegalAccessException("No Hotel founds");
        }else {
            return roomService.save(room);
        }
    }

}
