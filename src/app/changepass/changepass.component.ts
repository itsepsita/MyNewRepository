import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {

  oldpass="";
  newpass="";
  confirmpass="";
  message="";
  spanStyle="";

  verifyPassword()
  {
    if(this.oldpass==this.newpass)
    {
      this.message="Password Can't be same";
      this.spanStyle="spclassR";
    }
   else if(this.confirmpass==this.newpass)
    {
      this.message="Password Verified";
      this.spanStyle="spclassG";
    }
    else if(this.newpass!= this.confirmpass)
    {
      this.message="Password Mismatch";
      this.spanStyle="spclassR";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
