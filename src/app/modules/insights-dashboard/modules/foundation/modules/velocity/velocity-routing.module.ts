import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VelocityComponent } from './velocity.component';

const routes: Routes = [{ path: '', component: VelocityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VelocityRoutingModule { }
