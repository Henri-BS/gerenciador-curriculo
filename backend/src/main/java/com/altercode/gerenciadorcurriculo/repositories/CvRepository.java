package com.altercode.gerenciadorcurriculo.repositories;

import com.altercode.gerenciadorcurriculo.entities.Cv;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CvRepository extends JpaRepository<Cv, Long>{

    @Query("SELECT obj FROM Cv obj WHERE UPPER(obj.name) " +
            "LIKE UPPER(CONCAT('%', ?1, '%')) " +
            "ORDER BY (obj.name) ASC")
    Page<Cv> findAllCvs(String name, Pageable pageable);
}
