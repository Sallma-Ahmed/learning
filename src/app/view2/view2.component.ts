import { Component, OnInit } from '@angular/core';
import { FilterService } from '../service/filter.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrl: './view2.component.css'
})
export class View2Component implements OnInit {
  constructor( private _filterService:FilterService){}
  filter : string =''
  ngOnInit(): void {
   this._filterService.filterData.subscribe((data)=>{
    this.filter = data
    console.log(data,this.filter)
   })
  }


}
