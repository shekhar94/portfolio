import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeTab: string = "work";
  projectThemeColor: string = "project-theme-1";
  projectThemeBg: string = "project-theme-bg-1";
  activeClass: string = "project-theme-1-active";
  header: {
    headerBg: string,
    headerColor: string
  };
  _subscription: any;

  constructor(private projectsService: ProjectsService) {
    this.header = projectsService.header;
    this._subscription = projectsService.headerChange.subscribe((value) => {
      this.header = value;
      this.onProjectClick(this.header.headerColor, this.header.headerBg);
    })
  }

  onTabClick = function(activeTab: string) {
    this.activeTab = activeTab;
  }
  getActiveClass = function(tab: string) {
    if (this.activeTab === tab) {
      return this.activeClass;
    }
    return "";
  }
  onProjectClick = function(projectThemeColor: string, projectThemeBg: string) {
    this.projectThemeColor = projectThemeColor;
    this.projectThemeBg = projectThemeBg;
    this.activeClass = projectThemeColor + '-active';
  }
}
