import { PagesCreateComponent } from './pages/pages-create/pages-create.component';
import { PagesListComponent } from './pages/pages-list/pages-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing.module';
import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesDetailsComponent } from './pages/pages-details/pages-details.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PagesComponent,
    PagesListComponent,
    PagesCreateComponent,
    PagesDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {}
