import { Pipe, PipeTransform } from '@angular/core';

import { CartService } from './../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { Product } from './../../../product.model';

@Pipe({
  name: 'cart'
})
export class CartPipe implements PipeTransform {

  products: Product[];
  cont: number;

  constructor(
    private cartService: CartService) {    
  }

  transform(product: any, args?:any): any {    
    var total = 0;
    this.cartService.cart$.subscribe(products => {
      products.forEach((elemento) => {
        if(elemento.id === product.id){
          total += 1;
        }
      });
    });
    return total;
  }
  
}
