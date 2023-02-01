package com.youbooking.youbooking.Service.Imp;

import com.youbooking.youbooking.Entities.Client;
import com.youbooking.youbooking.Entities.Status;
import com.youbooking.youbooking.Repository.ClientRepository;
import com.youbooking.youbooking.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ClientServiceImp implements ClientService {

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    //@Autowired
    //PasswordEncoder passwordEncoder;

    @Override
    public Client save(Client client) throws IllegalAccessException {
        if (client == null) {
            throw new IllegalAccessException("Please fill all user information");
        }
        if(client.getFullname()==null|| client.getPhone()==null ||client.getEmail()==null || client.getPassword()==null){
            throw new IllegalAccessException("Please fill all user information");
        }
        else {
            client.setPassword(passwordEncoder.encode(client.getPassword()));
            client.setStatus(Status.ACTIVE);
            return clientRepository.save(client);
        }
    }

    @Override
    public Client getByEmail(String user) {
        return clientRepository.findByEmail(user);
    }
}
