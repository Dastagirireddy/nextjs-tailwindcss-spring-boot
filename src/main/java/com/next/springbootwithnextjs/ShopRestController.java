package com.next.springbootwithnextjs;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/shop")
public class ShopRestController {

    @GetMapping
    public String getSample() {
        return "Sample message from api";
    }
}
