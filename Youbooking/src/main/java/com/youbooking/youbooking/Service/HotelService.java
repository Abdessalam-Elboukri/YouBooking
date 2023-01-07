package com.youbooking.youbooking.Service;

import com.youbooking.youbooking.Entities.Hotel;

import java.util.List;
import java.util.Optional;

public interface HotelService {
    Hotel save(Hotel hotel) throws IllegalAccessException;

    Hotel updateStatus(Long id) throws IllegalAccessException;

    Optional<Hotel> findById(Long id);

    List<Hotel> findAll();
}
