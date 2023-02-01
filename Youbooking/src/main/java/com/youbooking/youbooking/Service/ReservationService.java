package com.youbooking.youbooking.Service;

import com.youbooking.youbooking.Entities.Reservation;

import java.util.List;

public interface ReservationService {
    Reservation save(Reservation reservation) throws IllegalAccessException;

    List<Reservation> getAll();
}
