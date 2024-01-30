package com.altercode.gerenciadorcurriculo.controllers;

import com.altercode.gerenciadorcurriculo.dto.SectionDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import com.altercode.gerenciadorcurriculo.services.impl.SectionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/section")
public class SectionController {

    @Autowired
    private SectionServiceImpl sectionServiceImpl;

    @GetMapping("/page/{cv}")
    public ResponseEntity<Page<SectionDto>> findSectionByCv(@PathVariable Cv cv, Pageable pageable) {
        Page<SectionDto> page = sectionServiceImpl.findSectionByCv(cv, pageable);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SectionDto> findById(@PathVariable Long id) {
        SectionDto find = sectionServiceImpl.findById(id);
        return ResponseEntity.ok(find);
    }

    @PostMapping("/save")
    public ResponseEntity<SectionDto> saveSection(@RequestBody SectionDto dto) {
        SectionDto add = sectionServiceImpl.saveSection(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<SectionDto> updateSection(@RequestBody SectionDto dto) {
        SectionDto edit = sectionServiceImpl.updateSection(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteExperience(@PathVariable Long id) {
        this.sectionServiceImpl.deleteSection(id);
    }
}
