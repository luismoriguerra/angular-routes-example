import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsDashboardComponent } from './insights-dashboard.component';

const routes: Routes = [
  { path: '', component: InsightsDashboardComponent },
  {
    path: 'foundation',
    loadChildren: () =>
      import('./modules/foundation/foundation.module').then(
        (m) => m.FoundationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsightsDashboardRoutingModule {}
