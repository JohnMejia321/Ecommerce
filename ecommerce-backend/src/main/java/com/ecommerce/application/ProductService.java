package com.ecommerce.application;

import com.ecommerce.domain.model.Product;
import com.ecommerce.domain.port.IProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ProductService {

    private final IProductRepository iProductRepository;

    private final UploadFile uploadFile;

    public ProductService(IProductRepository iProductRepository, UploadFile uploadFile) {
        this.iProductRepository = iProductRepository;
        this.uploadFile = uploadFile;

    }

    public Product save(Product product, MultipartFile multipartFile) throws IOException {
        if (product.getId() != 0) { // cuando es un producto modificado
            if (multipartFile != null) {
                String currentUrlImage = product.getUrlImage();
                if (currentUrlImage != null && currentUrlImage.length() > 29) {
                    String nameFile = currentUrlImage.substring(29);
                    if (!nameFile.equals("default.jpg")) {
                        uploadFile.delete(nameFile);
                    }
                }
                product.setUrlImage(uploadFile.upload(multipartFile));
            }
        } else {
            if (multipartFile != null) {
                product.setUrlImage(uploadFile.upload(multipartFile));
            } else {
                product.setUrlImage("default.jpg"); // O cualquier valor predeterminado
            }
        }

        return this.iProductRepository.save(product);
    }


    public Iterable<Product> findAll(){
        return this.iProductRepository.findAll();
    }

    public Product findById(Integer id){
        return this.iProductRepository.findById(id);
    }
    public void deleteById(Integer id){
        this.iProductRepository.deleteById(id);
    }
}
