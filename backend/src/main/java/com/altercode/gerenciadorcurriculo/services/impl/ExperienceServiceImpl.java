package com.altercode.gerenciadorcurriculo.services.impl;

import com.altercode.gerenciadorcurriculo.dto.ExperienceDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import com.altercode.gerenciadorcurriculo.entities.Experience;
import com.altercode.gerenciadorcurriculo.repositories.CvRepository;
import com.altercode.gerenciadorcurriculo.repositories.ExperienceRepository;
import com.altercode.gerenciadorcurriculo.services.interf.ExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ExperienceServiceImpl implements ExperienceService {

    @Autowired
    private ExperienceRepository experienceRepository;

    @Autowired
    private CvRepository cvRepository;

    @Override
    @Transactional(readOnly = true)
    public Page<ExperienceDto> findExperienceByCv(Cv cv, Pageable pageable) {
        Page<Experience> find = experienceRepository.findExperienceByCv(cv, pageable);
        return find.map(ExperienceDto::new);
    }

    @Override
    @Transactional(readOnly = true)
    public ExperienceDto findById(Long id) {
        Experience find = experienceRepository.findById(id).orElseThrow();
        return new ExperienceDto(find);
    }

    @Override
    public ExperienceDto saveExperience(ExperienceDto dto) {
        Cv cv = cvRepository.findById(dto.getCvId()).orElseThrow();

        Experience add = new Experience();
        add.setId(dto.getId());
        add.setJobTitle(dto.getJobTitle());
        add.setCompany(dto.getCompany());
        add.setWorkingDay(dto.getWorkingDay());
        add.setStartDate(dto.getStartDate());
        add.setEndDate(dto.getEndDate());
        add.setCv(cv);
        return new ExperienceDto(experienceRepository.saveAndFlush(add));
    }

    @Override
    public ExperienceDto updateExperience(ExperienceDto dto) {
        Experience edit = experienceRepository.findById(dto.getId()).orElseThrow();
        edit.setId(edit.getId());
        edit.setJobTitle(dto.getJobTitle());
        edit.setCompany(dto.getCompany());
        edit.setWorkingDay(dto.getWorkingDay());
        edit.setStartDate(dto.getStartDate());
        edit.setEndDate(dto.getEndDate());
        return new ExperienceDto(experienceRepository.save(edit));
    }

    @Override
    public void deleteExperience(Long id) {
        this.experienceRepository.deleteById(id);
    }
}
