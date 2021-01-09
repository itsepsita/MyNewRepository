import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators } from '@angular/forms';
import {Product} from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  

  ngOnInit(){
  }


 
  SupplierCode=["S001","S002","S003"];
  product = new FormGroup({
    prodId: new FormControl('',[Validators.required,Validators.pattern("^[0-9]+$")]),
    prodName:new FormControl('',[Validators.required]),
    prodPrice: new FormControl('',[Validators.required,Validators.pattern("^[0-9]+$")]),
    availableqty:new FormControl('',[Validators.required,Validators.pattern("^[0-9]+$")]),
    supplier: new FormControl()
  });
  
  get prodId()
  {
    return this.product.get('prodId');
  }

  onSubmit()
  {
    console.log(this.product.value);
   // this.product.push(this.product.value);
    for(let k of this.product.value)
    {
      console.log(k);
    }
  }
}
