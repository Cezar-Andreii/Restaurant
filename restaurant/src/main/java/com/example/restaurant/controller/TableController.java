package com.example.restaurant.controller;

import com.example.restaurant.model.RestaurantTable;
import com.example.restaurant.repository.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tables")
public class TableController {

    @Autowired
    private TableRepository tableRepository;


    @PostMapping
    public ResponseEntity<?> createTable(@RequestBody RestaurantTable table) {

        if (table.getNumber() <= 0) {
            return ResponseEntity.badRequest().body("Numărul mesei trebuie să fie mai mare decât 0.");
        }
        if (table.getCapacity() <= 0) {
            return ResponseEntity.badRequest().body("Capacitatea mesei trebuie să fie mai mare decât 0.");
        }
        if (table.getStatus() == null || table.getStatus().isEmpty()) {
            return ResponseEntity.badRequest().body("Statusul mesei nu poate fi gol.");
        }


        RestaurantTable savedTable = tableRepository.save(table);
        return ResponseEntity.ok(savedTable);
    }


    @GetMapping
    public List<RestaurantTable> getAllTables() {
        return tableRepository.findAll();
    }


    @GetMapping("/{id}")
    public ResponseEntity<RestaurantTable> getTableById(@PathVariable Long id) {
        RestaurantTable table = tableRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Masa nu a fost găsită!"));
        return ResponseEntity.ok(table);
    }


    @PutMapping("/{id}")
    public ResponseEntity<RestaurantTable> updateTable(@PathVariable Long id, @RequestBody RestaurantTable tableDetails) {
        RestaurantTable table = tableRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Masa nu a fost găsită!"));


        table.setNumber(tableDetails.getNumber());
        table.setCapacity(tableDetails.getCapacity());
        table.setStatus(tableDetails.getStatus());


        RestaurantTable updatedTable = tableRepository.save(table);
        return ResponseEntity.ok(updatedTable);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTable(@PathVariable Long id) {
        RestaurantTable table = tableRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Masa nu a fost găsită!"));


        tableRepository.delete(table);
        return ResponseEntity.noContent().build();
    }


    @PutMapping("/{id}/reserve")
    public ResponseEntity<RestaurantTable> reserveTable(@PathVariable Long id) {
        RestaurantTable table = tableRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Masa nu a fost găsită!"));

        if (!table.getStatus().equalsIgnoreCase("available")) {
            return ResponseEntity.badRequest().body(null);
        }

        table.setStatus("reserved");
        RestaurantTable updatedTable = tableRepository.save(table);
        return ResponseEntity.ok(updatedTable);
    }

}
