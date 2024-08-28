import { Component } from '@angular/core';
import { FilterService } from './service/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private filterService:FilterService){}
  update(data:string){
    this.filterService.update(data)
  }
  title = 'learning';
progress: any;
}
