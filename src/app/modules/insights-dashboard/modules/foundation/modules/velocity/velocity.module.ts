import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VelocityRoutingModule } from './velocity-routing.module';
import { VelocityComponent } from './velocity.component';


@NgModule({
  declarations: [
    VelocityComponent
  ],
  imports: [
    CommonModule,
    VelocityRoutingModule
  ]
})
export class VelocityModule { }
