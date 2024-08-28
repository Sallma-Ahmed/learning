import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FilterService } from '../service/filter.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrl: './view1.component.css'
})
export class View1Component implements OnInit {
  constructor( private _filterService:FilterService){}
  filter : string =''
  ngOnInit(): void {
   this._filterService.filterData.subscribe((data)=>{
    this.filter = data
    console.log(data,this.filter)
   })
  }


}
