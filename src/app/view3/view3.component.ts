import { Component, OnInit } from '@angular/core';
import { FilterService } from '../service/filter.service';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrl: './view3.component.css'
})
export class View3Component implements OnInit {
  constructor( private _filterService:FilterService){}
  filter : string =''
  ngOnInit(): void {
   this._filterService.filterData.subscribe((data)=>{
    this.filter = data
    console.log(data,this.filter)
   })
  }


}
