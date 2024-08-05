import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {

  products: Product [] = [];

  constructor(private productService:ProductService){
  }


  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => this.products = data
    );
  }



}
