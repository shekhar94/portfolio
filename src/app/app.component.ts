import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeTab: string = "work";
  onTabClick = function(activeTab: string) {
    this.activeTab = activeTab;
  }
}
