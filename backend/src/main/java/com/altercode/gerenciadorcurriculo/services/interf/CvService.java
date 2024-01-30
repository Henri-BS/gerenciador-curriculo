package com.altercode.gerenciadorcurriculo.services.interf;

import com.altercode.gerenciadorcurriculo.dto.CvDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface CvService {

    @Transactional(readOnly = true)
    Page<CvDto> findAllCvs(String name, Pageable pageable);

    @Transactional(readOnly = true)
    CvDto findById(Long id);

    CvDto saveCv(CvDto dto);

    CvDto updateCv(CvDto dto);

    void deleteCv(Long id);
}
