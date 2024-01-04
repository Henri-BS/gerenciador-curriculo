package com.altercode.gerenciadorcurriculo.dto;

import com.altercode.gerenciadorcurriculo.entities.Education;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;


public class EducationDto implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private final Long id;
    private final String course;
    private final String institution;
    private final String status;
    private final String academicDegree;
    private final LocalDate startDate;
    private final LocalDate endDate;
    private final Long cvId;

    public EducationDto(Education entity) {
        id = entity.getId();
        course = entity.getCourse();
        institution = entity.getInstitution();
        status = entity.getStatus();
        academicDegree = entity.getAcademicDegree();
        startDate = entity.getStartDate();
        endDate = entity.getEndDate();
        cvId = entity.getCv().getId();
    }

    public Long getId() {
        return id;
    }

    public String getCourse() {
        return course;
    }

    public String getInstitution() {
        return institution;
    }

    public String getStatus() {
        return status;
    }

    public String getAcademicDegree() {
        return academicDegree;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public Long getCvId() {
        return cvId;
    }
}
