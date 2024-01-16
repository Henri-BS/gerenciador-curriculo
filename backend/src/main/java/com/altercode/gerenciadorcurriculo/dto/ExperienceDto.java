package com.altercode.gerenciadorcurriculo.dto;


import com.altercode.gerenciadorcurriculo.entities.Experience;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ExperienceDto implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    private Long id;
    private String jobTitle;
    private String company;
    private String workingDay;
    private LocalDate startDate;
    private LocalDate endDate;
    private Long cvId;

    public ExperienceDto() {
    }

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
