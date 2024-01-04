package com.altercode.gerenciadorcurriculo.repositories;

import com.altercode.gerenciadorcurriculo.entities.Cv;
import com.altercode.gerenciadorcurriculo.entities.Education;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationRepository extends JpaRepository<Education, Long> {
    Page<Education> findEducationByCv(Cv cv, Pageable pageable);
}