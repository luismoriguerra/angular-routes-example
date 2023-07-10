import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoundationComponent } from './foundation.component';

const routes: Routes = [
  // { path: '', component: FoundationComponent },
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'overview',
    loadChildren: () =>
      import('./modules/overview/overview.module').then(
        (m) => m.OverviewModule
      ),
  },
  {
    path: 'velocity',
    loadChildren: () =>
      import('./modules/velocity/velocity.module').then(
        (m) => m.VelocityModule
      ),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./modules/reports/reports.module').then((m) => m.ReportsModule),
  },
  { path: 'social', loadChildren: () => import('./modules/social/social.module').then(m => m.SocialModule) },
  { path: 'mailing-list', loadChildren: () => import('./modules/mailing-list/mailing-list.module').then(m => m.MailingListModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundationRoutingModule {}
