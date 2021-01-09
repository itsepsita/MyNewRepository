import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class LoginservService {

  constructor() { }

 /* public getProducts()
  {
    let prods:Product[];
    prods=
    [
      new Product(100,"Soap",45,100,"Lux Corp"),
      new Product(101,"Gum",10,50,"Fevicol"),
      new Product(102,"Cent",210,10,"Fogg")
    ]
    return prods;
  }*/
}
