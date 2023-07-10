import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailingListRoutingModule } from './mailing-list-routing.module';
import { MailingListComponent } from './mailing-list.component';


@NgModule({
  declarations: [
    MailingListComponent
  ],
  imports: [
    CommonModule,
    MailingListRoutingModule
  ]
})
export class MailingListModule { }
