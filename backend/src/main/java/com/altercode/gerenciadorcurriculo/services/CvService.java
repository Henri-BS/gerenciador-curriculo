package com.altercode.gerenciadorcurriculo.services;

import com.altercode.gerenciadorcurriculo.dto.CvDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import com.altercode.gerenciadorcurriculo.repositories.CvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CvService {

    @Autowired
    private CvRepository cvRepository;

    public Page<CvDto> findAllCvs(String name, Pageable pageable) {
        Page<Cv> find = cvRepository.findAllCvs(name, pageable);
        return find.map(CvDto::new);
    }

    public CvDto findById(Long id) {
        Cv find = cvRepository.findById(id).orElseThrow();
        return new CvDto(find);
    }

    public CvDto saveCv(CvDto dto) {
        Cv add = new Cv();
        add.setId(dto.getId());
        add.setName(dto.getName());
        add.setDescription(dto.getDescription());
        add.setImage(dto.getEmail());
        add.setPhone(dto.getPhone());
        add.setEmail(dto.getEmail());
        add.setLocation(dto.getLocation());
        return new CvDto(cvRepository.saveAndFlush(add));
    }


    public CvDto updateCv(CvDto dto) {
        Cv edit = cvRepository.findById(dto.getId()).orElseThrow();
        edit.setId(edit.getId());
        edit.setName(dto.getName());
        edit.setDescription(dto.getDescription());
        edit.setImage(dto.getEmail());
        edit.setPhone(dto.getPhone());
        edit.setEmail(dto.getEmail());
        edit.setLocation(dto.getLocation());
        return new CvDto(cvRepository.save(edit));
    }

    public void deleteCv(Long id) {
        this.cvRepository.deleteById(id);
    }
}
