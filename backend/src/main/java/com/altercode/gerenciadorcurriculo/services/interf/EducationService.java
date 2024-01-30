package com.altercode.gerenciadorcurriculo.services.interf;

import com.altercode.gerenciadorcurriculo.dto.EducationDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface EducationService {

    @Transactional(readOnly = true)
    Page<EducationDto> findEducationByCv(Cv cv, Pageable pageable);

    @Transactional(readOnly = true)
    EducationDto findById(Long id);

    EducationDto saveEducation(EducationDto dto);

    EducationDto updateEducation(EducationDto dto);

    void deleteEducation(Long id);
}
