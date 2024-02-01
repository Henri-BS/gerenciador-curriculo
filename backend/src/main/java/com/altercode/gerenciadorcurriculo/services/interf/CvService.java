package com.altercode.gerenciadorcurriculo.services.interf;

import com.altercode.gerenciadorcurriculo.dto.CvDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface CvService {

    Page<CvDto> findAllCvs(String name, Pageable pageable);

    CvDto findById(Long id);

    CvDto saveCv(CvDto dto);

    CvDto updateCv(CvDto dto);

    void deleteCv(Long id);
}
