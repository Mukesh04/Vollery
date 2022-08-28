import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { FeaturesComponent } from './features/features.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    AdminLayoutComponent,
    TeamComponent,
    BlogComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule, 
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
