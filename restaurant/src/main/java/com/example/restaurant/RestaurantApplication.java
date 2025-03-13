package com.example.restaurant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.example.restaurant")

public class RestaurantApplication {
	public static void main(String[] args) {
		SpringApplication.run(RestaurantApplication.class, args);
	}


}
