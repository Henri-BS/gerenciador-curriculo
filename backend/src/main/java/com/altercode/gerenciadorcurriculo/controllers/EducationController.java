package com.altercode.gerenciadorcurriculo.controllers;

import com.altercode.gerenciadorcurriculo.dto.EducationDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import com.altercode.gerenciadorcurriculo.services.interf.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/education")
public class EducationController {

    @Autowired
    private EducationService educationService;

    @GetMapping("/page/{cv}")
    public ResponseEntity<Page<EducationDto>> findEducationByCv(@PathVariable Cv cv, Pageable pageable) {
        Page<EducationDto> page = educationService.findEducationByCv(cv, pageable);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EducationDto> findById(@PathVariable Long id) {
        EducationDto find = educationService.findById(id);
        return ResponseEntity.ok(find);
    }

    @PostMapping("/save")
    public ResponseEntity<EducationDto> saveEducation(@RequestBody EducationDto dto) {
        EducationDto add = educationService.saveEducation(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<EducationDto> updateEducation(@RequestBody EducationDto dto) {
        EducationDto edit = educationService.updateEducation(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteEducation(@PathVariable Long id) {
        this.educationService.deleteEducation(id);
    }
}
