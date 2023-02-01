package com.youbooking.youbooking.Service.Imp;

import com.youbooking.youbooking.Entities.Owner;
import com.youbooking.youbooking.Entities.Status;
import com.youbooking.youbooking.Entities.Users;
import com.youbooking.youbooking.Repository.UserRepository;
import com.youbooking.youbooking.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    UserRepository userRepository;
    @Override
    public UserDetails findByEmail(String userEmail) {
        Users user = userRepository.findByEmail(userEmail);
        return  new User(user.getEmail(),user.getPassword(), Collections.singleton(new SimpleGrantedAuthority(user.getRole().getRoleName())));
    }


    @Override
    public Users updateStatus(Long id) throws IllegalAccessException {
        Optional<Users> user = userRepository.findById(id);
        if(user.isEmpty())
            throw new IllegalAccessException("Can't find this Owner");
        else{
            Users user1 = user.get();
            System.out.println(user1.getEmail());
            if (user1.getStatus() == Status.DEACTIVATE) {
                user1.setStatus(Status.ACTIVE);
            }else{
                user1.setStatus(Status.DEACTIVATE);
            }
            return userRepository.save(user1);
        }
    }

    @Override
    public Users getByEmail(String email) {
        return userRepository.findByEmail(email);
    }


    @Override
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }
}
