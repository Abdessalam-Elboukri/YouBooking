package com.youbooking.youbooking.Repository;

import com.youbooking.youbooking.Entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository<Hotel,Long> {
    List<Hotel> findHotelsByCityLike(String city);
    List<Hotel> findHotelsByOwner_Email(String email);

    List<Hotel> findHotelsByOrderByIdDesc();
}
