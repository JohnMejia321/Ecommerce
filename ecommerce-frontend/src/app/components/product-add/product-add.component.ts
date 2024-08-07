import { Component, OnInit } from '@angular/core';
import { Category } from '../../common/category';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {
  
  id : number = 3;
  code : string = '001';
  name : string = '';
  description : string = '';
  price : number = 0;
  urlImage : string = '';
  userId : string = '1';
  categoryId : string = '1';
  user : number = 0;


  selectFile! : File;

  categories : Category [] = [];


  constructor(private productService : ProductService, 
    private router:Router, 
    private activatedRoute:ActivatedRoute, 
    private toastr: ToastrService, 
   // private categoryService:CategoryService,
   // private sessionStorage : SessionStorageService
   ){
  }



  ngOnInit(): void {
    this.getProductById();
  }


  addProduct(){
    const formData = new FormData();
    formData.append('id',this.id.toString());
    formData.append('code', this.code);
    formData.append('name', this.name);
    formData.append('description',this.description);
    formData.append('price', this.price.toString());
    formData.append('image', this.selectFile);
    formData.append('urlImage', this.urlImage);
    formData.append('userId', this.userId);
    formData.append('categoryId', this.categoryId);
    //console.log(formData.get('id'));
    console.log(formData);

    this.productService.createProduct(formData).subscribe(
      data => {
        console.log(data);
        if(this.id==0){
          this.toastr.success('Producto registrado correctamante', 'Productos');
        }else{
          this.toastr.success('Producto actualizado correctamante', 'Productos');
        }
        
        this.router.navigate(['admin/product']);      
      }
    );  

  }


  getProductById(){
    this.activatedRoute.params.subscribe(
      prod => {
        let id = prod['id'];
        if(id){
          console.log('el valor de la variable id es: '+id);
          this.productService.getProductById(id).subscribe(
            data =>{
              this.id = data.id;
              this.code = data.code;
              this.name = data.name;
              this.description = data.description;
              this.urlImage = data.urlImage;
              this.price = data.price;
              this.userId = data.userId;
              this.categoryId = data.categoryId;
            }
          );
        }

      }

    );
  }


  onFileSelected(event : any){
    this.selectFile = event.target.files[0];
    console.log('Archivo seleccionado:', this.selectFile);
  }




}
