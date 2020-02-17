import { Component, OnInit, Input, Output,EventEmitter,OnChanges,SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit,OnChanges {

  // lines below define ngonchanges () lifecycle hook

 @Input() ParentData : any;

  changesfromchild(){

    this.ParentData -=1;
  }
  ngOnChanges(changes :SimpleChanges){
  
    console.log(changes);
  }

  // line below defines the component communication using @output() 

  @Output() foo = new EventEmitter();
   counter=0;
   SendFoo(){
    this.counter = this.counter+1;
    this.foo.emit(this.counter);
    }  
    // line below defines the component communication using @input() 
   @Input()  helloMessage : string ;

  constructor() { }
  ngOnInit() {
  }
    
}
