package com.altercode.gerenciadorcurriculo.controllers;

import com.altercode.gerenciadorcurriculo.dto.ItemDto;
import com.altercode.gerenciadorcurriculo.entities.Section;
import com.altercode.gerenciadorcurriculo.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/item")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping("/page")
    public ResponseEntity<Page<ItemDto>> findItemBySection(Section section, Pageable pageable) {
        Page<ItemDto> page = itemService.findItemBySection(section, pageable);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemDto> findById(@PathVariable Long id) {
        ItemDto find = itemService.findById(id);
        return ResponseEntity.ok(find);
    }

    @PostMapping("/save")
    public ResponseEntity<ItemDto> saveItem(@RequestBody ItemDto dto) {
        ItemDto add = itemService.saveItem(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<ItemDto> updateItem(@RequestBody ItemDto dto) {
        ItemDto edit = itemService.updateItem(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteItem(@PathVariable Long id) {
        this.itemService.deleteItem(id);
    }
}
