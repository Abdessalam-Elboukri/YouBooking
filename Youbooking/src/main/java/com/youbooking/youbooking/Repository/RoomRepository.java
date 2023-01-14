package com.youbooking.youbooking.Repository;

import com.youbooking.youbooking.Entities.Room;
import com.youbooking.youbooking.Entities.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room,Long> {
    List<Room> findRoomsByHotel_Id(Long id);
    List<Room> findRoomsByHotel_Status(Status status);
}
