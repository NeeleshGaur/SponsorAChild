import { Component, OnInit } from '@angular/core';
import { childInfoClass } from '../childInfo';

@Component({
  selector: 'app-child-info',
  templateUrl: './child-info.component.html',
  styleUrls: ['./child-info.component.css']
})
export class ChildInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
child1 : childInfoClass={
childName:'Mukes',
childAge:15,
childClass:10,
childTotalFee:12000,
childFeePaid:2000
}; 
public childArray= [
{
childName:'Mukesh',
childAge:15,
childClass:10,
childTotalFee:12000,
childFeePaid:2000
},
{
childName:'Aslam',
childAge:10,
childClass:5,
childTotalFee:12000,
childFeePaid:10000
}
];
};
