package com.youbooking.youbooking.Entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.List;

@Entity
public class Owner extends Users implements Serializable {

    @OneToMany(mappedBy = "owner", cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    private List<Hotel> hotelList;

    public List<Hotel> getHotelList() {
        return hotelList;
    }

    public void setHotelList(List<Hotel> hotelList) {
        this.hotelList = hotelList;
    }
}
