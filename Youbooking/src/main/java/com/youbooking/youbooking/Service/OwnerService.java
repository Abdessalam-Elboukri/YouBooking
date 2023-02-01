package com.youbooking.youbooking.Service;

import com.youbooking.youbooking.Entities.Hotel;
import com.youbooking.youbooking.Entities.Owner;

import java.util.Optional;

public interface OwnerService {
    Owner save(Owner owner) throws IllegalAccessException;
    Optional<Owner> findById(Long id);
    Owner findByEmail(String email);


    Owner getOwnerByemail(String user);
}
