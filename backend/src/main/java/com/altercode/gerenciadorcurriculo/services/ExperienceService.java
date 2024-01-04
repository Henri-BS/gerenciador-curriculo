package com.altercode.gerenciadorcurriculo.services;

import com.altercode.gerenciadorcurriculo.dto.ExperienceDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import com.altercode.gerenciadorcurriculo.entities.Experience;
import com.altercode.gerenciadorcurriculo.repositories.CvRepository;
import com.altercode.gerenciadorcurriculo.repositories.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ExperienceService {

    @Autowired
    private ExperienceRepository experienceRepository;

    @Autowired
    private CvRepository cvRepository;

    public Page<ExperienceDto> findExperienceByCv(Cv cv, Pageable pageable) {
        Page<Experience> find = experienceRepository.findExperienceByCv(cv, pageable);
        return find.map(ExperienceDto::new);
    }

    public ExperienceDto findById(Long id) {
        Experience find = experienceRepository.findById(id).orElseThrow();
        return new ExperienceDto(find);
    }

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

    public ExperienceDto updateExperience(ExperienceDto dto) {
        Experience edit = new Experience();
        edit.setId(dto.getId());
        edit.setJobTitle(dto.getJobTitle());
        edit.setCompany(dto.getCompany());
        edit.setWorkingDay(dto.getWorkingDay());
        edit.setStartDate(dto.getStartDate());
        edit.setEndDate(dto.getEndDate());
        return new ExperienceDto(experienceRepository.save(edit));
    }

    public void deleteExperience(Long id) {
        this.experienceRepository.deleteById(id);
    }
}
