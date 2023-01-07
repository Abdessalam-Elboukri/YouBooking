package com.youbooking.youbooking.Service;

import com.youbooking.youbooking.Entities.Client;
import com.youbooking.youbooking.Entities.Owner;

public interface ClientService {
    Client save(Client client) throws IllegalAccessException;
}
