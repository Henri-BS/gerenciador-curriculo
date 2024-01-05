package com.altercode.gerenciadorcurriculo.repositories;

import com.altercode.gerenciadorcurriculo.entities.Cv;
import com.altercode.gerenciadorcurriculo.entities.Experience;
import com.altercode.gerenciadorcurriculo.entities.Section;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SectionRepository extends JpaRepository<Section, Long> {
    Page<Section> findSectionByCv(Cv cv, Pageable pageable);
}