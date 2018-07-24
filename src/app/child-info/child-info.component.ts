import { Component, OnInit } from '@angular/core';
import { childInfoClass } from '../childInfo';

@Component({
  selector: 'app-child-info',
  templateUrl: './child-info.component.html',
  styleUrls: ['./child-info.component.css']
})
export class ChildInfoComponent implements OnInit {

  constructor() {
    // Activate Carousel
}

  ngOnInit() {
  }


public childArray= [
{
childName:'Mukesh',
childAge:15,
childClass:10,
childTotalFee:12000,
childFeePaid:2000,
childPhoto:'assets/images/1.JPG'
},
{
childName:'Aslam',
childAge:10,
childClass:5,
childTotalFee:12000,
childFeePaid:10000,
childPhoto:'assets/images/2.JPG'
},
 {
 childName:'Ramesh',
 childAge:12,
 childClass:6,
 childTotalFee:12000,
 childFeePaid:7000,
 childPhoto:'assets/images/3.JPG'
 },
  {
  childName:'Mohsin',
  childAge:10,
  childClass:5,
  childTotalFee:12000,
  childFeePaid:7500,
  childPhoto:'assets/images/4.JPG'
  },
   {
   childName:'Chintu',
   childAge:15,
   childClass:10,
   childTotalFee:12000,
   childFeePaid:10000,
   childPhoto:'assets/images/5.JPG'
   },
    {
    childName:'Ramesh',
    childAge:10,
    childClass:5,
    childTotalFee:12000,
    childFeePaid:10000,
    childPhoto:'assets/images/6.JPG'
    }
];
};
