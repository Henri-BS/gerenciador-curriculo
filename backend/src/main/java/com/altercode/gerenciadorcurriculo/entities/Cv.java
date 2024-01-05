package com.altercode.gerenciadorcurriculo.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_cv")
public class Cv {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cv_id")
    private Long id;
    private String name;
    @Column(name= "description", columnDefinition = "TEXT")
    private String description;
    private String image;
    private String phone;
    private String location;
    private String email;

    @OneToMany(mappedBy = "cv", cascade = CascadeType.ALL)
    private List<Education> educationList = new ArrayList<>();
    @OneToMany(mappedBy = "cv", cascade = CascadeType.ALL)
    private List<Experience> experiences = new ArrayList<>();
    @OneToMany(mappedBy = "cv", cascade = CascadeType.ALL)
    private List<Section> sections = new ArrayList<>();

    public Cv() {
    }

    public Cv(Long id, String name, String description, String image, String phone, String location, String email) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.phone = phone;
        this.location = location;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Education> getEducationList() {
        return educationList;
    }

    public List<Experience> getExperiences() {
        return experiences;
    }

    public List<Section> getSections() {
        return sections;
    }
}
