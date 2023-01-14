package com.youbooking.youbooking.Service;

import com.youbooking.youbooking.Entities.Room;

import java.util.List;
import java.util.Optional;

public interface RoomService {
    Room save(Room room) throws IllegalAccessException;

    List<Room> getRoomsByHotel(Long id);

    List<Room> getAllRoomByHotelStatus();

    Optional<Room> getRoomById(Long id_room);
}
