import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoundationComponent } from './foundation.component';

const routes: Routes = [{ path: '', component: FoundationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundationRoutingModule {}
