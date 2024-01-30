package com.altercode.gerenciadorcurriculo.services.impl;

import com.altercode.gerenciadorcurriculo.dto.CvDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import com.altercode.gerenciadorcurriculo.repositories.CvRepository;
import com.altercode.gerenciadorcurriculo.services.interf.CvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CvServiceImpl implements CvService {

    @Autowired
    private CvRepository cvRepository;

    @Override
    public Page<CvDto> findAllCvs(String name, Pageable pageable) {
        Page<Cv> find = cvRepository.findAllCvs(name, pageable);
        for (Cv cv : find) {
            if (cv.getImage() == null) {
                cv.setImage("https://cdn1.iconfinder.com/data/icons/basic-ui-element-2-2-line/512/Basic_UI_Elements_-_2.1_-_line-11-256.png");
                cvRepository.save(cv);
            }
        }
        return find.map(CvDto::new);
    }

    @Override
    public CvDto findById(Long id) {
        Cv find = cvRepository.findById(id).orElseThrow();
        return new CvDto(find);
    }

    @Override
    public CvDto saveCv(CvDto dto) {
        Cv add = new Cv();
        add.setId(dto.getId());
        add.setName(dto.getName());
        add.setJobTitle(dto.getJobTitle());
        add.setImage(dto.getImage());
        add.setPhone(dto.getPhone());
        add.setEmail(dto.getEmail());
        add.setLocation(dto.getLocation());
        add.setDescription(dto.getDescription());

        return new CvDto(cvRepository.saveAndFlush(add));
    }

@Override
    public CvDto updateCv(CvDto dto) {
        Cv edit = cvRepository.findById(dto.getId()).orElseThrow();
        edit.setId(edit.getId());
        edit.setName(dto.getName());
        edit.setJobTitle(dto.getJobTitle());
        edit.setImage(dto.getImage());
        edit.setPhone(dto.getPhone());
        edit.setEmail(dto.getEmail());
        edit.setLocation(dto.getLocation());

        return new CvDto(cvRepository.save(edit));
    }

    @Override
    public void deleteCv(Long id) {
        this.cvRepository.deleteById(id);
    }
}
