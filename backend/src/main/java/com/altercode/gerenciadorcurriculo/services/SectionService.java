package com.altercode.gerenciadorcurriculo.services;

import com.altercode.gerenciadorcurriculo.dto.ExperienceDto;
import com.altercode.gerenciadorcurriculo.dto.SectionDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import com.altercode.gerenciadorcurriculo.entities.Experience;
import com.altercode.gerenciadorcurriculo.entities.Section;
import com.altercode.gerenciadorcurriculo.repositories.CvRepository;
import com.altercode.gerenciadorcurriculo.repositories.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SectionService {

    @Autowired
    private SectionRepository sectionRepository;

    @Autowired
    private CvRepository cvRepository;

    public Page<SectionDto> findSectionByCv(Cv cv, Pageable pageable) {
        Page<Section> find = sectionRepository.findSectionByCv(cv, pageable);
        return find.map(SectionDto::new);
    }

    public SectionDto findById(Long id) {
        Section find = sectionRepository.findById(id).orElseThrow();
        return new SectionDto(find);
    }

    public SectionDto saveSection(SectionDto dto) {
        Cv cv = cvRepository.findById(dto.getCvId()).orElseThrow();

        Section add = new Section();
        add.setId(dto.getId());
        add.setTitle(dto.getTitle());
        add.setItemQuantity(dto.getItemQuantity());
        add.setCv(cv);
        return new SectionDto(sectionRepository.saveAndFlush(add));
    }

    public SectionDto updateSection(SectionDto dto) {
        Section edit = sectionRepository.findById(dto.getId()).orElseThrow();
        edit.setId(edit.getId());
        edit.setTitle(dto.getTitle());
        edit.setItemQuantity(dto.getItemQuantity());
        return new SectionDto(sectionRepository.save(edit));
    }

    public void deleteSection(Long id) {
        this.sectionRepository.deleteById(id);
    }
}
