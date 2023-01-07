package com.youbooking.youbooking.Service.Imp;

import com.youbooking.youbooking.Entities.Room;
import com.youbooking.youbooking.Entities.RoomStatus;
import com.youbooking.youbooking.Repository.RoomRepository;
import com.youbooking.youbooking.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomServiceImp implements RoomService {

    @Autowired
    RoomRepository roomRepository;

    @Override
    public Room save(Room room) throws IllegalAccessException {
        if(room==null)
            throw new IllegalAccessException("please fill all Room's information");
        else if (room.getNumber() < 1 || room.getNbrBeds()<0 ||room.getPrice()<0)
            throw new IllegalAccessException("please enter a valid Room's information");
        else{
            room.setRoomStatus(RoomStatus.AVAILABLE);
            return roomRepository.save(room);
        }
    }
}
