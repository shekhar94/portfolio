import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkComponent } from '../work/work.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { BlogComponent } from '../blog/blog.component';
import { OneHealthComponent } from '../one-health/one-health.component';

const routes: Routes = [
  { path: '', redirectTo: '/work', pathMatch: 'full' },
  { path: 'work', component: WorkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'work/onehealth', component: OneHealthComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, 
      { enableTracing: true }
    ) 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
