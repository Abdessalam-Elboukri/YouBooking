package com.youbooking.youbooking.Service;

import com.youbooking.youbooking.Entities.Owner;
import com.youbooking.youbooking.Entities.Users;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

public interface UserService {
    UserDetails findByEmail(String userEmail);

    List<Users> getAllUsers();

    Users updateStatus(Long id) throws IllegalAccessException;

    Users getByEmail(String email);
}
