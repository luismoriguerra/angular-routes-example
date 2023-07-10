import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';

@NgModule({
  declarations: [MainSidebarComponent],
  exports: [MainSidebarComponent],
  imports: [CommonModule],
})
export class SharedModule {}
