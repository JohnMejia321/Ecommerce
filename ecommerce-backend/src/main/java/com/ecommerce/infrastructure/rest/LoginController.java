package com.ecommerce.infrastructure.rest;

import com.ecommerce.application.UserService;
import com.ecommerce.domain.model.User;
import com.ecommerce.infrastructure.dto.UserDTO;
import com.ecommerce.infrastructure.dto.JWTClient;

import com.ecommerce.infrastructure.jwt.JWTGenerator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/security")
@CrossOrigin(origins = "*")
@Slf4j
public class LoginController {

    private final AuthenticationManager authenticationManager;

    private final JWTGenerator jwtGenerator;

    private  final UserService userService;



    public LoginController(AuthenticationManager authenticationManager, JWTGenerator jwtGenerator, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtGenerator = jwtGenerator;
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<JWTClient> login(@RequestBody UserDTO userDTO){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken( userDTO.getUsername(), userDTO.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        log.info("Rol de user: {}", SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream().findFirst().get().toString());
        User user = userService.findByEmail(userDTO.getUsername());
        String token = jwtGenerator.getToken(userDTO.getUsername());
        JWTClient jwtClient = new JWTClient(user.getId(), token, user.getUserType().toString());



        return  new ResponseEntity<>(jwtClient, HttpStatus.OK);
    }
}