package com.youbooking.youbooking.Service.Imp;

import com.youbooking.youbooking.Entities.Users;
import com.youbooking.youbooking.Repository.UserRepository;
import com.youbooking.youbooking.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    UserRepository userRepository;
    @Override
    public UserDetails findByEmail(String userEmail) {
        Users user = userRepository.findByEmail(userEmail);
        System.out.println(user.getEmail());
        return  new User(user.getEmail(),user.getPassword(), Collections.singleton(new SimpleGrantedAuthority(user.getRole().getRoleName())));
    }
}
