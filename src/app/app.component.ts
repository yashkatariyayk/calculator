import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  title = 'calculator';
   public name: string;
   public maths: number;
   public science:number;
   public english:number;
   public result:number;
   public result1:number;
  public studentdata:any[]=[{name:"yash",maths:80,science:70,english:80,result:''},
             
]
      myresult()
      {
         this.result1=this.maths+this.science+this.english;
      }            
}
//{name:"jay",maths:70,science:60,english:56,result:''},
//{name:"kishan",maths:56,science:89,english:50,result:''},
//{name:"devdatt",maths:87,science:84,english:40,result:''},
//{name:"jayesh",maths:80,science:70,english:50,result:''}    ]
