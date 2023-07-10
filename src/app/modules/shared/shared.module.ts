import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [MainSidebarComponent],
  exports: [MainSidebarComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class SharedModule {}
