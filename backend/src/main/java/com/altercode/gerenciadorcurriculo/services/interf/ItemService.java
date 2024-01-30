package com.altercode.gerenciadorcurriculo.services.interf;

import com.altercode.gerenciadorcurriculo.dto.ItemDto;
import com.altercode.gerenciadorcurriculo.entities.Section;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ItemService {

    @Transactional(readOnly = true)
    Page<ItemDto> findItemBySection(Section section, Pageable pageable);

    @Transactional(readOnly = true)
    ItemDto findById(Long id);

    ItemDto saveItem(ItemDto dto);

    ItemDto updateItem(ItemDto dto);

    void deleteItem(Long id);
}
