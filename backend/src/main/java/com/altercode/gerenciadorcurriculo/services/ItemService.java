package com.altercode.gerenciadorcurriculo.services;

import com.altercode.gerenciadorcurriculo.dto.ExperienceDto;
import com.altercode.gerenciadorcurriculo.dto.ItemDto;
import com.altercode.gerenciadorcurriculo.entities.Cv;
import com.altercode.gerenciadorcurriculo.entities.Experience;
import com.altercode.gerenciadorcurriculo.entities.Item;
import com.altercode.gerenciadorcurriculo.entities.Section;
import com.altercode.gerenciadorcurriculo.repositories.ItemRepository;
import com.altercode.gerenciadorcurriculo.repositories.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private SectionRepository sectionRepository;

    public Page<ItemDto> findItemBySection(Section section, Pageable pageable) {
        Page<Item> find = itemRepository.findItemBySection(section, pageable);
        return find.map(ItemDto::new);
    }

    public ItemDto findById(Long id) {
        Item find = itemRepository.findById(id).orElseThrow();
        return new ItemDto(find);
    }

    public ItemDto saveItem(ItemDto dto) {
        Section section = sectionRepository.findById(dto.getSectionId()).orElseThrow();

        Item add = new Item();
        add.setId(dto.getId());
        add.setName(dto.getName());
        add.setDescription(dto.getDescription());
        add.setStartDate(dto.getStartDate());
        add.setEndDate(dto.getEndDate());
        add.setSection(section);
        return new ItemDto(itemRepository.saveAndFlush(add));
    }

    public ItemDto updateItem(ItemDto dto) {
        Item edit = new Item();
        edit.setId(dto.getId());
        edit.setName(dto.getName());
        edit.setDescription(dto.getDescription());
        edit.setStartDate(dto.getStartDate());
        edit.setEndDate(dto.getEndDate());
        return new ItemDto(itemRepository.save(edit));
    }

    public void deleteItem(Long id) {
        this.itemRepository.deleteById(id);
    }
}
