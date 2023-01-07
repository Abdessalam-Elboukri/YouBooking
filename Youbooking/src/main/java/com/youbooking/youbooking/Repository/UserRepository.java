package com.youbooking.youbooking.Repository;

import com.youbooking.youbooking.Entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {
    Users findByEmail(String userEmail);
}
