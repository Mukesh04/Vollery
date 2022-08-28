import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { BlogComponent } from './blog/blog.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: AdminLayoutComponent,
  children: [ 
    {
      path: 'home',
      component: HomeComponent, 
    },
    {
      path: 'team',
      component: TeamComponent, 
    },
    {
      path: 'blog',
      component: BlogComponent, 
    },
    {
      path: 'features',
      component: FeaturesComponent, 
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
