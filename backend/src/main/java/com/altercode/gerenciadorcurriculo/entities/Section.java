package com.altercode.gerenciadorcurriculo.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_section")
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "section_id", nullable = false)
    private Long id;
    private String title;
    private Integer itemQuantity;

    @ManyToOne
    @JoinColumn(name = "cv_id")
    private Cv cv;

    @OneToMany(mappedBy = "section", cascade = CascadeType.ALL)
    private List<Item> items = new ArrayList<>();

    public Cv getCv() {
        return cv;
    }

    public void setCv(Cv cv) {
        this.cv = cv;
    }

    public Section() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getItemQuantity() {
        return itemQuantity;
    }

    public void setItemQuantity(Integer itemQuantity) {
        this.itemQuantity = itemQuantity;
    }

    public List<Item> getItems() {
        return items;
    }

}