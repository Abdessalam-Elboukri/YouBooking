package com.youbooking.youbooking.Service.Imp;

import com.youbooking.youbooking.Entities.Reservation;
import com.youbooking.youbooking.Entities.ReservationStatus;
import com.youbooking.youbooking.Repository.ReservationRepository;
import com.youbooking.youbooking.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImp implements ReservationService {

    @Autowired
    ReservationRepository reservationRepository;

    @Override
    public Reservation save(Reservation reservation) throws IllegalAccessException {
        if(reservation==null)
            throw new IllegalAccessException("check the reservation info");
        else if(reservation.getStartDate()==null ||
                reservation.getEndDate()==null ||
                reservation.getClient()==null ||
                reservation.getRoom()==null
        )
            throw new IllegalAccessException("check all the reservation info");
        else {
            reservation.setReservationStatus(ReservationStatus.PENDING);
            return reservationRepository.save(reservation);
        }
    }

    @Override
    public List<Reservation> getAll() {
        return reservationRepository.findAll();
    }
}
