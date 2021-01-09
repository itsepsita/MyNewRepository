
import{Component,OnInit} from '@angular/core';
import{ FormGroup, FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class SignupComponent implements OnInit
{
  constructor(){}

  ngOnInit()
{}


}

export class AppComponent implements OnInit
{
  title = 'Welcome to Angular Application!';
  username ="Epsita";
  textGiven ="I am The best";

  logDate = new Date();

  number1: number= 236.877;
showp:boolean=false;



constructor(){}

firstname="";

ngOnInit(){}

onSubmit(contactForm:any)
{
  console.log(contactForm);
}


countries= ["India","UK","Africa","USA"];





  function()
  {
    this.title ="Title is changes....";
  }

  tools=["photoshop","vscode","eclipse","netbeans"];

  fans ={
    id:"F001", name:"Kaitan" ,price:3500

  };
  mon ="February";
  itemList=[
    {id:"P001", name:"Apple",price:"230",category:"fruit"},
    {id:"P002",name:"Oppo",price:"15000",category:"mobile"},
    {id:"P003", name:"Kiwi",price:"2030",category:"fruit"},
    {id:"P004",name:"Redmi",price:"105000",category:"mobile"}
  ];

  months=["--Select--","January","February","March","April","May","June","July","August","September","October","November","December"];
  year:string="";
  feb="";
  month:string="--Select--";
  leapyear()
  {
    if(parseInt(this.year)%4==0)
    {
      this.feb = "29 days";
    }
    else
    {
      this.feb ="28 days";
    }
  }

  id="";
  price="";
  category="";
  name="";
  clicked()
  {
    
    this.itemList.push({id:this.id, name:this.name,price:this.price,category:this.category});
  }
}

