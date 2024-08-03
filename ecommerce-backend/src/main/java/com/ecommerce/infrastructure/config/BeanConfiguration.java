package com.ecommerce.infrastructure.config;

import com.ecommerce.application.CategoryService;
import com.ecommerce.application.OrderService;
import com.ecommerce.application.ProductService;
import com.ecommerce.application.UserService;
import com.ecommerce.domain.port.ICategoryRepository;
import com.ecommerce.domain.port.IOrderRepository;
import com.ecommerce.domain.port.IProductRepository;
import com.ecommerce.domain.port.IUserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfiguration {
    @Bean
    public UserService userService(IUserRepository iUserRepository){
        return new UserService(iUserRepository);
    }

    @Bean
    public CategoryService categoryService(ICategoryRepository iCategoryRepository){
        return new CategoryService(iCategoryRepository);
    }

    @Bean
    public ProductService productService(IProductRepository iProductRepository){
        return  new ProductService(iProductRepository);
    }
    @Bean
    public OrderService orderService(IOrderRepository iOrderRepository){
        return new OrderService(iOrderRepository);
    }


}
