package com.youbooking.youbooking.Controller;

import com.youbooking.youbooking.DTO.AuthRequest;
import com.youbooking.youbooking.Middleware.JwtAuthFilter;
import com.youbooking.youbooking.Middleware.JwtUtils;
import com.youbooking.youbooking.Service.AuthService;
import com.youbooking.youbooking.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/login")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    AuthService authService;
    @Autowired
    UserService userService;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtils jwtUtils;

    @PostMapping
    public ResponseEntity<String> auth(@RequestBody AuthRequest request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        UserDetails user = userService.findByEmail(request.getEmail());
        if(user != null) {
            System.out.println(jwtUtils.generateToken(user));
            return ResponseEntity.ok(jwtUtils.generateToken(user));

        }else
            return ResponseEntity.status(400).body("error");
    }
}
