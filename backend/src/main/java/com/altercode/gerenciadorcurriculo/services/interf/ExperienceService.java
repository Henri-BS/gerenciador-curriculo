package com.altercode.gerenciadorcurriculo.services.interf;

import com.altercode.gerenciadorcurriculo.dto.ExperienceDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

public interface ExperienceService {

    Page<ExperienceDto> findExperienceByCv(Cv cv, Pageable pageable);

    ExperienceDto findById(Long id);

    ExperienceDto saveExperience(ExperienceDto dto);

    ExperienceDto updateExperience(ExperienceDto dto);

    void deleteExperience(Long id);
}
