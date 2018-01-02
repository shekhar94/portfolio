import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-intro',
  templateUrl: './project-intro.component.html',
  styleUrls: ['./project-intro.component.css']
})
export class ProjectIntroComponent  {
  @Input() project: Project;
  constructor(private projectsService: ProjectsService) {}
  onProjectClick(header) {
    this.projectsService.setHeader(header);
  }
}
