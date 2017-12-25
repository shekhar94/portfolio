import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { OneHealthComponent } from './one-health/one-health.component';
import { ProjectIntroComponent } from './project-intro/project-intro.component';
import { ProjectsService } from './projects.service';
import { EhrComponent } from './ehr/ehr.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    OneHealthComponent,
    ProjectIntroComponent,
    EhrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
