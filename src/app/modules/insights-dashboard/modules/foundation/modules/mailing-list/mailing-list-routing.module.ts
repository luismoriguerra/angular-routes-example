import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailingListComponent } from './mailing-list.component';

const routes: Routes = [{ path: '', component: MailingListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailingListRoutingModule { }
