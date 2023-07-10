import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoundationRoutingModule } from './foundation-routing.module';
import { FoundationComponent } from './foundation.component';


@NgModule({
  declarations: [
    FoundationComponent
  ],
  imports: [
    CommonModule,
    FoundationRoutingModule
  ]
})
export class FoundationModule { }
