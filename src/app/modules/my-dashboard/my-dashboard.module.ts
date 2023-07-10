import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDashboardRoutingModule } from './my-dashboard-routing.module';
import { MyDashboardComponent } from './my-dashboard.component';


@NgModule({
  declarations: [
    MyDashboardComponent
  ],
  imports: [
    CommonModule,
    MyDashboardRoutingModule
  ]
})
export class MyDashboardModule { }
