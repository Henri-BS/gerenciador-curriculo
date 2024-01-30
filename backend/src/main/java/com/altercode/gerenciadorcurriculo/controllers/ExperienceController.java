package com.altercode.gerenciadorcurriculo.controllers;

import com.altercode.gerenciadorcurriculo.dto.ExperienceDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import com.altercode.gerenciadorcurriculo.services.interf.ExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/experience")
public class ExperienceController {

    @Autowired
    private ExperienceService experienceService;

    @GetMapping("/page/{cv}")
    public ResponseEntity<Page<ExperienceDto>> findExperienceByCv(@PathVariable Cv cv, Pageable pageable) {
        Page<ExperienceDto> page = experienceService.findExperienceByCv(cv, pageable);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExperienceDto> findById(@PathVariable Long id) {
        ExperienceDto find = experienceService.findById(id);
        return ResponseEntity.ok(find);
    }

    @PostMapping("/save")
    public ResponseEntity<ExperienceDto> saveExperience(@RequestBody ExperienceDto dto) {
        ExperienceDto add = experienceService.saveExperience(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<ExperienceDto> updateExperience(@RequestBody ExperienceDto dto) {
        ExperienceDto edit = experienceService.updateExperience(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteExperience(@PathVariable Long id) {
        experienceService.deleteExperience(id);
    }
}
