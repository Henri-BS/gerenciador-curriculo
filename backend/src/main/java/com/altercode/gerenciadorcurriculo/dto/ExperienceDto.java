package com.altercode.gerenciadorcurriculo.dto;


import com.altercode.gerenciadorcurriculo.entities.Experience;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;

public class ExperienceDto implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    private final Long id;
    private final String jobTitle;
    private final String company;
    private final String workingDay;
    private final LocalDate startDate;
    private final LocalDate endDate;
    private final Long cvId;


    public ExperienceDto(Experience entity) {
        id = entity.getId();
        jobTitle = entity.getJobTitle();
        company = entity.getCompany();
        workingDay = entity.getWorkingDay();
        startDate = entity.getStartDate();
        endDate = entity.getEndDate();
        cvId = entity.getCv().getId();
    }

    public Long getId() {
        return id;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public String getCompany() {
        return company;
    }

    public String getWorkingDay() {
        return workingDay;
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
