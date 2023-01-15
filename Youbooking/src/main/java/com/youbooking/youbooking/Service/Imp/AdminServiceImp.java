package com.youbooking.youbooking.Service.Imp;

import com.youbooking.youbooking.Entities.Admin;
import com.youbooking.youbooking.Repository.AdminRespository;
import com.youbooking.youbooking.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImp implements AdminService {

    @Autowired
    AdminRespository adminRespository;

    @Override
    public Admin save(Admin admin) {
        return adminRespository.save(admin);
    }
}
