import { Component, OnInit } from '@angular/core';
import { Product, CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})

export class Tab3Page implements OnInit {
  
  cart: Product[] =[];
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product){
    this.cartService.decreaseProduct(product);
  }
  
  increaseCartItem(product){
    this.cartService.addProduct(product);
  }

  removeCartItem(product){
    this.cartService.removeProduct(product);
  }

  getTotal(){
    return this.cart.reduce((i,j) => i+j.price * j.amount, 0)
  }

  OpenShipping(){
   this.cartService.setData(1,this.cart);
   this.router.navigateByUrl('/cart-modal/1');
  }

}
