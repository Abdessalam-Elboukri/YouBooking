package com.youbooking.youbooking.Controller;

import com.youbooking.youbooking.Entities.Owner;
import com.youbooking.youbooking.Entities.Users;
import com.youbooking.youbooking.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    UserService userService;


    @GetMapping("/all_users")
    public List<Users> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/id_user/{id}")
    public Users updateOwnerStatus(@PathVariable Long id) throws IllegalAccessException {
        return userService.updateStatus(id);
    }

    @GetMapping("/user/{email}")
    public Users getByEmail(@PathVariable String email){
        return userService.getByEmail(email);
    }


}
