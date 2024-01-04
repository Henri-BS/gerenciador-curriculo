package com.altercode.gerenciadorcurriculo.repositories;

import com.altercode.gerenciadorcurriculo.entities.Cv;
import com.altercode.gerenciadorcurriculo.entities.Experience;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {
    Page<Experience> findExperienceByCv( Cv cv, Pageable pageable);
}