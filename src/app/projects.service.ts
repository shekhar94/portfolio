import { Injectable } from '@angular/core';
import { Project } from './project';

const projects: Project[] = [{
  projectDescription: "Making a difference in Health Education with an EHR application.",
  tags: ["ENTERPRISE", "EDUCATION"],
  projectInfo: {
    project: "Enterprise Design of EHR (Electronic Health Records)",
    client: "McGraw Hill Education",
  },
  contentPos: "right",
  style: {
    description: "project-des",
    tags: "project-tags",
    button: "pt-btn",
    info: "project-info"
  }
},{
    projectDescription: "Helping Dubai schools to digitize contracts and track kids' progress.",
    tags: ["ENTERPRISE", "EDUCATION"],
    projectInfo: {
      project: "Enterprise Design of EHR (Electronic Health Records)",
      client: "McGraw Hill Education",
    },
    contentPos: "left",
    style: {
      description: "project-des",
      tags: "project-tags",
      button: "pt-btn",
      info: "project-info"
    }
},{
  projectDescription: "Bringing the organizational change with design thinking.",
  tags: ["ENTERPRISE", "EDUCATION"],
  projectInfo: {
    project: "Enterprise Design of EHR (Electronic Health Records)",
    client: "McGraw Hill Education",
  },
  contentPos: "right",
  style: {
    description: "project-des",
    tags: "project-tags",
    button: "pt-btn",
    info: "project-info"
  }
},{
  projectDescription: "Gamifying the pshychology for students.",
  tags: ["ENTERPRISE", "EDUCATION","CONCEPT"],
  projectInfo: {
    project: "Enterprise Design of EHR (Electronic Health Records)",
    client: "McGraw Hill Education",
  },
  contentPos: "left",
  style: {
    description: "project-des",
    tags: "project-tags",
    button: "pt-btn",
    info: "project-info"
  }
},{
  projectDescription: "Making a difference in Health Education with an EHR application.",
  tags: ["ENTERPRISE", "EDUCATION"],
  projectInfo: {
    project: "Enterprise Design of EHR (Electronic Health Records)",
    client: "McGraw Hill Education",
  },
  contentPos: "right",
  style: {
    description: "project-des",
    tags: "project-tags",
    button: "pt-btn",
    info: "project-info"
  }
}];
@Injectable()
export class ProjectsService {
  getProjects() {
    return new Promise<Project[]>((resolve, reject) => {
      resolve(projects);
    });
  }
}
