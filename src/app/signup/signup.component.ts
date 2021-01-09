import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  constructor(){ }

  
  

/*  addProductForm = new FormGroup(controls {
    prodId: new FormControl(),
    prodName: new FormControl(),
    prodPrice: new FormControl(),
    aqty: new FormControl(),
    sCode: new FormControl()
  });*/

   ngOnInit(){
  }

  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastname:new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required])
  });

  get lastname()
  {
    return this.contactForm.get('lastname');
  }
  onSubmit()
  {
    console.log(this.contactForm.value);
  }
}
