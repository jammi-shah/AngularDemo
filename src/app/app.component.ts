import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data : any;
  title = 'Starting Angular Tutorials';
  // ngonchanges () lifecycle hook
   dataval = 0;
  changesfromparent(){

    this.dataval += 1;
  }
// line below defines the component communication using @output() 
     count : any;
    Dpfoo(count)
    {
    console.log(count); 
    } 
// component communication code below
  parentMessage = "i am the  parent component message";
  childMessage = "i will be the child component message";
 // data binding code property binding [] and event binding code () below :
  height : number = 40;
  num1 : number=10; 
  num2 : number=20;
  result : number;
  add(){
    this.result = this.num1 + this.num2;
  }
  ngOnInit(): void{

    this.data = this.getData();
    
  }
  getData(){
    return[     
        {   
           "_id" : "1",
           "name" : "jammi",
          "class" : "B.techone"
        },
        {   
          "_id" : "2",
           "name" : "Anzar",
          "class" : "B.techtwo"
        },
        {   
          "_id" : "1",
           "name" : "Abid",
          "class" :"B.techthree"
        }
      ]

    }
  // two way data binding code below [()] :
  val1 : number;
  val2 : number;
  result1 : number;
  caladd(){

    this.result1 = this.val1 + this.val2;
  }
  }
