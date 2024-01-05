package com.altercode.gerenciadorcurriculo.dto;

import com.altercode.gerenciadorcurriculo.entities.Section;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;

public class SectionDto implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    private final Long id;
    private final String title;
    private final Integer itemQuantity;
    private final Long cvId;

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
