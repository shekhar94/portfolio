import { Injectable } from '@angular/core';
import { Project } from './project';
import { Subject } from 'rxjs/Subject';

const projects: Project[] = [{
  projectDescription: "Making a difference in Health Education with an EHR application.",
  tags: ["ENTERPRISE", "EDUCATION"],
  projectInfo: {
    project: "Enterprise Design of EHR (Electronic Health Records)",
    client: "McGraw Hill Education",
  },
  contentPos: "right",
  style: {
    description: "project-des pr-des-1",
    tags: "project-tags",
    button: "pt-btn pt-btn-1",
    info: "project-info",
    header: {
      headerBg: "project-theme-bg-1",
      headerColor: "project-theme-1"
    }
  },
  router: "ehr"
},{
    projectDescription: "Helping Dubai schools to digitize contracts and track kids' progress.",
    tags: ["ENTERPRISE", "EDUCATION"],
    projectInfo: {
      project: "Enterprise Design of EHR (Electronic Health Records)",
      client: "McGraw Hill Education",
    },
    contentPos: "left",
    style: {
      description: "project-des pr-des-2",
      tags: "project-tags",
      button: "pt-btn pt-btn-2",
      info: "project-info",
      header: {
        headerBg: "project-theme-bg-2",
        headerColor: "project-theme-2"
      }
    },
    router: "onehealth"
},{
  projectDescription: "Bringing the organizational change with design thinking.",
  tags: ["ENTERPRISE", "EDUCATION"],
  projectInfo: {
    project: "Enterprise Design of EHR (Electronic Health Records)",
    client: "McGraw Hill Education",
  },
  contentPos: "right",
  style: {
    description: "project-des pr-des-3",
    tags: "project-tags",
    button: "pt-btn pt-btn-3",
    info: "project-info",
    header: {
      headerBg: "project-theme-bg-3",
      headerColor: "project-theme-3"
    }
  },
  router: "ehr"
},{
  projectDescription: "Gamifying the pshychology for students.",
  tags: ["ENTERPRISE", "EDUCATION","CONCEPT"],
  projectInfo: {
    project: "Enterprise Design of EHR (Electronic Health Records)",
    client: "McGraw Hill Education",
  },
  contentPos: "left",
  style: {
    description: "project-des pr-des-4",
    tags: "project-tags",
    button: "pt-btn pt-btn-1",
    info: "project-info",
    header: {
      headerBg: "project-theme-bg-4",
      headerColor: "project-theme-4"
    }
  },
  router: "ehr"
},{
  projectDescription: "Making a difference in Health Education with an EHR application.",
  tags: ["ENTERPRISE", "EDUCATION"],
  projectInfo: {
    project: "Enterprise Design of EHR (Electronic Health Records)",
    client: "McGraw Hill Education",
  },
  contentPos: "right",
  style: {
    description: "project-des pr-des-1",
    tags: "project-tags",
    button: "pt-btn pt-btn-2",
    info: "project-info",
    header: {
      headerBg: "project-theme-bg-1",
      headerColor: "project-theme-1"
    }
  },
  router: "ehr"
}];
@Injectable()
export class ProjectsService {
  header: {
    headerBg: string,
    headerColor: string
  };
  headerChange: Subject<{
    headerBg: string,
    headerColor: string
  }> = new Subject<{
    headerBg: string,
    headerColor: string
  }>();
  constructor() {
    this.header = {
      headerBg: "project-theme-bg-1",
      headerColor: "project-theme-1"
    }; 
  }
  setHeader(header: {
    headerBg: string,
    headerColor: string
  }) {
    this.header = header;
    this.headerChange.next(this.header);
  }
  getProjects() {
    return new Promise<Project[]>((resolve, reject) => {
      resolve(projects);
    });
  }
}
