package com.altercode.gerenciadorcurriculo.dto;

import com.altercode.gerenciadorcurriculo.entities.Cv;

import java.io.Serial;
import java.io.Serializable;

public class CvDto implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private String description;
    private String image;
    private String phone;
    private String location;
    private String email;

    public CvDto() {
    }

    public CvDto(Cv entity) {
        id = entity.getId();
        name = entity.getName();
        description = entity.getDescription();
        image = entity.getImage();
        phone = entity.getPhone();
        email = entity.getEmail();
        location = entity.getLocation();
    }

    public Long getId() {
        return id;
    }


    public String getName() {
        return name;
    }


    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    }

    public String getPhone() {
        return phone;
    }


    public String getLocation() {
        return location;
    }


    public String getEmail() {
        return email;
    }

}
