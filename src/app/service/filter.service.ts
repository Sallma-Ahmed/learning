import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }
  filter= new BehaviorSubject<string>('كل')
  filterData = this.filter.asObservable()

  update(data:string){
    this.filter.next(data)
  }
}
