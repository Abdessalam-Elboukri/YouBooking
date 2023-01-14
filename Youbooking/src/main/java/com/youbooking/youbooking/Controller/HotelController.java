package com.youbooking.youbooking.Controller;


import com.youbooking.youbooking.Entities.Hotel;
import com.youbooking.youbooking.Entities.Owner;
import com.youbooking.youbooking.Service.HotelService;
import com.youbooking.youbooking.Service.OwnerService;
import com.youbooking.youbooking.aws.AwsFolders;
import com.youbooking.youbooking.aws.S3Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.print.attribute.standard.Media;
import java.awt.*;
import java.net.URL;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class HotelController {

    @Autowired
    HotelService hotelService;

    @Autowired
    OwnerService ownerService;


    @PostMapping(value={"/add_hotel"},consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public void addHotel(@RequestPart("hotel") Hotel hotel,@RequestPart("user") String user,@RequestPart("MyFile") MultipartFile multipart) throws IllegalAccessException {
        Owner owner = ownerService.getOwnerByemail(user);
        if(hotel==null)
            throw new IllegalAccessException("Hotel Information's are empty");
        else if(owner==null){
            throw new IllegalAccessException("Owner Not Found !! Try to login again");
        }
        else {
            //hotelService.save(hotel);
            String fileName = multipart.getOriginalFilename();
            System.out.println("filename: " + fileName);
            URL link = null;
            try {
                S3Util.uploadFile(fileName, multipart.getInputStream(), AwsFolders.HOTELS);
                link = S3Util.getObjectURL(fileName, AwsFolders.HOTELS);
                hotel.setOwner(owner);
                hotel.setImage_url(String.valueOf(link));
                hotelService.save(hotel);
            } catch (Exception ex) {
                throw new IllegalAccessException("failed to upload image"+ex.getMessage());
            }
        }
    }

    @PostMapping("your-Hotels")
    public List<Hotel> getHotelsByOwner(@RequestBody String email){
        return hotelService.getHotelsOfOwner(email);
    }


}
