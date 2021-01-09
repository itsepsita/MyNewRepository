import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LoginservService} from '../loginserv.service';
import { Product }  from '../product';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  vals="Hello";

  fruits=["Kiwi","Orange","Apple"];
  
 
 


  constructor() { }

  ngOnInit()
  {
    

  }


}
