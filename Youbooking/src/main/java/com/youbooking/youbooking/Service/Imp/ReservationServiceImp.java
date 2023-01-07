package com.youbooking.youbooking.Service.Imp;

import com.youbooking.youbooking.Entities.Reservation;
import com.youbooking.youbooking.Repository.ReservationRepository;
import com.youbooking.youbooking.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationServiceImp implements ReservationService {

    @Autowired
    ReservationRepository reservationRepository;

    @Override
    public Reservation makeReservation() {
        return null;
    }
}
