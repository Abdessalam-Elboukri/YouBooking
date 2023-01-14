package com.youbooking.youbooking.Controller;

import com.youbooking.youbooking.Entities.Role;
import com.youbooking.youbooking.Service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class RoleController {

    @Autowired
    RoleService roleService;


    @GetMapping("/all_roles")
    public List<Role> getAll(){
        return roleService.getAll();
    }


}
