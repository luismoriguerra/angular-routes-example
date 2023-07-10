import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightsDashboardRoutingModule } from './insights-dashboard-routing.module';
import { InsightsDashboardComponent } from './insights-dashboard.component';

@NgModule({
  declarations: [InsightsDashboardComponent],
  imports: [CommonModule, InsightsDashboardRoutingModule],
})
export class InsightsDashboardModule {}
