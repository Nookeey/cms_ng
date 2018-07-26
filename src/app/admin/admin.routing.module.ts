import { PagesDetailsComponent } from './pages/pages-details/pages-details.component';
import { PagesCreateComponent } from './pages/pages-create/pages-create.component';
import { PagesListComponent } from './pages/pages-list/pages-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const adminRoutes: Routes = [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'pages',
      component: PagesComponent,
      children: [
        {
          path: '',
          component: PagesListComponent,
        },
        {
          path: 'create',
          component: PagesCreateComponent
        },
        {
          path: ':id',
          component: PagesDetailsComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
