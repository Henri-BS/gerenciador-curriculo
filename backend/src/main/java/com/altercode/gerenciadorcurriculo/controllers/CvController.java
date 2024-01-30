package com.altercode.gerenciadorcurriculo.controllers;

import com.altercode.gerenciadorcurriculo.dto.CvDto;
import com.altercode.gerenciadorcurriculo.services.impl.CvServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/cv")
public class CvController {

    @Autowired
    private CvServiceImpl cvServiceImpl;

    @GetMapping("/page")
    public ResponseEntity<Page<CvDto>> findAllCvs(@RequestParam(defaultValue = "") String name, Pageable pageable) {
        Page<CvDto> page = cvServiceImpl.findAllCvs(name, pageable);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CvDto> findById(@PathVariable Long id) {
        CvDto find = cvServiceImpl.findById(id);
        return ResponseEntity.ok(find);
    }

    @PostMapping("/save")
    public ResponseEntity<CvDto> saveCv(@RequestBody CvDto dto) {
        CvDto add = cvServiceImpl.saveCv(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<CvDto> updateCv(@RequestBody CvDto dto) {
        CvDto edit = cvServiceImpl.updateCv(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCv(@PathVariable Long id) {
        this.cvServiceImpl.deleteCv(id);
    }
}
