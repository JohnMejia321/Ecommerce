import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 // standalone: true,
  //imports: [CommonModule]
})
export class HomeComponent implements OnInit {

  products: Product [] = [];

  constructor(private homeService:HomeService){

  }


  ngOnInit(): void {
    this.homeService.getProducts().subscribe(
      data => this.products = data
    );
  }



}
