package com.altercode.gerenciadorcurriculo.dto;

import com.altercode.gerenciadorcurriculo.entities.Item;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ItemDto implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    private Long id;
    private String name;
    private String description;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private LocalDate startDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private LocalDate endDate;
    private Long sectionId;

    public ItemDto() {
    }

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
