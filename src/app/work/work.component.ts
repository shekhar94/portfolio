import { Component, OnInit } from '@angular/core';
import { OneHealthComponent } from '../one-health/one-health.component';
import { ProjectIntroComponent } from '../project-intro/project-intro.component';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  projects: Project[] = [];
  error: any;
  constructor(private projectsService: ProjectsService) { }
  getProjects(): void {
    this.projectsService
    .getProjects()
    .then(projects => this.projects = projects)
    .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getProjects();
    console.log(this.projects);
  }

}
