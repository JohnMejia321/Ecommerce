import { Component, OnInit } from '@angular/core';
import { ItemCart } from '../../../common/item-cart';
import { OrderProduct } from '../../../common/order-product';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-sumary-order',
  templateUrl: './sumary-order.component.html',
  styleUrl: './sumary-order.component.css'
})
export class SumaryOrderComponent implements OnInit {

  items : ItemCart [] = [];
  totalCart : number =0;
  firstName : string = '';
  lastName : string = '';
  email : string = '';
  address : string ='';
  orderProducts:OrderProduct [] = [];
  userId : number =0;

  constructor(private cartService:CartService, 
   // private userService:UserService, 
   // private orderService:OrderService, 
   // private paymentService:PaymentService,
   // private sessionStorage:SessionStorageService
    ){}


  ngOnInit(): void {
    console.log('ngOnInit');
    this.items = this.cartService.convertToListFromMap();
    this.totalCart = this.cartService.totalCart();
  }

  generateOrder(){
    this.items.forEach(
      item=>{
        let orderProduct = new OrderProduct(null, item.productId, item.quantity, item.price);
        this.orderProducts.push(orderProduct);
      }
    );
  }

  deleteItemCart(productId:number){
    this.cartService.deleteItemCart(productId);
    this.items = this.cartService.convertToListFromMap();
    this.totalCart = this.cartService.totalCart();
  }


}

