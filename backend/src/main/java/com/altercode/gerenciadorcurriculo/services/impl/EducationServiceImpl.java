package com.altercode.gerenciadorcurriculo.services.impl;

import com.altercode.gerenciadorcurriculo.dto.EducationDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import com.altercode.gerenciadorcurriculo.entities.Education;
import com.altercode.gerenciadorcurriculo.repositories.CvRepository;
import com.altercode.gerenciadorcurriculo.repositories.EducationRepository;
import com.altercode.gerenciadorcurriculo.services.interf.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class EducationServiceImpl implements EducationService {

    @Autowired
    private EducationRepository educationRepository;

    @Autowired
    private CvRepository cvRepository;

    @Override
    public Page<EducationDto> findEducationByCv(Cv cv, Pageable pageable) {
        Page<Education> find = educationRepository.findEducationByCv(cv, pageable);
        return find.map(EducationDto::new);
    }

    @Override
    public EducationDto findById(Long id) {
        Education find = educationRepository.findById(id).orElseThrow();
        return new EducationDto(find);
    }

    @Override
    public EducationDto saveEducation(EducationDto dto) {
        Cv cv = cvRepository.findById(dto.getCvId()).orElseThrow();

        Education add = new Education();
        add.setId(dto.getId());
        add.setCourse(dto.getCourse());
        add.setInstitution(dto.getInstitution());
        add.setStatus(dto.getStatus());
        add.setAcademicDegree(dto.getAcademicDegree());
        add.setStartDate(dto.getStartDate());
        add.setEndDate(dto.getEndDate());
        add.setCv(cv);
        return new EducationDto(educationRepository.saveAndFlush(add));
    }

    @Override
    public EducationDto updateEducation(EducationDto dto) {
        Education edit = educationRepository.findById(dto.getId()).orElseThrow();
        edit.setId(edit.getId());
        edit.setCourse(dto.getCourse());
        edit.setInstitution(dto.getInstitution());
        edit.setStatus(dto.getStatus());
        edit.setAcademicDegree(dto.getAcademicDegree());
        edit.setStartDate(dto.getStartDate());
        edit.setEndDate(dto.getEndDate());
        return new EducationDto(educationRepository.save(edit));
    }

    @Override
    public void deleteEducation(Long id) {
        this.educationRepository.deleteById(id);
    }
}
