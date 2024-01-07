package com.altercode.gerenciadorcurriculo.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tb_experience")
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "job_title")
    private String jobTitle;
    private String company;

    @Column(name = "working_day")
    private String workingDay;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @ManyToOne
    @JoinColumn(name = "cv_id")
    private Cv cv;


    public Experience() {
    }

    public Experience(Long id, String jobTitle, String company, String workingDay, LocalDate startDate, LocalDate endDate, Cv cv) {
        this.id = id;
        this.jobTitle = jobTitle;
        this.company = company;
        this.workingDay = workingDay;
        this.startDate = startDate;
        this.endDate = endDate;
        this.cv = cv;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getWorkingDay() {
        return workingDay;
    }

    public void setWorkingDay(String workingDay) {
        this.workingDay = workingDay;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Cv getCv() {
        return cv;
    }

    public void setCv(Cv cv) {
        this.cv = cv;
    }
}