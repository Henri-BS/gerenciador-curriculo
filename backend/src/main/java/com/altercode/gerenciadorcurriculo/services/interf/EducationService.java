package com.altercode.gerenciadorcurriculo.services.interf;

import com.altercode.gerenciadorcurriculo.dto.EducationDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

public interface EducationService {

    Page<EducationDto> findEducationByCv(Cv cv, Pageable pageable);

    EducationDto findById(Long id);

    EducationDto saveEducation(EducationDto dto);

    EducationDto updateEducation(EducationDto dto);

    void deleteEducation(Long id);
}
