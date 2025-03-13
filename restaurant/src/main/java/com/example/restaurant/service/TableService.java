package com.example.restaurant.service;


import com.example.restaurant.model.RestaurantTable;
import com.example.restaurant.repository.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TableService {

    @Autowired
    private TableRepository tableRepository;

    public List<RestaurantTable> getAllTables() {
        return tableRepository.findAll();
    }

    public RestaurantTable addTable(RestaurantTable table) {
        return tableRepository.save(table);
    }
}