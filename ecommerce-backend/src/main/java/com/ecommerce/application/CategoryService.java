package com.ecommerce.application;

import com.ecommerce.domain.model.Category;
import com.ecommerce.domain.port.ICategoryRepository;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    private final ICategoryRepository iCategoryRepository;

    public CategoryService(ICategoryRepository iCategoryRepository) {
        this.iCategoryRepository = iCategoryRepository;
    }
    public Category save (Category category){
        return iCategoryRepository.save(category);
    }
    public Iterable<Category> findAll(){
        return iCategoryRepository.findAll();
    }

    public Category findById(Integer id){
        return iCategoryRepository.findById(id);
    }
    public void deleteById(Integer id){
        iCategoryRepository.deleteById(id);
    }
}
