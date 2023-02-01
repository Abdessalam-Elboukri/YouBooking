package com.youbooking.youbooking.Service.Imp;

import com.youbooking.youbooking.Entities.Admin;
import com.youbooking.youbooking.Entities.Status;
import com.youbooking.youbooking.Repository.AdminRespository;
import com.youbooking.youbooking.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImp implements AdminService {

    @Autowired
    AdminRespository adminRespository;
    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public Admin save(Admin admin) {
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setStatus(Status.ACTIVE);
        return adminRespository.save(admin);
    }
}
