package com.youbooking.youbooking.Service;

import com.youbooking.youbooking.Entities.Reservation;

public interface ReservationService {
    Reservation save(Reservation reservation) throws IllegalAccessException;
}
