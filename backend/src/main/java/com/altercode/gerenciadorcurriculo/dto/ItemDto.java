package com.altercode.gerenciadorcurriculo.dto;

import com.altercode.gerenciadorcurriculo.entities.Item;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;

public class ItemDto implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    private final Long id;
    private final String name;
    private final String description;
    private final LocalDate startDate;
    private final LocalDate endDate;
    private final Long sectionId;

    public ItemDto(Item entity) {
        id = entity.getId();
        name = entity.getName();
        description = entity.getDescription();
        startDate = entity.getStartDate();
        endDate = entity.getEndDate();
        sectionId = entity.getSection().getId();
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

    public LocalDate getStartDate() {
        return startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public Long getSectionId() {
        return sectionId;
    }
}
