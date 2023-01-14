package com.youbooking.youbooking.Controller;

import com.youbooking.youbooking.Entities.Hotel;
import com.youbooking.youbooking.Entities.Owner;
import com.youbooking.youbooking.Entities.Room;
import com.youbooking.youbooking.Service.HotelService;
import com.youbooking.youbooking.Service.OwnerService;
import com.youbooking.youbooking.Service.RoomService;
import com.youbooking.youbooking.aws.AwsFolders;
import com.youbooking.youbooking.aws.S3Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URL;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class OwnerController {

    @Autowired
    OwnerService ownerService;
    @Autowired
    HotelService hotelService;
    @Autowired
    RoomService roomService;



    @PostMapping("/owner/register")
    public Owner register(@RequestBody Owner owner) throws IllegalAccessException {
        if(owner==null)
            throw new IllegalAccessException("User Information's are empty");
        else
            return ownerService.save(owner);
    }



    @PostMapping("/hotel/add_room/{id}")
    public Room addRoom(@PathVariable Long id ,@RequestBody Room room)throws IllegalAccessException{
        Optional<Hotel> hotelOptional = hotelService.findById(id);
        if(hotelOptional.isEmpty()){
            throw new IllegalAccessException("No Hotel founds");
        }else {
            room.setHotel(hotelOptional.get());
            return roomService.save(room);
        }
    }

}
