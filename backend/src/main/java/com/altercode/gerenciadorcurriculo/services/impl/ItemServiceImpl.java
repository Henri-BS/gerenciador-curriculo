package com.altercode.gerenciadorcurriculo.services.impl;

import com.altercode.gerenciadorcurriculo.dto.ItemDto;
import com.altercode.gerenciadorcurriculo.entities.Item;
import com.altercode.gerenciadorcurriculo.entities.Section;
import com.altercode.gerenciadorcurriculo.repositories.ItemRepository;
import com.altercode.gerenciadorcurriculo.repositories.SectionRepository;
import com.altercode.gerenciadorcurriculo.services.interf.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private SectionRepository sectionRepository;

    @Override
    public Page<ItemDto> findItemBySection(Section section, Pageable pageable) {
        Page<Item> find = itemRepository.findItemBySection(section, pageable);
        return find.map(ItemDto::new);
    }

    @Override
    public ItemDto findById(Long id) {
        Item find = itemRepository.findById(id).orElseThrow();
        return new ItemDto(find);
    }

    @Override
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

    @Override
    public ItemDto updateItem(ItemDto dto) {
        Item edit = itemRepository.findById(dto.getId()).orElseThrow();
        edit.setId(edit.getId());
        edit.setName(dto.getName());
        edit.setDescription(dto.getDescription());
        edit.setStartDate(dto.getStartDate());
        edit.setEndDate(dto.getEndDate());
        return new ItemDto(itemRepository.save(edit));
    }

    @Override
    public void deleteItem(Long id) {
        this.itemRepository.deleteById(id);
    }
}
