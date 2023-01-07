package com.youbooking.youbooking.Service.Imp;

import com.youbooking.youbooking.Entities.Owner;
import com.youbooking.youbooking.Entities.Status;
import com.youbooking.youbooking.Repository.OwnerRepository;
import com.youbooking.youbooking.Service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class OwnerServiceImp implements OwnerService {

    @Autowired
    OwnerRepository ownerRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public Owner save(Owner owner) throws IllegalAccessException {
        if (owner == null) {
            throw new IllegalAccessException("Please fill all user information");
        }
        if(owner.getFullname()==null|| owner.getPhone()==null ||owner.getEmail()==null || owner.getPassword()==null){
            throw new IllegalAccessException("Please fill all user information");
        }
        else {
            owner.setPassword(passwordEncoder.encode(owner.getPassword()));
            owner.setStatus(Status.DEACTIVATE);
            return ownerRepository.save(owner);
        }
    }

    @Override
    public Optional<Owner> findById(Long id) {
        return ownerRepository.findById(id);
    }

    @Override
    public Owner findByEmail(String email) {
        return null;
    }

    @Override
    public Owner updateStatus(Long id) throws IllegalAccessException {
        Optional<Owner> owner = ownerRepository.findById(id);
        if(owner.isEmpty())
            throw new IllegalAccessException("Can't find this Owner");
        else{
            Owner owner1 = owner.get();
            System.out.println(owner1.getEmail());
            if (owner1.getStatus() == Status.DEACTIVATE) {
                owner1.setStatus(Status.ACTIVE);
            }else{
                owner1.setStatus(Status.DEACTIVATE);
            }
            return ownerRepository.save(owner1);
        }
    }



}
