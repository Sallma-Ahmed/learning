import { Component } from '@angular/core';

@Component({
  selector: 'app-view-switcher',
  templateUrl: './view-switcher.component.html',
  styleUrls: ['./view-switcher.component.css']
})
export class ViewSwitcherComponent {
  currentView: string = 'view1';

  setView(view: string) {
    this.currentView = view;
  }
}
