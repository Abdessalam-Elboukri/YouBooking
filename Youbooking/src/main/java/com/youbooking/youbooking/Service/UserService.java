package com.youbooking.youbooking.Service;

import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {
    UserDetails findByEmail(String userEmail);
}
