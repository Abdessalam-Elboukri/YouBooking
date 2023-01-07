package com.youbooking.youbooking.Service.Imp;

import com.youbooking.youbooking.Entities.Hotel;
import com.youbooking.youbooking.Entities.Owner;
import com.youbooking.youbooking.Entities.Status;
import com.youbooking.youbooking.Repository.HotelRepository;
import com.youbooking.youbooking.Service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HotelServiceImp implements HotelService {

    @Autowired
    HotelRepository hotelRepository;

    @Override
    public Hotel save(Hotel hotel) throws IllegalAccessException {
        if (hotel == null)
            throw new IllegalAccessException("Please fill all hotel's information");
        if( hotel.getName()==null ||
            hotel.getAddress()==null ||
            hotel.getPhone()==null ||
            hotel.getOwner()==null ||
            hotel.getCity()==null ||
            hotel.getCountry()==null ||
            hotel.getCodePostal()==null)
            throw new IllegalAccessException("Please fill all hotel's information");
        else {
            hotel.setStatus(Status.DEACTIVATE);
            return hotelRepository.save(hotel);
        }
    }

    @Override
    public Hotel updateStatus(Long id) throws IllegalAccessException {
        Optional<Hotel> hotelOptional = hotelRepository.findById(id);
        if(hotelOptional.isEmpty())
            throw new IllegalAccessException("Can't find this Hotel");
        else{
            Hotel hotel = hotelOptional.get();
            System.out.println(hotel.getOwner().getEmail());
            if (hotel.getStatus() == Status.DEACTIVATE) {
                hotel.setStatus(Status.ACTIVE);
            }else{
                hotel.setStatus(Status.DEACTIVATE);
            }
            return hotelRepository.save(hotel);
        }
    }

    @Override
    public Optional<Hotel> findById(Long id) {
        return hotelRepository.findById(id);
    }

    @Override
    public List<Hotel> findAll() {
        return hotelRepository.findAll();
    }

}
