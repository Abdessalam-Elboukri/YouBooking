package com.youbooking.youbooking.Service.Imp;


import com.youbooking.youbooking.Entities.Role;
import com.youbooking.youbooking.Repository.RoleRepository;
import com.youbooking.youbooking.Service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImp implements RoleService {

    @Autowired
    RoleRepository roleRepository;

    @Override
    public List<Role> getAll() {
        return roleRepository.findAll();
    }
}
