package com.altercode.gerenciadorcurriculo.dto;

import com.altercode.gerenciadorcurriculo.entities.Section;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class SectionDto implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    private  Long id;
    private  String title;
    private  Integer itemQuantity;
    private  Long cvId;

    public SectionDto() {
    }

    public SectionDto(Section entity) {
        id = entity.getId();
        title = entity.getTitle();
        itemQuantity = entity.getItemQuantity();
        cvId = entity.getCv().getId();
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Integer getItemQuantity() {
        return itemQuantity;
    }

    public Long getCvId() {
        return cvId;
    }
}
