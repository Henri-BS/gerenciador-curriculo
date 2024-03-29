package com.altercode.gerenciadorcurriculo.services.interf;

import com.altercode.gerenciadorcurriculo.dto.SectionDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

public interface SectionService {

    Page<SectionDto> findSectionByCv(Cv cv, Pageable pageable);

    SectionDto findById(Long id);

    SectionDto saveSection(SectionDto dto);

    SectionDto updateSection(SectionDto dto);

    void deleteSection(Long id);
}
