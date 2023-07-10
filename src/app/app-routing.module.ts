import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/insights-dashboard/insights-dashboard.module').then(
        (m) => m.InsightsDashboardModule
      ),
  },
  {
    path: 'my-dashboard',
    loadChildren: () =>
      import('./modules/my-dashboard/my-dashboard.module').then(
        (m) => m.MyDashboardModule
      ),
  },
  {
    path: 'opportunities',
    loadChildren: () =>
      import('./modules/opportunities/opportunities.module').then(
        (m) => m.OpportunitiesModule
      ),
  },
  {
    path: 'leaderboard',
    loadChildren: () =>
      import('./modules/leaderboard/leaderboard.module').then(
        (m) => m.LeaderboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
