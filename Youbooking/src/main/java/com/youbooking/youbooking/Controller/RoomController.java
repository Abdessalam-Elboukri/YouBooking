package com.youbooking.youbooking.Controller;


import com.youbooking.youbooking.Entities.Room;
import com.youbooking.youbooking.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class RoomController {

    @Autowired
    RoomService roomService;


    @GetMapping("all_rooms/{id_hotel}")
    public List<Room> getRoomsByHotel(@PathVariable Long id_hotel){
        return roomService.getRoomsByHotel(id_hotel);
    }

    @GetMapping("/active-rooms")
    public List<Room> getAllRoomByHotelStatus(){
        return roomService.getAllRoomByHotelStatus();
    }

    @GetMapping("room-detail/{id_room}")
    public Optional<Room> getRoomById(@PathVariable Long id_room){
        return roomService.getRoomById(id_room);
    }
}
