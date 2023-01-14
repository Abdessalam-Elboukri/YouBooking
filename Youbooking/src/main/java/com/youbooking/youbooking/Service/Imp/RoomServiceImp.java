package com.youbooking.youbooking.Service.Imp;

import com.youbooking.youbooking.Entities.Room;
import com.youbooking.youbooking.Entities.RoomStatus;
import com.youbooking.youbooking.Entities.Status;
import com.youbooking.youbooking.Repository.RoomRepository;
import com.youbooking.youbooking.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomServiceImp implements RoomService {

    @Autowired
    RoomRepository roomRepository;

    @Override
    public Room save(Room room) throws IllegalAccessException {
        if(room==null)
            throw new IllegalAccessException("please fill all Room's information");
        else if (room.getNumber() < 1 || room.getNbrBeds()<=0 ||room.getPrice()<=0)
            throw new IllegalAccessException("please enter a valid Room's information");
        else{
            room.setRoomStatus(RoomStatus.AVAILABLE);
            return roomRepository.save(room);
        }
    }

    @Override
    public List<Room> getRoomsByHotel(Long id) {
        return roomRepository.findRoomsByHotel_Id(id);
    }

    @Override
    public List<Room> getAllRoomByHotelStatus() {
        return roomRepository.findRoomsByHotel_Status(Status.ACTIVE);
    }

    @Override
    public Optional<Room> getRoomById(Long id_room) {
        return roomRepository.findById(id_room);
    }
}
